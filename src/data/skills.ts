import type { SkillGroup } from "@/types";

export const androidSkills: SkillGroup[] = [
  {
    title: "Android Development",
    skills: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Material Design 3"],
  },
  {
    title: "Architecture",
    skills: [
      "MVVM",
      "Repository Pattern",
      "Clean Architecture Principles",
      "Separation of Concerns",
      "UI State Management",
      "Scalable Application Architecture",
    ],
  },
  {
    title: "Dependency Injection",
    skills: ["Hilt", "Koin"],
  },
  {
    title: "Networking",
    skills: ["Ktor", "Retrofit", "REST APIs", "API Integration"],
  },
  {
    title: "Authentication & Security",
    skills: [
      "OAuth",
      "Authentication",
      "Authorization",
      "Token Lifecycle Management",
      "Secure API Communication",
      "Secure Storage",
      "Optional SSL Pinning",
    ],
  },
  {
    title: "Local Data",
    skills: ["Room", "DataStore"],
  },
  {
    title: "Background Work",
    skills: ["WorkManager"],
  },
  {
    title: "Kotlin",
    skills: ["Coroutines", "Flow", "StateFlow", "LiveData"],
  },
];

export const aiSkills: SkillGroup[] = [
  {
    title: "AI-Assisted Development",
    skills: [
      "AI Coding Agents",
      "Prompt Engineering for Development",
      "AI-Assisted Debugging",
      "AI-Assisted Refactoring",
      "AI-Assisted Code Review",
    ],
  },
  {
    title: "Product Development",
    skills: [
      "Rapid Prototyping",
      "MVP Development",
      "Feature Development",
      "Product Experimentation",
      "Rapid Iteration",
    ],
  },
  {
    title: "Engineering Workflow",
    skills: [
      "Architecture Exploration",
      "Problem Solving",
      "Code Generation",
      "Code Review",
      "Refactoring",
      "Debugging",
    ],
  },
];

export const aiTools: string[] = [
  "GitHub Copilot",
  "Cursor",
  "Claude",
  "ChatGPT",
  "Coding Agents",
  "AI-Powered IDE Tools",
  "Local AI Models",
];
