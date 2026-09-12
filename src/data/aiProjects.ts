import type { AIProject } from "@/types";

export const aiProjects: AIProject[] = [
  {
    id: "shipflow",
    title: "ShipFlow Maritime Platform",
    status: "Product Experiment",
    context: "Personal Product Concept · Software Engineering Experiment · Not a production deployment",
    contextAr: "مفهوم منتج شخصي · تجربة هندسة برمجية · ليست نظامًا إنتاجيًا",
    overview:
      "A personal product/design experiment demonstrating product thinking end-to-end — Idea → Product Concept → Working Experience. A maritime operations concept with a fleet dashboard, vessel registry, inspection and certificate workflows, registration requests, document management, and payment-related concepts, sharing one design system across Web Platform and Android Client. ShipFlow is a product/design experiment and is not presented as a production deployment.",
    overviewAr:
      "تجربة منتج وتصميم شخصية توضح التفكير في المنتج من البداية للنهاية — من الفكرة إلى المفهوم إلى تجربة عملية. مفهوم عمليات بحرية فيه لوحة أسطول وسجل سفن ومسارات تفتيش وشهادات وطلبات تسجيل وإدارة مستندات ومفاهيم مدفوعات، بنظام تصميم واحد بين منصة الويب وتطبيق الأندرويد. ShipFlow تجربة منتج وليست نظامًا إنتاجيًا.",
    focus: [
      "Web Platform — fleet dashboard, vessel registry, inspections, certificates, documents, payments, reports",
      "Android Client — fleet dashboard, vessel registry, vessel profiles, inspection & certificate tracking (Kotlin, Jetpack Compose, MVVM, Hilt, Retrofit, Room, Material 3)",
      "Shared design system across web and Android",
      "Registration request handling",
      "Document management",
    ],
    focusAr: [
      "منصة الويب — لوحة الأسطول وسجل السفن والتفتيش والشهادات والمستندات والمدفوعات والتقارير",
      "تطبيق الأندرويد — لوحة الأسطول وسجل السفن وملفات السفن وتتبع التفتيش والشهادات (Kotlin وJetpack Compose وMVVM وHilt وRetrofit وRoom وMaterial 3)",
      "نظام تصميم موحد بين الويب والأندرويد",
      "التعامل مع طلبات التسجيل",
      "إدارة المستندات",
    ],
    technicalDirection: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit", "Room", "Next.js", "TypeScript", "Tailwind CSS"],
    phoneImages: [
      "/images/projects/shipflow/android-home.webp",
      "/images/projects/shipflow/android-vessels.webp",
      "/images/projects/shipflow/android-vessel-detail.webp",
      "/images/projects/shipflow/android-menu.webp",
    ],
    imageAlt: "ShipFlow Android app — fleet dashboard, vessel registry, vessel detail, and menu screens",
    images: [
      {
        src: "/images/projects/shipflow/web-dashboard.webp",
        alt: "ShipFlow web platform — fleet dashboard with KPIs, request activity, and expiring documents",
        label: "Dashboard",
        width: 1200,
        height: 1583,
      },
      {
        src: "/images/projects/shipflow/web-vessels.webp",
        alt: "ShipFlow web platform — vessel registry",
        label: "Vessels",
        width: 1200,
        height: 792,
      },
      {
        src: "/images/projects/shipflow/web-vessel-detail.webp",
        alt: "ShipFlow web platform — vessel detail with technical information and ownership",
        label: "Vessel Detail",
        width: 1200,
        height: 1333,
      },
      {
        src: "/images/projects/shipflow/web-registration-requests.webp",
        alt: "ShipFlow web platform — registration requests list",
        label: "Registration Requests",
        width: 1200,
        height: 875,
      },
      {
        src: "/images/projects/shipflow/web-registration-detail.webp",
        alt: "ShipFlow web platform — registration request detail and approval timeline",
        label: "Registration Detail",
        width: 1200,
        height: 1542,
      },
      {
        src: "/images/projects/shipflow/web-inspections.webp",
        alt: "ShipFlow web platform — inspections tracking",
        label: "Inspections",
        width: 1200,
        height: 875,
      },
      {
        src: "/images/projects/shipflow/web-certificates.webp",
        alt: "ShipFlow web platform — certificate tracking and renewal status",
        label: "Certificates",
        width: 1200,
        height: 792,
      },
      {
        src: "/images/projects/shipflow/web-documents.webp",
        alt: "ShipFlow web platform — document management",
        label: "Documents",
        width: 1200,
        height: 917,
      },
      {
        src: "/images/projects/shipflow/web-payments.webp",
        alt: "ShipFlow web platform — payments and invoicing",
        label: "Payments",
        width: 1200,
        height: 917,
      },
      {
        src: "/images/projects/shipflow/web-reports.webp",
        alt: "ShipFlow web platform — analytics and reports",
        label: "Reports",
        width: 1200,
        height: 1000,
      },
    ],
  },
];
