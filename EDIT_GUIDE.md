# دليل التعديل (لصاحب البروجيكت)

> القاعدة الذهبية: عايز تغيّر **كلام / لينك / مشروع** → ملفات `src/data/`.
> عايز تغيّر **شكل** → `src/components/`. عايز **صفحة جديدة** → انسخ صفحة من `src/app/`.

## 1) الأوامر اليومية

```bash
npm run dev    # تشغيل محلي على http://localhost:3000
npm run build  # تجربة نسخة الإنتاج قبل الرفع
npm run lint   # فحص الأخطاء (شغّله قبل أي push)
npx tsc --noEmit  # فحص التايبات
```

الرفع على GitHub:

```bash
git add -A
git commit -m "وصف التعديل"
git push
```

## 2) خريطة "عايز أعمل X → أروح فين"

| عايز تعمل إيه | الملف |
|---|---|
| تغيّر اسمك، نبذة، سنوات الخبرة، الإيميل، واتساب، فيسبوك، إنستجرام، لينكدإن، جيتهاب | `src/data/profile.ts` |
| تضيف/تعدل مشروع أندرويد | `src/data/androidProjects.ts` |
| تضيف/تعدل مشروع AI أو ويب | `src/data/aiProjects.ts` |
| تضيف مهارة أو أداة | `src/data/skills.ts` (`androidSkills` / `aiSkills` / `aiTools`) |
| تعدل خطوات الشغل (Idea → Ship) | `src/data/workflow.ts` |
| تعدل أزرار النافبار (الروابط) | `src/data/navigation.ts` (الـ labels نفسها في `src/i18n/ar.ts` و `src/i18n/en.ts`) |
| تغيّر أي نص عربي/إنجليزي في الواجهة | `src/i18n/ar.ts` للعربي و `src/i18n/en.ts` للإنجليزي (نفس المفاتيح) |
| تضيف نص عربي لمشروع/مهارة/خطوة | حقول `...Ar` جنب الحقل الإنجليزي في نفس ملف الداتا (`overviewAr`، `focusAreasAr`، `titleAr`...) |
| تغيّر صورتك | بدّل ملف `public/images/youssef-portrait.jpg` بنفس الاسم |
| تضيف صور مشروع | حطها في `public/images/projects/<اسم-المشروع>/` ثم اربطها في `aiProjects.ts` (حقل `images`) أو `androidProjects.ts` (حقل `images`) |
| تعدل نص صفحة (عنوان سكشن مثلا) | `src/components/sections/<اسم-السكشن>.tsx` |
| تعدل الهوم فقط | `src/app/page.tsx` |
| صفحة جديدة | انسخ `src/app/work/page.tsx` لمسار جديد، وبدّل السكاشن اللي جواه، وضيف رابطه في `navigation.ts` |
| الألوان (دارك / لايت) | `src/app/globals.css` (`:root` = دارك، `:root[data-theme="light"]` = لايت) |
| زرار الثيم (شمس/قمر) | `src/components/ui/ThemeToggle.tsx` |

## 3) إضافة مشروع جديد (مثال أندرويد)

1. افتح `src/data/androidProjects.ts`.
2. انسخ أي object موجود والصقه في الأول، وغيّر الحقول:

```ts
{
  id: "my-new-app",       // بالإنجليزي، بدون مسافات، فريد
  index: "04",            // رقم العرض
  title: "My New App",
  category: ["Professional", "Enterprise"],
  overview: "سطرين عن التطبيق.",
  technologies: ["Kotlin", "Jetpack Compose", "Hilt"],
  focusAreas: ["Login", "Payments"],
  portfolioFocus: ["Clean Architecture"],
  featured: true,         // يظهر مميز، أو احذفها
}
```

3. `npm run dev` وشوف صفحة `/work`.
4. لو المشروع سرّي: ضيف `confidential: true` (الصور الحقيقية مش هتظهر).

## 4) إضافة صور مشروع

- الصور المقبولة: `.webp` أو `.jpg` (اضغطها قبل الرفع).
- التسمية: `public/images/projects/<id-المشروع>/<وصف>.webp`
- مثال الربط في `src/data/aiProjects.ts`:

```ts
images: [
  { src: "/images/projects/my-app/home.webp", alt: "وصف الصورة", label: "Home", width: 1200, height: 800 },
]
```

- `width` و `height` = أبعاد الصورة الحقيقية (مهم لسرعة التحميل).

## 5) تعديل بيانات التواصل

كلها في `src/data/profile.ts` تحت `contact`:

| الحقل | بيعمل إيه |
|---|---|
| `email` | زرار الإيميل بيفتح Gmail جاهز للإرسال ليه |
| `phone` + `whatsapp` | زرار واتساب — الرقم المصري `011...` يتحول لرابط `wa.me/2011...` |
| `facebook` / `instagram` / `linkedin` / `github` | روابط الكروت + الـ labels المعروضة |

## 6) قبل ما ترفع (Checklist)

- [ ] `npm run lint` بدون أخطاء
- [ ] `npm run build` نجح
- [ ] جرّبت الدارك واللايت مود
- [ ] جرّبت الموبايل (القائمة الجانبية) والديسكتوب
- [ ] الصور الجديدة ظاهرة ومساراتها صح

## 7) اللغة (عربي / إنجليزي)

- الزرار في النافبار جنب زرار الثيم، والاختيار بيتحفظ في المتصفح.
- العربي هو الافتراضي، والموقع بيقلب RTL لوحده. عايز الإنجليزي افتراضي؟ غيّر `"ar"` لـ `"en"` في `getInitialLang` داخل `src/i18n/LanguageContext.tsx`.
- المصطلحات التقنية (Kotlin، MVVM...) وأسماء المنتجات والصور متسابة إنجليزي عمدًا.
- الـ metadata (عناوين التبويبات) ثابتة بالإنجليزي.

## 8) هيكل المشروع باختصار (بعقلية أندرويد)

```
src/
├── app/            # زي الـ Navigation graph — كل فولدر = صفحة (route)
│   ├── page.tsx    # الهوم "/"
│   ├── engineering/  Builder/  work/  about/  contact/
│   ├── layout.tsx  # زي الـ MainActivity — Navbar + Footer ثابتين
│   └── globals.css # زي الـ themes.xml — ألوان الدارك واللايت
├── data/           # زي strings.xml — كل المحتوى النصي هنا
├── components/
│   ├── sections/   # زي الـ Fragments — سكشن لكل جزء
│   ├── projects/   # كروت عرض المشاريع
│   ├── layout/     # Navbar + Footer
│   └── ui/         # عناصر مشتركة (Container, Reveal, Tag, icons, ThemeToggle)
├── types/          # شكل الداتا (زي الـ data classes)
└── lib/            # دوال مساعدة صغيرة
public/images/      # زي res/drawable — الصور والفوتو
```
