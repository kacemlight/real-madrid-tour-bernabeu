import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Tour Bernabéu | Real Madrid CF', description: 'Book your tour of Santiago Bernabéu' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}