import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 — Match Calendar',
  description:
    'Subscribe to the full FIFA World Cup 2026 match schedule in your calendar app. Google Calendar, Apple Calendar, Outlook supported.',
  openGraph: {
    title: 'FIFA World Cup 2026 — Match Calendar',
    description: 'Add all 104 World Cup 2026 matches to your calendar in one click.',
    type: 'website',
    url: 'https://worldcup-calender.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-900 text-white">{children}</body>
    </html>
  );
}
