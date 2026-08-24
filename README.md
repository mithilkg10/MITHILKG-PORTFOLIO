# Mithil K Gowda Cybersecurity Portfolio

Personal cybersecurity engineering and research portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, and Mermaid.

The site presents security projects, research work, professional experience, certifications, technical assessments, and selected engineering evidence in one recruiter friendly interface.

## Technology

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion
* GSAP
* Three.js
* React Three Fiber
* Mermaid
* Playwright tooling
* GitHub Actions
* Trivy filesystem scanning

## Local development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Validation

The repository CI performs:

* Dependency installation
* ESLint validation
* TypeScript type checking
* Production build validation
* Trivy scanning for high and critical findings

## Content structure

```text
src/
  app/
  components/
    layout/
    sections/
    three/
    ui/
  lib/data/
public/
```

Portfolio content is maintained primarily through the project data layer so information can be updated consistently.

## Public assets

Public portfolio assets should use descriptive filenames and should contain only material intentionally published for recruiters or visitors.

Recommended naming examples:

```text
mithil_k_gowda_resume.pdf
google_cybersecurity_certificate.pdf
incident_response_analysis.pdf
stavp_one_page.pdf
```

## Deployment

The GitHub repository homepage points to the deployed portfolio.

## Repository purpose

This repository is a presentation layer for cybersecurity engineering work. The deeper technical implementation for major projects is maintained in their respective repositories, particularly ABHEDYA and VYOMRIX.
