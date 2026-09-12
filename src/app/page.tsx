import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { TransitionSection } from "@/components/sections/TransitionSection";
import { AndroidProjectsSection } from "@/components/sections/AndroidProjectsSection";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { HowIBuildSection } from "@/components/sections/HowIBuildSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { BuilderSection } from "@/components/sections/BuilderSection";
import { AIProjectsSection } from "@/components/sections/AIProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Youssef Osama Ali | Android Developer",
  description:
    "Android Developer with 3+ years of experience building modern Android applications with Kotlin, Jetpack Compose, MVVM, and modern AI-powered development workflows.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TransitionSection />
      <AndroidProjectsSection mode="featured" />
      <TechnicalExpertise />
      <HowIBuildSection />
      <ExperienceSection />
      <BuilderSection />
      <AndroidProjectsSection mode="personal" />
      <AIProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
