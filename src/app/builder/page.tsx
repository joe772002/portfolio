import type { Metadata } from "next";
import { BuilderSection } from "@/components/sections/BuilderSection";
import { ProductWorkflowSection } from "@/components/sections/ProductWorkflowSection";
import { AISkillsSection } from "@/components/sections/AISkillsSection";

export const metadata: Metadata = {
  title: "Software Engineering Projects",
  description:
    "Software engineering projects — turning ideas into prototypes, MVPs, and working products with clean architecture and maintainable code.",
};

export default function BuilderPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <BuilderSection />
      <ProductWorkflowSection />
      <AISkillsSection />
    </div>
  );
}
