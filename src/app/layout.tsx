import type { Metadata } from 'next';
import '../styles/globals.css';
import { IBM_Plex_Sans as Sans, Spline_Sans_Mono as Mono } from 'next/font/google';

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
      <body className={'overflow-x-hidden bg-darkest text-lightest font-body h-screen w-screen items-center'}>
        {children}
      </body>
    </html>
  );
}
