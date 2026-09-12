import { redirect } from "next/navigation";

export const metadata = {
  title: "Software Engineering Projects",
  description:
    "Software engineering projects — experiments, MVPs, and product concepts. Consolidated into the main portfolio.",
};

export default function BuilderPage() {
  redirect("/#ai-builds");
}
