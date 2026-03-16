import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tour Bernabéu – Visita el Estadio del Real Madrid',
  description: 'Découvrez l\'histoire et la grandeur du Stade Bernabéu lors d\'une visite guidée.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
