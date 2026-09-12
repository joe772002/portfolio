import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

// Self-hosted variable fonts (no runtime dependency on Google Fonts).
// Rubik is loaded via @font-face in globals.css; JetBrains Mono via next/font.
const jetbrainsMono = localFont({
  src: "../assets/fonts/jetbrains-mono-variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

const siteUrl = "https://yosama.vercel.app";
const title = "Youssef Osama Ali | Android Engineer & AI-Powered Product Builder";
const description =
  "Android Engineer with 3+ years of professional experience building production Android applications with Kotlin and Jetpack Compose — enterprise and government platforms — plus AI-powered product building.";

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
    "MVVM",
    "Hilt",
    "Ktor",
    "Room",
    "AI-Powered Development",
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
      dir="ltr"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text-primary)] antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
