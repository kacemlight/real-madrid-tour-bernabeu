import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tour del Bernabéu | Real Madrid',
  description: 'Experience the iconic Bernabéu Stadium. Book your official Real Madrid tour.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}