# صوت — مساحة عمل

> Recovered migration build: source restored from the archived V4 project, with Gemini persistence fixed and no application login requirement.

## تشغيل سريع

1. افتح `index.html` عبر خادم محلي أو Netlify.
2. افتح الإعدادات وأضف Gemini API Key.
3. المفتاح يُحفظ في `localStorage` على جهاز المستخدم فقط.
4. لا يتطلب التطبيق تسجيل دخول.

## المكونات

- Canvas بصري تفاعلي.
- أوامر صوتية ونصية.
- Gemini Tool Router.
- بحث ويب وبحث متعدد الخطوات عبر Gemini tools.
- قارئ روابط.
- Code Execution عبر Gemini.
- استيراد ملفات وتحويلها لخريطة.
- تصدير JSON / PNG / PDF.
- PWA + Service Worker.
- مزامنة اختيارية عبر Netlify Function وNetlify Blobs.

## الأمان

لا يتم إرسال Gemini API Key إلى خادم التطبيق؛ يستخدم مباشرة من المتصفح لاستدعاء Gemini API. لا تخزن مفاتيح مشتركة أو حساسة على أجهزة غير موثوقة.
