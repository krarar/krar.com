# دليل الخدمات الشامل 🧭
## تطبيق PWA متكامل

تطبيق ويب تقدمي (PWA) لدليل الخدمات الشامل مع دعم كامل للغة العربية والتوجه من اليمين إلى اليسار.

---

## 📁 هيكل الملفات

```
/
├── index.html       ← التطبيق الرئيسي (SPA كامل)
├── manifest.json    ← إعدادات PWA
├── sw.js            ← Service Worker (للعمل بدون إنترنت)
└── icons/           ← أيقونات التطبيق
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## 🚀 نشر التطبيق على GitHub Pages

### الخطوات:

1. **إنشاء مستودع GitHub:**
   - اذهب إلى [github.com](https://github.com)
   - اضغط **"New repository"**
   - سمّه: `dal-khidmat` أو أي اسم تريده
   - اجعله **Public**
   - اضغط **"Create repository"**

2. **رفع الملفات:**
   ```bash
   git init
   git add .
   git commit -m "إضافة تطبيق دليل الخدمات"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dal-khidmat.git
   git push -u origin main
   ```

3. **تفعيل GitHub Pages:**
   - في مستودعك على GitHub
   - اذهب إلى **Settings** → **Pages**
   - تحت **Source** اختر: **Deploy from a branch**
   - اختر **main** و **/ (root)**
   - اضغط **Save**

4. **رابط التطبيق:**
   - سيكون متاحاً على: `https://YOUR_USERNAME.github.io/dal-khidmat/`

---

## ✨ الميزات

- 🌐 **SPA** - تطبيق صفحة واحدة متكامل
- 📱 **PWA** - يمكن تثبيته على الهاتف كتطبيق
- 🔌 **Offline** - يعمل بدون إنترنت (للصفحات المحفوظة)
- 🔥 **Firebase** - قاعدة بيانات Firestore للبيانات الحية
- 🔍 **بحث** - بحث متكامل عبر جميع الفئات
- ❤️ **مفضلة** - حفظ الخدمات المفضلة
- 📋 **حجز** - نظام إرسال الطلبات
- 🎨 **تصميم حديث** - واجهة عصرية مع تأثيرات متحركة
- 📲 **متجاوب** - يتكيف مع جميع أحجام الشاشات

---

## 🔧 الفئات المدعومة

| الفئة | Collection | Bookings |
|-------|-----------|---------|
| محامون | lawyers | bookings |
| أطباء | lawyers2 | bookings1 |
| مطاعم | lawyers3 | bookings |
| أسواق | lawyers4 | bookings |
| عقارات | lawyers5 | bookings |
| تجميل | lawyers6 | bookings |
| سيارات | lawyers7 | bookings |
| سفر | lawyers8 | bookings |
| رياضة | lawyers9 | bookings |
| تعليم | lawyers10 | bookings |
| فنادق | lawyers11 | bookings |
| صيدليات | lawyers12 | bookings |
| إلكترونيات | lawyers13 | bookings |
| مفروشات | lawyers14 | bookings |
| موبايلات | lawyers15 | bookings |
| صالونات | lawyers16 | bookings |
| سيارات أجرة | lawyers17 | bookings |
| عيادات | lawyers18 | bookings |
| مدرسين | lawyers19 | bookings |
| وجبات سريعة | lawyers20 | bookings |

---

## 📞 Firebase Config

التطبيق يستخدم Firebase المُعدّ مسبقاً. إذا أردت تغيير المشروع، عدّل `firebaseConfig` في `index.html`.

---

*تم تطويره بواسطة شركة الإبداع الرقمي 🇮🇶*
