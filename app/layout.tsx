import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'AURUM — Wear Your Power',
  description: "Curated women's accessories. Handpicked for the bold.",
  keywords: ['fashion', 'accessories', 'handbags', 'jewelry', 'women', 'luxury'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins bg-brand-black text-white overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
