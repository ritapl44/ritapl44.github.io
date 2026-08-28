import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hello, I’m Rita',
  description: 'A small personal corner of the internet for ideas, interests, and new beginnings.',
  openGraph: {
    title: 'Hello, I’m Rita',
    description: 'My first corner of the internet.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Hello, I’m Rita — my first corner of the internet.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello, I’m Rita',
    description: 'My first corner of the internet.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
