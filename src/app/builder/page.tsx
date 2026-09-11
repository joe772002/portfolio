import type { Metadata } from "next";
import { BuilderSection } from "@/components/sections/BuilderSection";
import { ProductWorkflowSection } from "@/components/sections/ProductWorkflowSection";
import { AISkillsSection } from "@/components/sections/AISkillsSection";

export const metadata: Metadata = {
  title: "AI Builder",
  description:
    "AI-assisted development workflows — prototyping, MVP building, and shipping products faster.",
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
