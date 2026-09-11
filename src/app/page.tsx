import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { TransitionSection } from "@/components/sections/TransitionSection";
import { HomeCards } from "./HomeCards";

export const metadata: Metadata = {
  title: "Android Developer & Vibe Coder",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TransitionSection />
      <HomeCards />
    </>
  );
}
