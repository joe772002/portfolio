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
  title: "Youssef Osama Ali | Android Engineer & Software Engineer — Kotlin, Jetpack Compose",
  description:
    "Software Engineer specializing in Android development with 3+ years of hands-on Android development across independent projects and professional production apps since July 2024 — Kotlin, Jetpack Compose, MVVM, secure APIs, enterprise and government platforms. Building reliable software across Mobile, Web & Desktop with an AI-assisted workflow.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TransitionSection />
      <ExperienceSection />
      <AndroidProjectsSection mode="featured" />
      <TechnicalExpertise />
      <HowIBuildSection />
      <BuilderSection />
      <AIProjectsSection />
      <AndroidProjectsSection mode="personal" />
      <AboutSection />
      <ContactSection />
    </>
  );
}
