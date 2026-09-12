export interface CaseStudySection {
  key: string;
  bodyEn: string[];
  bodyAr: string[];
  listEn?: string[];
  listAr?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  titleAr: string;
  contextEn: string;
  contextAr: string;
  sections: CaseStudySection[];
  images?: string[];
  imageAlt?: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  mtcit: {
    id: "mtcit",
    title: "MTCIT Maritime Platform",
    titleAr: "منصة MTCIT البحرية",
    contextEn: "Oman MTCIT — Government Maritime Platform · Production Android Application",
    contextAr: "وزارة النقل والاتصالات العُمانية — منصة بحرية حكومية · تطبيق أندرويد إنتاجي",
    images: [
      "/images/projects/oman-mtcit/home.webp",
      "/images/projects/oman-mtcit/requests.webp",
      "/images/projects/oman-mtcit/notifications.webp",
      "/images/projects/oman-mtcit/vessel-details.webp",
      "/images/projects/oman-mtcit/services.webp",
    ],
    imageAlt: "MTCIT Maritime Platform app screens",
    sections: [
      {
        key: "overview",
        bodyEn: [
          "A production government Android application supporting digital maritime services — service requests, vessel-related services, inspections, certificates, documents, and payments.",
        ],
        bodyAr: [
          "تطبيق أندرويد حكومي إنتاجي يدعم الخدمات البحرية الرقمية — طلبات الخدمات وخدمات السفن والتفتيش والشهادات والمستندات والمدفوعات.",
        ],
      },
      {
        key: "context",
        bodyEn: [
          "Government digital services involve long multi-step workflows, strict validation, document handling, and integrations with official service systems. The Android client must remain reliable, secure, and fully localized in Arabic (RTL) and English.",
        ],
        bodyAr: [
          "الخدمات الحكومية الرقمية تتضمن مسارات عمل طويلة متعددة الخطوات وتحققًا صارمًا والتعامل مع المستندات والتكامل مع الأنظمة الرسمية. ويجب أن يبقى تطبيق الأندرويد موثوقًا وآمنًا ومعربًا بالكامل بالعربية (RTL) والإنجليزية.",
        ],
      },
      {
        key: "role",
        bodyEn: ["Android Developer — contributing to production features, API integration, authentication flows, document workflows, and localization."],
        bodyAr: ["مطوّر أندرويد — المساهمة في المزايا الإنتاجية وتكامل API ومسارات المصادقة ومسارات المستندات والتوطين."],
        listEn: [
          "Service request and vessel-related flows",
          "Authentication and token lifecycle handling",
          "Multipart document uploads",
          "Draft workflows and request state",
          "Arabic RTL + English localization",
        ],
        listAr: [
          "مسارات طلبات الخدمات وخدمات السفن",
          "التعامل مع المصادقة ودورة حياة التوكن",
          "رفع المستندات متعددة الأجزاء",
          "مسارات المسودات وحالة الطلبات",
          "التوطين العربي RTL والإنجليزي",
        ],
      },
      {
        key: "architecture",
        bodyEn: ["MVVM + Repository Pattern with state-driven UI and separation of concerns: UI → ViewModel → Business Logic → Repository → API / Database."],
        bodyAr: ["MVVM مع Repository وواجهات مبنية على الحالة وفصل واضح للمسؤوليات: الواجهة ← ViewModel ← منطق الأعمال ← المستودع ← API / قاعدة البيانات."],
        listEn: ["MVVM", "Repository Pattern", "State-driven UI", "Hilt", "Separation of concerns"],
        listAr: ["MVVM", "Repository Pattern", "واجهات مبنية على الحالة", "Hilt", "فصل المسؤوليات"],
      },
      {
        key: "dataflow",
        bodyEn: ["Unidirectional data flow keeps complex government workflows predictable — loading, success, empty, and error states are handled explicitly across multi-step requests."],
        bodyAr: ["تدفق بيانات أحادي الاتجاه يجعل مسارات العمل الحكومية المعقدة متوقعة — مع معالجة صريحة لحالات التحميل والنجاح والفراغ والخطأ عبر الطلبات متعددة الخطوات."],
      },
      {
        key: "auth",
        bodyEn: ["OAuth-based authentication with token lifecycle management and secure API communication. Sensitive flows use secure storage; implementation details are intentionally limited due to project confidentiality."],
        bodyAr: ["مصادقة قائمة على OAuth مع إدارة دورة حياة التوكن واتصال آمن مع API. المسارات الحساسة تستخدم تخزينًا آمنًا؛ وتفاصيل التنفيذ محدودة عمدًا بسبب سرية المشروع."],
        listEn: ["OAuth / Keycloak concepts", "Token lifecycle management", "Secure API communication", "Secure storage"],
        listAr: ["مفاهيم OAuth / Keycloak", "إدارة دورة حياة التوكن", "اتصال آمن مع API", "تخزين آمن"],
      },
      {
        key: "api",
        bodyEn: ["Ktor + REST API integration for licences, forms, and service requests — with full validation, error handling, and user-facing feedback."],
        bodyAr: ["تكامل Ktor مع REST APIs للتراخيص والنماذج وطلبات الخدمات — مع تحقق كامل ومعالجة أخطاء وتغذية راجعة واضحة للمستخدم."],
      },
      {
        key: "documents",
        bodyEn: ["Multipart file uploads for documents, inspections, and certificates — designed to handle unreliable networks with retries and clear upload state."],
        bodyAr: ["رفع ملفات متعدد الأجزاء للمستندات والتفتيش والشهادات — مصمم للتعامل مع الشبكات غير المستقرة مع إعادة المحاولة وحالة رفع واضحة."],
      },
      {
        key: "workflows",
        bodyEn: ["Multi-step government workflows: service requests, inspections, certificates, payments, and draft handling — each step validated before proceeding."],
        bodyAr: ["مسارات عمل حكومية متعددة الخطوات: طلبات الخدمات والتفتيش والشهادات والمدفوعات والتعامل مع المسودات — مع التحقق من كل خطوة قبل المتابعة."],
      },
      {
        key: "offline",
        bodyEn: ["Room, DataStore, and WorkManager support resilient behavior — drafts and request state survive connectivity drops and background sync keeps data consistent."],
        bodyAr: ["Room وDataStore وWorkManager تدعم سلوكًا مرنًا — المسودات وحالة الطلبات تبقى عند انقطاع الاتصال والمزامنة الخلفية تحافظ على اتساق البيانات."],
      },
      {
        key: "localization",
        bodyEn: ["Full Arabic RTL and English localization — layouts mirror correctly and remain balanced across both languages, including mobile."],
        bodyAr: ["توطين كامل بالعربية RTL والإنجليزية — التصميم ينعكس بشكل صحيح ويبقى متوازنًا في اللغتين بما فيها الموبايل."],
      },
      {
        key: "challenges",
        bodyEn: ["Complex long-running flows, document uploads on unstable networks, and strict bilingual layout requirements."],
        bodyAr: ["مسارات طويلة معقدة ورفع مستندات على شبكات غير مستقرة ومتطلبات صارمة للتصميم ثنائي اللغة."],
        listEn: [
          "Secure OAuth authentication and token lifecycle across long multi-step flows",
          "Multipart document and PDF uploads with unreliable networks",
          "Offline-first drafts and request state for complex government APIs",
          "Full Arabic RTL + English localization without breaking layouts",
        ],
        listAr: [
          "مصادقة OAuth آمنة وإدارة التوكن في مسارات طويلة متعددة الخطوات",
          "رفع مستندات وPDF مع شبكة غير مستقرة",
          "مسودات أوفلاين وحالة الطلبات مع APIs حكومية معقدة",
          "تعريب كامل عربي RTL وإنجليزي من غير ما التصميم يتكسر",
        ],
      },
      {
        key: "decisions",
        bodyEn: ["Engineering decisions favored maintainability and user trust over shortcuts."],
        bodyAr: ["القرارات الهندسية فضّلت قابلية الصيانة وثقة المستخدم على الحلول المختصرة."],
        listEn: [
          "MVVM + Repository to isolate UI from data and business logic",
          "Explicit state-driven UI for every workflow step",
          "Centralized token handling for secure communication",
          "Local persistence for drafts and resilient retries",
        ],
        listAr: [
          "MVVM مع Repository لعزل الواجهة عن البيانات ومنطق الأعمال",
          "واجهات صريحة مبنية على الحالة لكل خطوة",
          "معالجة مركزية للتوكن لاتصال آمن",
          "حفظ محلي للمسودات وإعادة محاولة مرنة",
        ],
      },
      {
        key: "takeaways",
        bodyEn: ["Production government platforms reward disciplined architecture, careful state handling, and respectful handling of confidential systems."],
        bodyAr: ["منصات الحكومة الإنتاجية تكافئ المعمارية المنضبطة وإدارة الحالة الدقيقة والتعامل المسؤول مع الأنظمة السرية."],
      },
    ],
  },
  "electronic-meetings": {
    id: "electronic-meetings",
    title: "Electronic Meetings Platform",
    titleAr: "منصة الاجتماعات الإلكترونية",
    contextEn: "Qatar General Secretariat · Production Enterprise/Government Android Application",
    contextAr: "الأمانة العامة — قطر · تطبيق أندرويد إنتاجي للمؤسسات والجهات الحكومية",
    images: [
      "/images/projects/electronic-meetings/home-blurred-v2.jpg",
      "/images/projects/electronic-meetings/login.jpg",
      "/images/projects/electronic-meetings/calendar.jpg",
      "/images/projects/electronic-meetings/requests.jpg",
      "/images/projects/electronic-meetings/request-form.jpg",
      "/images/projects/electronic-meetings/allowance.jpg",
    ],
    imageAlt: "Electronic Meetings Platform screens",
    sections: [
      {
        key: "overview",
        bodyEn: [
          "A professional electronic meetings platform — meeting management, calendar sync, certificate requests, PDF viewing, attachments, and profile persistence across complex enterprise workflows.",
        ],
        bodyAr: [
          "منصة احترافية للاجتماعات الإلكترونية — إدارة الاجتماعات ومزامنة التقويم وطلبات الشهادات وعرض PDF والمرفقات وحفظ البروفايل عبر مسارات عمل معقدة.",
        ],
      },
      {
        key: "context",
        bodyEn: [
          "Enterprise meeting workflows involve scheduling rules, document sharing, approvals, and role-based access. The Android client must stay consistent, fast, and reliable for government users.",
        ],
        bodyAr: [
          "مسارات اجتماعات المؤسسات تتضمن قواعد الجدولة ومشاركة المستندات والاعتمادات والصلاحيات حسب الدور. ويجب أن يبقى تطبيق الأندرويد متسقًا وسريعًا وموثوقًا للمستخدمين الحكوميين.",
        ],
      },
      {
        key: "role",
        bodyEn: ["Android Developer — building meeting, calendar, document, and profile features with shared architecture."],
        bodyAr: ["مطوّر أندرويد — بناء مزايا الاجتماعات والتقويم والمستندات والبروفايل بمعمارية مشتركة."],
        listEn: [
          "Meeting management and agenda handling",
          "Calendar synchronization",
          "Certificate requests and PDF flows",
          "Authentication and profile persistence",
        ],
        listAr: [
          "إدارة الاجتماعات وجداول الأعمال",
          "مزامنة التقويم",
          "طلبات الشهادات ومسارات PDF",
          "المصادقة وحفظ البروفايل",
        ],
      },
      {
        key: "architecture",
        bodyEn: ["MVVM with shared business logic and shared ViewModels — UI → shared ViewModel → Repository → Enterprise APIs. Koin for dependency injection, Ktor for networking."],
        bodyAr: ["MVVM مع منطق أعمال مشترك وViewModels مشتركة — الواجهة ← ViewModel مشترك ← المستودع ← أنظمة المؤسسة. مع Koin لحقن التبعيات وKtor للشبكة."],
        listEn: ["MVVM", "Shared ViewModels", "Koin", "Ktor", "Kotlin Multiplatform concepts"],
        listAr: ["MVVM", "ViewModels مشتركة", "Koin", "Ktor", "مفاهيم Kotlin Multiplatform"],
      },
      {
        key: "api",
        bodyEn: ["REST API integration for meetings, requests, attachments, and profiles — with state management that keeps calendar and request screens consistent."],
        bodyAr: ["تكامل REST APIs للاجتماعات والطلبات والمرفقات والبروفايل — مع إدارة حالة تحافظ على اتساق شاشات التقويم والطلبات."],
      },
      {
        key: "documents",
        bodyEn: ["PDF generation, viewing, and file attachments at scale — with caching and background sync so meeting data stays available during connectivity drops."],
        bodyAr: ["إنشاء وعرض PDF ومرفقات الملفات — مع تخزين مؤقت ومزامنة خلفية ليبقى محتوى الاجتماعات متاحًا عند انقطاع الاتصال."],
      },
      {
        key: "workflows",
        bodyEn: ["Enterprise workflows: meeting scheduling, attendance, certificate requests, and approvals — with clear loading, empty, and error states."],
        bodyAr: ["مسارات عمل المؤسسات: جدولة الاجتماعات والحضور وطلبات الشهادات والاعتمادات — مع حالات تحميل وفراغ وخطأ واضحة."],
      },
      {
        key: "offline",
        bodyEn: ["Offline caching and background sync keep meeting data accessible with minimal interruption."],
        bodyAr: ["التخزين المؤقت والمزامنة الخلفية تحافظ على إتاحة بيانات الاجتماعات بأقل انقطاع."],
      },
      {
        key: "localization",
        bodyEn: ["Bilingual experience with correct RTL behavior and balanced layouts."],
        bodyAr: ["تجربة ثنائية اللغة مع سلوك RTL صحيح وتصميم متوازن."],
      },
      {
        key: "challenges",
        bodyEn: ["Shared logic across meeting flows, enterprise scheduling rules, and large document handling."],
        bodyAr: ["منطق مشترك عبر مسارات الاجتماعات وقواعد جدولة المؤسسات والتعامل مع مستندات كبيرة."],
        listEn: [
          "Shared business logic and ViewModels across meeting workflows",
          "Calendar synchronization with enterprise scheduling rules",
          "PDF generation, viewing, and file attachments at scale",
          "Profile persistence and enterprise auth session handling",
        ],
        listAr: [
          "منطق مشترك وViewModels عبر مسارات الاجتماعات",
          "مزامنة التقويم مع قواعد جدولة المؤسسات",
          "إنشاء وعرض PDF ومرفقات الملفات",
          "حفظ البروفايل وإدارة جلسات المصادقة",
        ],
      },
      {
        key: "decisions",
        bodyEn: ["Shared architecture reduced duplication and kept meeting workflows consistent."],
        bodyAr: ["المعمارية المشتركة قللت التكرار وحافظت على اتساق مسارات الاجتماعات."],
        listEn: [
          "Shared ViewModels for meeting-related flows",
          "Repository abstraction over enterprise APIs",
          "Explicit state management with Compose",
          "Cached documents with background sync",
        ],
        listAr: [
          "ViewModels مشتركة لمسارات الاجتماعات",
          "طبقة Repository فوق أنظمة المؤسسة",
          "إدارة حالة صريحة مع Compose",
          "مستندات مخزنة مع مزامنة خلفية",
        ],
      },
      {
        key: "takeaways",
        bodyEn: ["Enterprise platforms reward consistency, careful integration, and respect for confidential systems."],
        bodyAr: ["منصات المؤسسات تكافئ الاتساق والتكامل الدقيق واحترام الأنظمة السرية."],
      },
    ],
  },
};
