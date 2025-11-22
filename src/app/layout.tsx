import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Indify - Building Ventures, Building Nation | Venture Builder in India",
    template: "%s | Indify"
  },
  description: "A venture builder empowering mission-driven founders with resources, functional expertise and strategic partnerships to dream, build, and grow ventures in Bharat. Specializing in BFSI sector innovation.",
  keywords: ["venture builder", "India startups", "Bharat ventures", "BFSI sector", "startup incubator", "mission-driven founders", "digital inclusion India", "venture capital India", "startup ecosystem", "Indian entrepreneurs"],
  authors: [{ name: "Indify" }],
  creator: "Indify",
  publisher: "Indify",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: 'Indify - Building Ventures, Building Nation',
    description: 'A venture builder empowering mission-driven founders with resources, functional expertise and strategic partnerships to dream, build, and grow ventures in Bharat.',
    siteName: 'Indify',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Indify - Building Ventures, Building Nation',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indify - Building Ventures, Building Nation',
    description: 'Empowering mission-driven founders to build and grow ventures in Bharat.',
    images: ['/twitter-image.png'],
    creator: '@indify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indify",
    "description": "A venture builder empowering mission-driven founders with resources, functional expertise and strategic partnerships to dream, build, and grow ventures in Bharat.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo.png`,
    "sameAs": [
      // Add your social media URLs here
      // "https://twitter.com/indify",
      // "https://linkedin.com/company/indify",
      // "https://facebook.com/indify"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Venture Building",
      "Startup Incubation",
      "BFSI Sector",
      "Digital Inclusion",
      "Strategic Partnerships"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </body>
    </html>
  );
}
