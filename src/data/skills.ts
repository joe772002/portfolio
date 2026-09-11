import type { SkillGroup } from "@/types";

export const androidSkills: SkillGroup[] = [
  {
    title: "Android Development",
    titleAr: "تطوير الأندرويد",
    skills: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Material Design 3"],
  },
  {
    title: "Architecture",
    titleAr: "المعمارية",
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
    titleAr: "حقن التبعيات",
    skills: ["Hilt", "Koin"],
  },
  {
    title: "Networking",
    titleAr: "الشبكات",
    skills: ["Ktor", "Retrofit", "REST APIs", "API Integration"],
  },
  {
    title: "Authentication & Security",
    titleAr: "المصادقة والأمان",
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
    titleAr: "البيانات المحلية",
    skills: ["Room", "DataStore"],
  },
  {
    title: "Background Work",
    titleAr: "الشغل في الخلفية",
    skills: ["WorkManager"],
  },
  {
    title: "Kotlin",
    skills: ["Coroutines", "Flow", "StateFlow", "LiveData"],
  },
];

export const aiSkills: SkillGroup[] = [
  {
    title: "Vibe Coding",
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
    titleAr: "تطوير المنتجات",
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
    titleAr: "منهجية الشغل الهندسية",
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
