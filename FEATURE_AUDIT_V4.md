# Canvas Agent V4 — Feature Audit

نتيجة الاختبار الآلي/المحاكاة الأخيرة: **62 / 62 PASS**. بالإضافة إلى مراجعة بصرية على viewport هاتف 390×844.

## 1) Canvas والمحرك الداخلي — PASS
- مساحة فارغة للمشروع الجديد، بدون Demo nodes.
- سحب وتحريك وتكبير/تصغير وPan وMini-map.
- Multi-select، Group، Duplicate، Delete، Undo/Redo.
- Snapping أثناء السحب.
- عناصر: دائرة، بطاقة، نص، Sticky note، صورة، أيقونة، Task، Checklist، Progress، Table، Link/File/Source cards.
- بطاقات المحتوى الطويل تتمدد ديناميكياً بدون قص النص في اختبار الضغط.
- روابط معنونة واتجاهية مثل: يعتمد على / قبل / بعد / جزء من.
- Focus mode + Collapse + Expand.
- Search + filters.
- Auto-save + Projects + Import/Export JSON.
- Snapshots/Versions + Presentation Mode.

## 2) Layouts والتحويل — PASS
- Auto.
- Radial.
- Grid.
- Linear أفقي/عمودي.
- Tree.
- Hierarchy.
- Timeline.
- Flowchart.
- Dependencies (تحويل العلاقات إلى أسهم وترتيب Flow).
- Org chart.
- Mobile tree wrapping: الفروع الكثيرة تنقسم إلى صفوف/عمودين حتى تبقى مقروءة على الهاتف؛ سيناريو الخطة الاختباري ظهر عند ~65% zoom.
- Map → Table.
- Text/PDF/Image/File → Map.

## 3) فهم السياق والذكاء داخل اللوحة — PASS
- أوامر سياقية للمحدد: هاي/المحدد، تغيير اسم/لون/حجم، ربط، حذف، تكرار.
- Voice navigation إلى عنصر بالاسم.
- AI Critic.
- AI Summarize.
- AI Expand.
- Ask Canvas.
- AI Reorganize/Grouping.
- Smart templates.
- اقتراحات أوامر بحسب حالة اللوحة.

## 4) الصوت والـRealtime — PASS
- Web Speech Recognition عند توفره بالمتصفح.
- Interim transcript.
- Live ghost preview أثناء الكلام.
- Auto-send بعد توقف الكلام.
- إعادة تشغيل الاستماع المستمر عند الحاجة.

## 5) External Agent Tools — PASS بالمحاكاة
- Web Search grounded بالمصادر.
- Deep Research بثلاث جولات بحث ثم تركيب.
- URL/Page reader.
- GitHub repository search.
- Tool Finder.
- Documentation reader.
- Tool comparison.
- Cost calculator عبر code execution.
- Competitor/company research.
- News/current research.
- Image/reference search.
- API tester.
- Code runner.
- Update plan/research refresh.
- Tool Router يختار المسار من صياغة المستخدم.

## 6) Planner Agent — PASS
تمت محاكاة طلب: بناء منصة SaaS. النتيجة احتوت على:
- Supabase كخيار backend مع سبب وبديل وتكلفة ومصدر.
- Netlify للنشر مع مصدر.
- Lovable لتسريع الواجهة مع بديل.
- مراحل تنفيذ Checklist.
- علاقات مرسومة بين المكونات.
- روابط مصادر وConfidence metadata.
- ترتيب Mobile-first بدون تداخل في سيناريو الاختبار.

## 7) مشاركة وتعاون وتصدير — PASS
- Share link.
- BroadcastChannel بين تبويبات نفس المتصفح.
- Netlify Function + Netlify Blobs للمزامنة بين الأجهزة عند النشر.
- PNG export.
- PDF export.
- JSON export/import.

## 8) Offline / PWA shell — PASS
- Manifest موجود.
- Service Worker يخزن ملفات التطبيق المحلية.
- تم تعديل Service Worker حتى لا يعترض طلبات Gemini/GitHub/Wikimedia أو يعيد HTML بدلاً من استجابة API عند انقطاع الشبكة.

## 9) QA تقني — PASS
- `node --check app.js` ناجح.
- `node --check service-worker.js` ناجح.
- `node --check netlify/functions/collab.mjs` ناجح.
- JSON لـ package/manifest صالح.
- 62/62 سيناريو محاكاة ناجح.
- لا توجد Page/Runtime errors في جلسة الاختبار.
- تم إصلاح إخفاء الـbottom sheets بالكامل بعد الإغلاق حتى لا تبقى ظاهرة جزئياً على الهاتف.

## قيود صريحة
1. **CORS:** اختبار API مباشر من المتصفح لا يستطيع تجاوز CORS لخدمة تمنع المتصفح.
2. **Image search:** المصدر الحالي Wikimedia Commons، وليس Google Images.
3. **Deep Research:** تنفيذ متعدد المراحل داخل التطبيق؛ ليس managed Deep Research API مستقل.
4. **Collaboration:** المزامنة عبر Netlify polling تقريباً كل 2.2 ثانية، وليست WebSocket لحظية بالمللي ثانية.
5. **Security/permissions:** غرفة التعاون تعتمد على room id ولا تحتوي نظام حسابات وصلاحيات/ACL؛ مناسبة للنسخة الحالية وليست نظام تعاون مؤسسي محمي.
6. **Speech:** يعتمد على دعم Web Speech Recognition في المتصفح والجهاز.

## الخلاصة
الخطة المطلوبة مطبقة كنسخة V4 فعلية: Canvas + Agent + Researcher + Planner + Tool Router، مع مراجعة وظيفية وبصرية ومحاكاة للمسارات الأساسية والأدوات الخارجية.
