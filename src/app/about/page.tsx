import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description: "About Youssef Osama Ali — Android Developer & AI-Assisted Builder.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <AboutSection />
    </div>
  );
}
