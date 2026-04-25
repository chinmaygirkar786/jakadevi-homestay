import type { Metadata } from "next";
import { DM_Serif_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisInit } from "@/lib/lenis";

const siteName = "Jakadevi Homestay";
const siteDescription =
  "Peaceful coastal homestay near Malvan. Family-friendly stay with rental bikes available. Call now for availability.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://jakadevihomestay.example";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jakadevi Homestay in Malvan | Affordable Coastal Stay Near Beach",
  description:
    "Affordable homestay in Malvan for a calm coastal stay in Konkan—near the beach, family-friendly, with rental bikes. Call now for availability.",
  applicationName: siteName,
  keywords: [
    "homestay in Malvan",
    "Malvan stay",
    "coastal homestay",
    "budget stay Malvan",
    "Konkan homestay",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: "Jakadevi Homestay in Malvan | Affordable Coastal Stay Near Beach",
    description:
      "Affordable homestay in Malvan for a calm coastal stay in Konkan—near the beach, family-friendly, with rental bikes. Call now for availability.",
    url: "/",
    images: [
      {
        url: "/images/IMG-20260424-WA0028.jpg",
        width: 1200,
        height: 630,
        alt: "Jakadevi Homestay in Malvan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakadevi Homestay in Malvan | Affordable Coastal Stay Near Beach",
    description:
      "Affordable homestay in Malvan for a calm coastal stay in Konkan—near the beach, family-friendly, with rental bikes. Call now for availability.",
    images: ["/images/IMG-20260424-WA0028.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisInit />
        {children}
      </body>
    </html>
  );
}
