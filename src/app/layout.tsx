import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Real Madrid Tour Bernabéu',
  description: 'Explore the iconic Bernabéu Stadium with the official Real Madrid virtual tour',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
