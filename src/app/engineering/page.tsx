import { redirect } from "next/navigation";

export const metadata = {
  title: "Experience & Engineering",
  description:
    "Experience and engineering background — consolidated into the single Experience & Engineering section on the main portfolio.",
};

export default function EngineeringPage() {
  redirect("/#experience");
}
