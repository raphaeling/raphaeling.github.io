import type { Metadata } from 'next';
import '../styles/globals.css';
import { IBM_Plex_Sans as Sans, Spline_Sans_Mono as Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const sans = Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-sans',
});

const mono = Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Raphael Gatchalian',
  description: "Raphael Gatchalian's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${sans.variable} ${mono.variable}`}>
      <head>
        <meta property='og:image' content='/temp-ogimage.png' />
      </head>
      <body className={'overflow-x-hidden text-lightest font-body w-screen h-screen'}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
