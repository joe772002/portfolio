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
  title: "Youssef Osama Ali | Android Developer — Kotlin, Jetpack Compose",
  description:
    "Android Developer with 3+ years building production Android apps with Kotlin and Jetpack Compose — enterprise and government platforms, MVVM, secure APIs, and complex workflows.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TransitionSection />
      <AndroidProjectsSection mode="featured" />
      <ExperienceSection />
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
