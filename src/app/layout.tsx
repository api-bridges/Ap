import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Live31 - Wilderness Adventure Sponsorship',
  description: '24/7 wilderness live-stream platform connecting adventurers with brands through authentic outdoor sponsorship.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
