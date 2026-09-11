import type { WorkflowStep } from "@/types";

export const productWorkflow: WorkflowStep[] = [
  {
    index: "01",
    title: "Idea",
    description: "A problem, feature, or product opportunity.",
  },
  {
    index: "02",
    title: "Define",
    description: "Define the direction before writing code.",
    items: ["MVP", "Core features", "User flows", "Technical direction"],
  },
  {
    index: "03",
    title: "Build",
    description: "Use vibe coding to accelerate execution.",
    items: ["Development", "Prototyping", "UI creation", "Feature implementation"],
  },
  {
    index: "04",
    title: "Review",
    description: "Apply engineering judgment to what was built.",
    items: ["Code", "Architecture", "Logic", "Performance", "Maintainability"],
  },
  {
    index: "05",
    title: "Iterate",
    description: "Refine based on review and real usage.",
    items: ["Product", "Features", "User experience", "Architecture"],
  },
  {
    index: "06",
    title: "Ship",
    description: "Produce a working result.",
    items: ["A prototype", "MVP", "Working product"],
  },
];
