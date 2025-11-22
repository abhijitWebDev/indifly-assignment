import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Indify - Building Ventures, Building Nation',
    short_name: 'Indify',
    description: 'A venture builder empowering mission-driven founders with resources, functional expertise and strategic partnerships to dream, build, and grow ventures in Bharat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#024397',
    theme_color: '#024397',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
