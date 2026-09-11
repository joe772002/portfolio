import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Youssef Osama Ali.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <ContactSection />
    </div>
  );
}
