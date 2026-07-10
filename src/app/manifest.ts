import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mithil K Gowda | Security Engineer',
    short_name: 'Mithil K Gowda',
    description: 'Portfolio of Mithil K Gowda, Security Engineer and Systems Researcher.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
