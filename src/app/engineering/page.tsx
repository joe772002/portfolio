import type { Metadata } from "next";
import { EngineerSection } from "@/components/sections/EngineerSection";
import { HowIBuildSection } from "@/components/sections/HowIBuildSection";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";

export const metadata: Metadata = {
  title: "Mobile",
  description:
    "Mobile engineering background — Kotlin, Jetpack Compose, scalable mobile architecture.",
};

export default function EngineeringPage() {
  return (
    <>
      <div className="pt-16 sm:pt-20">
        <EngineerSection />
        <HowIBuildSection />
        <TechnicalExpertise />
      </div>
    </>
  );
}
