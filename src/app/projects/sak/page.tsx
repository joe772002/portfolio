import type { Metadata } from "next";
import { CaseStudyView } from "@/components/projects/CaseStudyView";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "SAK – Ministry of Justice Qatar — Case Study",
  description:
    "Production government Android application case study — Java, XML, MVVM, Retrofit, OAuth 2.0, document workflows, Arabic RTL and English.",
};

export default function SakPage() {
  return <CaseStudyView study={caseStudies.sak} />;
}
