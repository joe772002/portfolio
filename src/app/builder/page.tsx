import type { Metadata } from "next";
import { BuilderSection } from "@/components/sections/BuilderSection";
import { ProductWorkflowSection } from "@/components/sections/ProductWorkflowSection";
import { AISkillsSection } from "@/components/sections/AISkillsSection";

export const metadata: Metadata = {
  title: "Vibe Coding",
  description:
    "Vibe coding — turning ideas into prototypes, MVPs, and shipped products faster.",
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
