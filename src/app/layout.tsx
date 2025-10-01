import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeCoin — Fun memecoin landing with simple buy steps",
  description: "MemeCoin is a playful memecoin with a friendly vibe. Easy buy steps, clear tokenomics, and a community-first experience for meme lovers.",
  keywords: ["memecoin","crypto","buy memecoin","tokenomics","community","fun","meme","web3","landing page"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MemeCoin — Fun memecoin landing with simple buy steps",
    description: "MemeCoin is a playful memecoin with a friendly vibe. Easy buy steps, clear tokenomics, and a community-first experience for meme lovers.",
    type: "website",
    url: "/",
    siteName: "MemeCoin",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-m-1759320948049-a74989c2.jpg",
      width: 1200,
      height: 630,
      alt: "MemeCoin"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemeCoin — Fun memecoin landing with simple buy steps",
    description: "MemeCoin is a playful memecoin with a friendly vibe. Easy buy steps, clear tokenomics, and a community-first experience for meme lovers.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-m-1759320948049-a74989c2.jpg"],
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}