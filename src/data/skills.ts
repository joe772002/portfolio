import type { SkillGroup } from "@/types";

export const androidSkills: SkillGroup[] = [
  {
    title: "Android",
    titleAr: "أندرويد",
    skills: ["Kotlin", "Jetpack Compose", "Material 3", "Android SDK", "Java", "Coroutines & Flow"],
  },
  {
    title: "Architecture",
    titleAr: "المعمارية",
    skills: [
      "MVVM",
      "Repository Pattern",
      "Clean Architecture concepts",
      "State-driven UI",
      "Dependency Injection (Hilt, Koin)",
    ],
  },
  {
    title: "Networking",
    titleAr: "الشبكات",
    skills: ["Ktor", "Retrofit", "REST APIs", "API Integration"],
  },
  {
    title: "Data",
    titleAr: "البيانات",
    skills: ["Room", "DataStore", "WorkManager"],
  },
  {
    title: "Security",
    titleAr: "الأمان",
    skills: [
      "OAuth / Keycloak",
      "Token lifecycle",
      "Secure API communication",
      "Secure storage",
      "SSL pinning where applicable",
    ],
  },
  {
    title: "Tools",
    titleAr: "الأدوات",
    skills: ["Git", "GitHub", "Android Studio", "Gradle"],
  },
];
