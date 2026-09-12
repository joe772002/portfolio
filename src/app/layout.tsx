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
const title = "Youssef Osama Ali | Android Engineer . Software Engineer — Kotlin, Jetpack Compose";
const description =
  "Youssef Osama Ali — Software Engineer specializing in Android development with 3+ years of hands-on Android development experience across independent projects and professional production applications since July 2024. Enterprise and government platforms: Kotlin, Jetpack Compose, MVVM, secure API integration, and complex business workflows. Broader software engineering across Mobile, Web & Desktop with an AI-assisted development workflow.";

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
    "Android Engineer",
    "Kotlin Developer",
    "Jetpack Compose Developer",
    "Android Developer Egypt",
    "Kotlin",
    "Jetpack Compose",
    "MVVM",
    "Hilt",
    "Ktor",
    "Room",
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
      <body suppressHydrationWarning className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text-primary)] antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
