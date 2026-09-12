import type { Metadata } from "next";
import { CaseStudyView } from "@/components/projects/CaseStudyView";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Tawseek — Want To Make Procurement — Case Study",
  description:
    "Published production Android application case study — Java, Kotlin, MVVM, REST APIs, Google Maps, branch locator, appointment booking, Arabic and English.",
};

export default function TawseekPage() {
  return <CaseStudyView study={caseStudies.tawseek} />;
}
