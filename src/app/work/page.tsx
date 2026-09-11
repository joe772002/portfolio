import type { Metadata } from "next";
import { AndroidProjectsSection } from "@/components/sections/AndroidProjectsSection";
import { AIProjectsSection } from "@/components/sections/AIProjectsSection";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected Android projects and AI-assisted builds.",
};

export default function WorkPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <AndroidProjectsSection />
      <AIProjectsSection />
    </div>
  );
}
