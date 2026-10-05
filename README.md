# Canvas Agent V4

نسخة V4 مستقلة مبنية فوق V3.1 بدون تعديل النسخة المجمدة. التطبيق Mobile-first ومهيأ للرفع على Netlify.

## التشغيل
1. ارفع محتويات المجلد كما هي إلى Netlify.
2. افتح التطبيق واضغط زر **Gemini Flash**.
3. أضف Gemini API Key واضغط حفظ/اختبار.
4. اكتب أو احچي أمراً مثل:
   - `ابحث عن سوق تطبيقات إدارة المشاريع وسويلي خريطة بالمصادر`
   - `سويلي خطة كاملة لبناء منصة SaaS وحدد الأدوات والتكلفة والمخاطر`
   - `ابحث في GitHub عن backend مفتوح المصدر`
   - `قارن Supabase و Firebase`
   - `رتبها شجري` / `رتبها خطي` / `اعرض dependencies`

## أهم ما في V4
- Canvas فارغ عند المشروع الجديد، مع حفظ المشاريع محلياً.
- عناصر غنية، علاقات معنونة، بحث وفلاتر، Mini-map، Focus، Collapse/Expand، Snapshots، Presentation.
- Layouts: Auto, Radial, Grid, Tree, Hierarchy, Linear, Timeline, Flowchart, Dependencies, Org Chart.
- Web research بالمصادر، Deep Research متعدد الجولات، URL reader، GitHub، Documentation، Tool Finder، مقارنة أدوات، تكاليف، منافسين، أخبار، صور، API Tester، Code Runner.
- Planner Agent يحول البحث إلى خريطة تنفيذ فيها الأدوات، الأسباب، البدائل، التكلفة، المخاطر والمصادر.
- ملفات PDF/صور/نصوص إلى خريطة عبر Gemini.
- صوت مع preview لحظي ثم تنفيذ بعد اكتمال العبارة.
- Export: PNG / PDF / JSON.
- Offline shell عبر Service Worker.
- تعاون: BroadcastChannel محلي + مزامنة شبه لحظية بين الأجهزة على Netlify عبر Netlify Blobs.

## ملفات Netlify
- `netlify/functions/collab.mjs` للمزامنة عبر الأجهزة.
- `package.json` يحتوي `@netlify/blobs`.
- `netlify.toml` يحدد مجلد الـFunctions.

## ملاحظات مهمة
- مفتاح Gemini يبقى في `localStorage` داخل المتصفح ولا يُرسل إلى خادم التطبيق؛ الطلبات تذهب مباشرة إلى Gemini.
- أداة API Tester تعمل من المتصفح؛ بعض APIs تمنع طلبات المتصفح بسبب CORS، وعندها التطبيق يظهر الخطأ بدل الادعاء بأن الاختبار نجح.
- البحث عن الصور يستخدم Wikimedia Commons كمصدر بصري مفتوح.
- Deep Research هنا Orchestration من عدة عمليات بحث Grounded متتالية ثم تركيب بصري؛ ليس منتج Google managed Deep Research المنفصل.
- تعاون Netlify شبه لحظي (polling كل ~2.2 ثانية)، وليس WebSocket.
- رابط المشاركة يتضمن نسخة ابتدائية من اللوحة؛ المشاريع الضخمة جداً يفضّل مشاركتها أيضاً عبر Export JSON.

## QA
راجع `QA_REPORT_V4.json` و `FEATURE_AUDIT_V4.md`.
آخر تشغيل للاختبارات: **62 / 62 ناجحة**.
