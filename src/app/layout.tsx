import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Real Madrid Tour Bernabéu',
  description: 'Experience the iconic Bernabéu Stadium with our guided tour',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-rm-white text-rm-black">{children}</body>
    </html>
  );
}
