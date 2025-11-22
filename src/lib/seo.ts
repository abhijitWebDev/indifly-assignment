import { Metadata } from 'next'

export const siteConfig = {
  name: 'Indify',
  description: 'A venture builder empowering mission-driven founders with resources, functional expertise and strategic partnerships to dream, build, and grow ventures in Bharat.',
  url: process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  ogImage: '/og-image.png',
  twitterImage: '/twitter-image.png',
  twitterHandle: '@indify',
  keywords: [
    'venture builder',
    'India startups',
    'Bharat ventures',
    'BFSI sector',
    'startup incubator',
    'mission-driven founders',
    'digital inclusion India',
    'venture capital India',
    'startup ecosystem',
    'Indian entrepreneurs',
    'startup accelerator',
    'innovation hub India',
    'entrepreneurship India',
  ],
}

interface SeoProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  noIndex = false,
}: SeoProps = {}): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`

  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      type,
      locale: 'en_IN',
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  }
}

// Organization Schema for structured data
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    // Add your social media URLs here
    // "https://twitter.com/indify",
    // "https://linkedin.com/company/indify",
    // "https://facebook.com/indify"
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  knowsAbout: [
    'Venture Building',
    'Startup Incubation',
    'BFSI Sector',
    'Digital Inclusion',
    'Strategic Partnerships',
  ],
}

// WebSite Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
