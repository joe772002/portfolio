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
  sak: {
    id: "sak",
    title: "SAK – Ministry of Justice Qatar",
    titleAr: "صك — وزارة العدل القطرية",
    contextEn: "Ministry of Justice – Qatar · Production Government Android Application",
    contextAr: "وزارة العدل — قطر · تطبيق أندرويد حكومي إنتاجي",
    images: [
      "/images/projects/sak/splash.webp",
      "/images/projects/sak/login.webp",
      "/images/projects/sak/home-services.webp",
      "/images/projects/sak/real-estate-services.webp",
      "/images/projects/sak/documentation-services.webp",
      "/images/projects/sak/laws.webp",
      "/images/projects/sak/contact.webp",
    ],
    imageAlt: "SAK Ministry of Justice Qatar app screens",
    sections: [
      {
        key: "overview",
        bodyEn: [
          "The official Ministry of Justice Qatar Android application (صك SAK) for real estate registration and documentation services — service categories, transaction requests, documentation workflows, inquiries, and government service delivery for individuals, businesses, investors, and government entities. The application is publicly available on Google Play.",
        ],
        bodyAr: [
          "التطبيق الرسمي لوزارة العدل القطرية (صك SAK) لخدمات التسجيل العقاري والتوثيق — فئات الخدمات وطلبات المعاملات ومسارات التوثيق والاستعلامات وتقديم الخدمات الحكومية للأفراد والشركات والمستثمرين والجهات الحكومية. والتطبيق متاح للعامة على Google Play.",
        ],
      },
      {
        key: "context",
        bodyEn: [
          "Real estate registration and documentation involve strict multi-step government workflows, validated transaction forms, document attachments, authentication, and status tracking. The Android client works within an established large production codebase and must remain reliable, secure, and fully localized in Arabic (RTL) and English.",
        ],
        bodyAr: [
          "التسجيل العقاري والتوثيق يتضمنان مسارات حكومية صارمة متعددة الخطوات ونماذج معاملات متحققًا منها ومرفقات مستندات ومصادقة ومتابعة للحالة. ويعمل تطبيق الأندرويد ضمن قاعدة كود إنتاجية كبيرة قائمة ويجب أن يبقى موثوقًا وآمنًا ومعربًا بالكامل بالعربية (RTL) والإنجليزية.",
        ],
      },
      {
        key: "role",
        bodyEn: ["Android Developer — contributing to production features, API integration, authentication handling, document workflows, and localization within the existing Java/XML codebase."],
        bodyAr: ["مطوّر أندرويد — المساهمة في المزايا الإنتاجية وتكامل API والتعامل مع المصادقة ومسارات المستندات والتوطين ضمن قاعدة كود Java/XML القائمة."],
        listEn: [
          "Real estate registration and documentation flows",
          "Transaction forms with validation and request state",
          "Authentication and token lifecycle handling",
          "Document uploads and attachments",
          "Arabic RTL + English localization",
        ],
        listAr: [
          "مسارات التسجيل العقاري والتوثيق",
          "نماذج المعاملات مع التحقق وحالة الطلب",
          "التعامل مع المصادقة ودورة حياة التوكن",
          "رفع المستندات والمرفقات",
          "التوطين العربي RTL والإنجليزي",
        ],
      },
      {
        key: "architecture",
        bodyEn: ["MVVM + Repository Pattern with Activities/Fragments and ViewBinding/DataBinding: UI → ViewModel → Business Logic → Repository → API / Local data — maintained within the established production architecture."],
        bodyAr: ["MVVM مع Repository وأنشطة/فراجمنت وViewBinding/DataBinding: الواجهة ← ViewModel ← منطق الأعمال ← المستودع ← API / بيانات محلية — مع الحفاظ على المعمارية الإنتاجية القائمة."],
        listEn: ["MVVM", "Repository Pattern", "Activities / Fragments", "ViewBinding / DataBinding", "Separation of concerns"],
        listAr: ["MVVM", "Repository Pattern", "أنشطة / فراجمنت", "ViewBinding / DataBinding", "فصل المسؤوليات"],
      },
      {
        key: "dataflow",
        bodyEn: ["Unidirectional data flow keeps long transaction workflows predictable — loading, success, empty, and error states are handled explicitly across multi-step service requests."],
        bodyAr: ["تدفق بيانات أحادي الاتجاه يجعل مسارات المعاملات الطويلة متوقعة — مع معالجة صريحة لحالات التحميل والنجاح والفراغ والخطأ عبر طلبات الخدمات متعددة الخطوات."],
      },
      {
        key: "auth",
        bodyEn: ["OAuth 2.0-based government authentication with JWT token handling, centralized authentication interceptors, biometric support, and secure API communication for sensitive government data."],
        bodyAr: ["مصادقة حكومية قائمة على OAuth 2.0 مع التعامل مع توكن JWT واعتراضات مصادقة مركزية ودعم البصمة واتصال آمن مع API للبيانات الحكومية الحساسة."],
        listEn: ["OAuth 2.0 / government authentication flow", "JWT token lifecycle management", "Centralized auth interceptors", "Biometrics", "Secure API communication"],
        listAr: ["مصادقة OAuth 2.0 / مسار المصادقة الحكومية", "إدارة دورة حياة توكن JWT", "اعتراضات مصادقة مركزية", "البصمة", "اتصال آمن مع API"],
      },
      {
        key: "api",
        bodyEn: ["Retrofit + OkHttp REST API integration for service categories, transaction submission, inquiries, and request tracking — with full validation, error handling, and user-facing feedback."],
        bodyAr: ["تكامل Retrofit مع OkHttp وREST APIs لفئات الخدمات وتقديم المعاملات والاستعلامات ومتابعة الطلبات — مع تحقق كامل ومعالجة أخطاء وتغذية راجعة واضحة للمستخدم."],
      },
      {
        key: "documents",
        bodyEn: ["Document-heavy transaction flows — uploads, attachments, validation, and viewing for government documentation. The project handles camera-based capture, scanning, and PDF/document viewing where applicable."],
        bodyAr: ["مسارات معاملات كثيفة المستندات — الرفع والمرفقات والتحقق والعرض لمعاملات التوثيق الحكومية. ويتعامل المشروع مع الالتقاط بالكاميرا والمسح الضوئي وعرض PDF/المستندات حيث ينطبق."],
      },
      {
        key: "workflows",
        bodyEn: ["Government transaction workflows: browse real estate and documentation services, submit validated transaction requests with attachments, then track request status — including supporting content such as laws, guidance, and contact channels."],
        bodyAr: ["مسارات المعاملات الحكومية: تصفح خدمات التسجيل العقاري والتوثيق وتقديم طلبات معاملات متحقق منها مع المرفقات، ثم متابعة حالة الطلب — مع محتوى داعم مثل القوانين والإرشادات وقنوات التواصل."],
      },
      {
        key: "offline",
        bodyEn: ["Resilient behavior on unreliable networks — local persistence for drafts and request state with clear loading, empty, and error states plus retries so long forms survive interruptions."],
        bodyAr: ["سلوك مرن على الشبكات غير المستقرة — حفظ محلي للمسودات وحالة الطلبات مع حالات تحميل وفراغ وخطأ واضحة وإعادة محاولة لتبقى النماذج الطويلة صالحة عند الانقطاع."],
      },
      {
        key: "localization",
        bodyEn: ["Full Arabic RTL and English localization — layouts mirror correctly and remain balanced across both languages, including service grids, forms, and mobile."],
        bodyAr: ["توطين كامل بالعربية RTL والإنجليزية — التصميم ينعكس بشكل صحيح ويبقى متوازنًا في اللغتين بما فيها شبكات الخدمات والنماذج والموبايل."],
      },
      {
        key: "challenges",
        bodyEn: ["Working within a large established production codebase with many service workflows, strict transaction validation, and bilingual layout requirements."],
        bodyAr: ["العمل ضمن قاعدة كود إنتاجية كبيرة قائمة مع مسارات خدمية كثيرة وتحقق صارم للمعاملات ومتطلبات تصميم ثنائي اللغة."],
        listEn: [
          "Maintaining consistency across many service workflows in a large existing codebase",
          "Multi-step government transaction forms with strict validation",
          "Authentication token lifecycle with government auth flows",
          "Document-heavy flows with uploads and attachments",
        ],
        listAr: [
          "الحفاظ على الاتساق عبر مسارات خدمية كثيرة في قاعدة كود كبيرة قائمة",
          "نماذج معاملات حكومية متعددة الخطوات مع تحقق صارم",
          "إدارة دورة حياة التوكن مع مسارات المصادقة الحكومية",
          "مسارات كثيفة المستندات مع الرفع والمرفقات",
        ],
      },
      {
        key: "decisions",
        bodyEn: ["Engineering decisions favored working within the established architecture and keeping transaction behavior predictable."],
        bodyAr: ["القرارات الهندسية فضّلت العمل ضمن المعمارية القائمة والحفاظ على سلوك معاملات متوقع."],
        listEn: [
          "MVVM + Repository to isolate UI from data and business logic",
          "Explicit state-driven UI for every transaction step",
          "Centralized token handling for secure communication",
          "Local persistence for drafts and resilient retries",
        ],
        listAr: [
          "MVVM مع Repository لعزل الواجهة عن البيانات ومنطق الأعمال",
          "واجهات صريحة مبنية على الحالة لكل خطوة معاملة",
          "معالجة مركزية للتوكن لاتصال آمن",
          "حفظ محلي للمسودات وإعادة محاولة مرنة",
        ],
      },
      {
        key: "takeaways",
        bodyEn: ["Large government production applications reward disciplined maintenance, careful validation, and respect for established architecture and sensitive systems."],
        bodyAr: ["تطبيقات الحكومة الإنتاجية الكبيرة تكافئ الصيانة المنضبطة والتحقق الدقيق واحترام المعمارية القائمة والأنظمة الحساسة."],
      },
      {
        key: "outcome",
        bodyEn: [
          "A production government Android application supporting real Ministry of Justice service workflows — real estate registration, documentation, transaction submission, and request tracking — with secure authentication, bilingual RTL/English experience, and document-heavy flows, available on Google Play.",
        ],
        bodyAr: [
          "تطبيق أندرويد حكومي إنتاجي يدعم مسارات خدمات حقيقية لوزارة العدل — التسجيل العقاري والتوثيق وتقديم المعاملات ومتابعة الطلبات — مع مصادقة آمنة وتجربة ثنائية اللغة RTL/إنجليزية ومسارات كثيفة المستندات، ومتاح على Google Play.",
        ],
      },
    ],
  },
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
      {
        key: "outcome",
        bodyEn: [
          "A production Android client supporting real government maritime service workflows — service requests, inspections, certificates, documents, and payments — with secure authentication, bilingual RTL/English experience, and resilient offline behavior.",
        ],
        bodyAr: [
          "تطبيق أندرويد إنتاجي يدعم مسارات خدمية بحرية حكومية حقيقية — طلبات الخدمات والتفتيش والشهادات والمستندات والمدفوعات — مع مصادقة آمنة وتجربة ثنائية اللغة RTL/إنجليزية وسلوك مرن دون اتصال.",
        ],
      },
      {
        key: "confidentiality",
        bodyEn: [
          "Due to the confidential nature of the project, source code and internal business data are not publicly available. Screens shown have sensitive data blurred or omitted.",
        ],
        bodyAr: [
          "نظرًا لطبيعة المشروع السرية، لا يتوفر الكود المصدري وبيانات العمل الداخلية للعرض العام. والشاشات المعروضة تم إخفاء البيانات الحساسة فيها.",
        ],
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
      {
        key: "outcome",
        bodyEn: [
          "A production enterprise Android application supporting meeting management, calendar synchronization, certificate requests, PDF and document flows, and profile persistence across complex enterprise workflows.",
        ],
        bodyAr: [
          "تطبيق أندرويد إنتاجي للمؤسسات يدعم إدارة الاجتماعات ومزامنة التقويم وطلبات الشهادات ومسارات PDF والمستندات وحفظ البروفايل عبر مسارات عمل معقدة.",
        ],
      },
      {
        key: "confidentiality",
        bodyEn: [
          "Due to the confidential nature of the project, source code and internal business data are not publicly available.",
        ],
        bodyAr: ["نظرًا لطبيعة المشروع السرية، لا يتوفر الكود المصدري وبيانات العمل الداخلية للعرض العام."],
      },
    ],
  },
  tawseek: {
    id: "tawseek",
    title: "Tawseek — Want To Make Procurement",
    titleAr: "توثيق — أرغب في عمل توكيل",
    contextEn: "Egypt Ministry of Justice — Real Estate Registration & Notarization · Published Production Android Application",
    contextAr: "وزارة العدل المصرية — مصلحة الشهر العقاري والتوثيق · تطبيق أندرويد إنتاجي منشور",
    images: [
      "/images/projects/tawseek/splash.jpg",
      "/images/projects/tawseek/services-home.jpg",
      "/images/projects/tawseek/services-more.jpg",
      "/images/projects/tawseek/branches.jpg",
      "/images/projects/tawseek/branch-details.jpg",
      "/images/projects/tawseek/book-turn.jpg",
    ],
    imageAlt: "Tawseek app screens",
    sections: [
      {
        key: "overview",
        bodyEn: [
          "A real published Android application on Google Play for Egypt's Real Estate Registration & Notarization services — service discovery, branch locator, and appointment booking for notarization transactions.",
        ],
        bodyAr: [
          "تطبيق أندرويد حقيقي منشور على Google Play لخدمات الشهر العقاري والتوثيق في مصر — اكتشاف الخدمات وتحديد الفروع وحجز المواعيد لمعاملات التوثيق.",
        ],
      },
      {
        key: "context",
        bodyEn: [
          "Notarization services involve many service types, branch networks, and scheduled visits. The Android client must help citizens find the right service, locate the nearest branch, and book a valid appointment with correct data — in Arabic and English.",
        ],
        bodyAr: [
          "خدمات التوثيق تتضمن أنواع خدمات كثيرة وشبكة فروع وزيارات مجدولة. ويجب أن يساعد تطبيق الأندرويد المواطنين على اختيار الخدمة الصحيحة وإيجاد أقرب فرع وحجز موعد سليم ببيانات صحيحة — بالعربية والإنجليزية.",
        ],
      },
      {
        key: "role",
        bodyEn: ["Android Developer — production maintenance, bug fixing, and feature development on the existing codebase, with incremental modernization toward Kotlin and Jetpack Compose with MVVM where applicable."],
        bodyAr: ["مطوّر أندرويد — صيانة إنتاجية وإصلاح أخطاء وتطوير مزايا على قاعدة الكود الحالية، مع تحديث تدريجي نحو Kotlin وJetpack Compose مع MVVM حيث ينطبق."],
        listEn: [
          "Service listing and appointment booking flows",
          "Branch locator with maps and distance details",
          "Booking form validation and reservation inquiry",
          "Production debugging and incremental modernization",
        ],
        listAr: [
          "مسارات عرض الخدمات وحجز المواعيد",
          "تحديد الفروع بالخرائط وتفاصيل المسافة",
          "التحقق من نموذج الحجز والاستعلام عن الحجوزات",
          "تصحيح أخطاء الإنتاج والتحديث التدريجي",
        ],
      },
      {
        key: "architecture",
        bodyEn: ["MVVM + Repository with separation of concerns: UI → ViewModel → Business Logic → Repository → API / Local data — applied incrementally while maintaining the existing Java codebase."],
        bodyAr: ["MVVM مع Repository وفصل واضح للمسؤوليات: الواجهة ← ViewModel ← منطق الأعمال ← المستودع ← API / بيانات محلية — مطبق تدريجيًا مع الحفاظ على قاعدة كود Java الحالية."],
        listEn: ["MVVM", "Repository Pattern", "State-driven UI", "Java → Kotlin modernization", "Separation of concerns"],
        listAr: ["MVVM", "Repository Pattern", "واجهات مبنية على الحالة", "التحديث من Java لـ Kotlin", "فصل المسؤوليات"],
      },
      {
        key: "dataflow",
        bodyEn: ["Unidirectional data flow keeps service, branch, and booking screens predictable — loading, success, empty, and error states are handled explicitly across the booking journey."],
        bodyAr: ["تدفق بيانات أحادي الاتجاه يجعل شاشات الخدمات والفروع والحجز متوقعة — مع معالجة صريحة لحالات التحميل والنجاح والفراغ والخطأ عبر رحلة الحجز."],
      },
      {
        key: "api",
        bodyEn: ["REST API integration for services, branches, time slots, and reservations — with full validation (including the 14-digit national ID), error handling, and user-facing feedback."],
        bodyAr: ["تكامل REST APIs للخدمات والفروع والمواعيد والحجوزات — مع تحقق كامل (بما فيه الرقم القومي المكون من 14 رقمًا) ومعالجة أخطاء وتغذية راجعة واضحة للمستخدم."],
      },
      {
        key: "workflows",
        bodyEn: ["Citizen workflows: browse notarization services, find the nearest branch with work hours and distance, then book an appointment with category, editor type, day, and time — confirmed before submission."],
        bodyAr: ["مسارات المواطنين: تصفح خدمات التوثيق وإيجاد أقرب فرع مع مواعيد العمل والمسافة، ثم حجز موعد مع التصنيف ونوع المحرر واليوم والوقت — مع التأكيد قبل الإرسال."],
      },
      {
        key: "offline",
        bodyEn: ["Resilient behavior on unreliable networks — clear loading and error states with retries so booking and branch lookup remain usable."],
        bodyAr: ["سلوك مرن على الشبكات غير المستقرة — حالات تحميل وخطأ واضحة مع إعادة المحاولة ليبقى الحجز والبحث عن الفروع قابلًا للاستخدام."],
      },
      {
        key: "localization",
        bodyEn: ["Bilingual Arabic and English experience — service names, branch details, and booking forms stay balanced and readable across both languages."],
        bodyAr: ["تجربة ثنائية اللغة بالعربية والإنجليزية — أسماء الخدمات وتفاصيل الفروع ونماذج الحجز تبقى متوازنة ومقروءة في اللغتين."],
      },
      {
        key: "challenges",
        bodyEn: ["Keeping a large published codebase stable while improving booking reliability and location accuracy."],
        bodyAr: ["الحفاظ على استقرار قاعدة كود منشورة كبيرة مع تحسين موثوقية الحجز ودقة الموقع."],
        listEn: [
          "Maintaining stability across a large existing Java codebase while modernizing incrementally",
          "Location-based branch discovery with accurate distances and map details",
          "Multi-field booking validation (national ID, category, time slots) with clear user feedback",
          "Keeping bilingual Arabic/English layouts consistent across service and booking screens",
        ],
        listAr: [
          "الحفاظ على استقرار قاعدة كود Java كبيرة مع التحديث التدريجي",
          "اكتشاف الفروع حسب الموقع مع مسافات دقيقة وتفاصيل الخريطة",
          "التحقق من حقول الحجز المتعددة (الرقم القومي والتصنيف والمواعيد) مع تغذية راجعة واضحة",
          "الحفاظ على اتساق التصميم العربي/الإنجليزي في شاشات الخدمات والحجز",
        ],
      },
      {
        key: "decisions",
        bodyEn: ["Maintenance decisions favored stability first, then incremental modernization where it reduces risk."],
        bodyAr: ["قرارات الصيانة فضّلت الاستقرار أولًا، ثم التحديث التدريجي حيث يقلل المخاطر."],
        listEn: [
          "MVVM + Repository to isolate UI from data and business logic",
          "Explicit state-driven UI for every booking step",
          "Centralized validation for booking forms",
          "Incremental Java → Kotlin migration where applicable",
        ],
        listAr: [
          "MVVM مع Repository لعزل الواجهة عن البيانات ومنطق الأعمال",
          "واجهات صريحة مبنية على الحالة لكل خطوة حجز",
          "تحقق مركزي لنماذج الحجز",
          "ترحيل تدريجي من Java لـ Kotlin حيث ينطبق",
        ],
      },
      {
        key: "takeaways",
        bodyEn: ["Published government-service apps reward careful validation, accurate location handling, and disciplined incremental modernization."],
        bodyAr: ["تطبيقات الخدمات الحكومية المنشورة تكافئ التحقق الدقيق والتعامل السليم مع الموقع والتحديث التدريجي المنضبط."],
      },
      {
        key: "outcome",
        bodyEn: [
          "A published production Android application helping citizens access notarization services — service discovery, nearest-branch lookup with maps, and validated appointment booking — available on Google Play.",
        ],
        bodyAr: [
          "تطبيق أندرويد إنتاجي منشور يساعد المواطنين على الوصول لخدمات التوثيق — اكتشاف الخدمات وإيجاد أقرب فرع بالخرائط وحجز مواعيد متحقق منها — متاح على Google Play.",
        ],
      },
    ],
  },
};
