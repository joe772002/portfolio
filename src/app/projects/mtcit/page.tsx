import type { Metadata } from "next";
import { CaseStudyView } from "@/components/projects/CaseStudyView";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "MTCIT Maritime Platform — Case Study",
  description:
    "Production government Android application case study — Kotlin, Jetpack Compose, MVVM, Ktor, OAuth, documents, offline handling, Arabic RTL and English.",
};

export default function MtcitPage() {
  return <CaseStudyView study={caseStudies.mtcit} />;
}
