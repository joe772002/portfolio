import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Self-hosted variable fonts (no runtime dependency on Google Fonts).
// Cairo is loaded via @font-face in globals.css; JetBrains Mono via next/font.
const jetbrainsMono = localFont({
  src: "../assets/fonts/jetbrains-mono-variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

const siteUrl = "https://youssef-osama.dev";
const title = "Youssef Osama Ali — Android Developer & Vibe Coder";
const description =
  "Youssef Osama Ali — Android Developer specializing in Kotlin, Jetpack Compose, scalable mobile architecture, and vibe-coded product development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Youssef Osama Ali",
  },
  description,
  keywords: [
    "Youssef Osama Ali",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Mobile Engineer",
    "Vibe Coding",
    "Product Builder",
  ],
  authors: [{ name: "Youssef Osama Ali" }],
  creator: "Youssef Osama Ali",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Youssef Osama Ali",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text-primary)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
