import { redirect } from "next/navigation";

export const metadata = {
  title: "Experience & Expertise",
  description:
    "Experience and engineering background — consolidated into the single Experience & Expertise section on the main portfolio.",
};

export default function EngineeringPage() {
  redirect("/#experience");
}
