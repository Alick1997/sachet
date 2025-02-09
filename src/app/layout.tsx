import type { Metadata } from "next";
import localFont from "next/font/local";
import {Arimo, Martel_Sans} from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const martel_sans = Martel_Sans({
    weight: '600',
    variable: '--font-martel-sans',
    subsets: ['latin']
})

const arimo = Arimo({
  weight: '600',
  variable: '--font-arimo',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Words for Wednesday",
  description: "art that listens as much as it speaks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${martel_sans.variable} ${arimo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
