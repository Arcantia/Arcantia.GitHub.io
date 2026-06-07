import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import './globals.css';

export const metadata: Metadata = {
  title: siteConfig.server.name,
  description: siteConfig.server.description,
  authors: [{ name: siteConfig.server.author }],
  themeColor: '#9074C6',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    siteName: siteConfig.server.name,
    type: 'website',
    description: siteConfig.server.description,
    url: siteConfig.server.website,
    images: [
      {
        url: `${siteConfig.server.website}/images/logo.webp`,
      },
    ],
  },
  twitter: {
    title: siteConfig.server.name,
    description: siteConfig.server.description,
  },
};

import DisableInteractions from '@/components/DisableInteractions';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/cards.css" />
        <link rel="stylesheet" href="/css/fontawesome.css" />
        <link rel="stylesheet" href="/css/materialdesignicons.css" />
      </head>
      <body className="arcantia-body">
        <DisableInteractions />
        <div id="arcantia-app" className="flex flex-col min-h-full">
          {children}
        </div>
        <Script src="/js/clipboard.js" strategy="afterInteractive" />
        <Script src="/js/axios.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
        <Script src="/js/cards.js" strategy="afterInteractive" />
        <Script src="/js/fontawesome.js" strategy="afterInteractive" />
        <Script src="/js/alpine.js" strategy="afterInteractive" />
        <Script src="/js/jquery.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
