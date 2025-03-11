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
  title: 'Kaptan Medya Organizasyon',
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
    <html lang="tr">
      <head>
        <meta
          name="keywords"
          content="Kocaeli, Gebze, Darıca, İzmit, İstanbul, organizasyon firmalarından biri olan Kaptan Medya organizasyon kurumsal etkinlikler, event, Şirket piknikleri, lansman, festivaller, gala, açılış, organizasyonları, çadır, minder, armut minder kiralama"
        />
        <meta
          name="description"
          content="Gala, Açılış, Tanıtım, Lansman, Yılbaşı, Event, Minder kiralama, festival, İstanbul, Kocaeli, Gebze, Darıca organizasyon firmaları, event, Kaptan Medya organizasyon, profesyonel çadır sistemleri, çadır kiralama, kurumsal etkinlikler, kokteyl"
        />
        <meta
          name="keywords"
          content="Gala, Lansman, festival, Yılbaşı, Kurumsal etkinlikler, İstanbul, Kocaeli, Gebze, Darıca, minder kiralama, çadır kiralama, Karaoke partileri, Kaptan Medya Organizasyon tecrübesiyle size özel çözümler sunar"
        />
        <meta name="author" content="Kaptan Medya Organizasyon" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
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
