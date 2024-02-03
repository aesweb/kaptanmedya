import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
const inter = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kaptan Medya',
  description: 'Kaptan Medya Organizasyon',
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
        </main>
        <Footer />
      </body>
    </html>
  );
}
