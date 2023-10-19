import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import '../styles/globals.css'

const ibmPlexSans = IBM_Plex_Sans({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raphael Gatchalian',
  description: 'Raphael Gatchalian\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} container`}>{children}</body>
    </html>
  )
}
