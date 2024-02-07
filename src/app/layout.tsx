import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import Whatsapp from '@/components/Whatsapp';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kaptan Medya',
  description:
    'Kaptan Medya Organizasyon | Düğün Davet ve Organizasyon | Kocaeli | İstanbul',
  icons: ['/favicon.ico?=v4'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback="...">
          <Navbar />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white text-black">
          {children}
          <SpeedInsights />
        </main>
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
