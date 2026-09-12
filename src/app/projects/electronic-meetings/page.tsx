import type { Metadata } from "next";
import { CaseStudyView } from "@/components/projects/CaseStudyView";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Electronic Meetings Platform — Case Study",
  description:
    "Production enterprise Android application case study — Kotlin, Jetpack Compose, MVVM, Koin, Ktor, calendar, PDF, authentication.",
};

export default function ElectronicMeetingsPage() {
  return <CaseStudyView study={caseStudies["electronic-meetings"]} />;
}
