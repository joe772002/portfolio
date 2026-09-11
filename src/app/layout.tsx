import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Self-hosted variable fonts (no runtime dependency on Google Fonts).
const inter = localFont({
  src: "../assets/fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../assets/fonts/space-grotesk-variable.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../assets/fonts/jetbrains-mono-variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

const siteUrl = "https://youssef-osama.dev";
const title = "Youssef Osama Ali — Android Developer & AI-Assisted Builder";
const description =
  "Youssef Osama Ali — Android Developer specializing in Kotlin, Jetpack Compose, scalable mobile architecture, and AI-assisted product development.";

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
    "AI-Assisted Development",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}else{document.documentElement.dataset.theme="dark"}}catch(e){document.documentElement.dataset.theme="dark"}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text-primary)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
