import { NextResponse } from "next/server";
import { personal } from "@/lib/data/resume";

export const revalidate = 3600;

export async function GET() {
  try {
    const username = personal.githubUsername;
    const headers = {
      Accept: "application/vnd.github.v3+json",
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
    };

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ error: "GitHub API error" }, { status: 502 });
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const languages: Record<string, number> = {};
    for (const repo of repos) {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    }

    return NextResponse.json({
      user: {
        login: user.login,
        name: user.name,
        public_repos: user.public_repos,
        followers: user.followers,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
      },
      repos: repos.map(
        (r: {
          name: string;
          description: string;
          html_url: string;
          language: string;
          stargazers_count: number;
          forks_count: number;
          topics: string[];
        }) => ({
          name: r.name,
          description: r.description,
          html_url: r.html_url,
          language: r.language,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          topics: r.topics || [],
        })
      ),
      languages,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}
