# 🏖️ MultibrAWN - Next.js Website

אתר מקצועי למציאת מתחמי נופש ואירועים בישראל. בנוי עם Next.js 14, TypeScript, ו-Tailwind CSS.

## 🚀 תכונות

- ✅ **Next.js 14** עם App Router
- ✅ **TypeScript** לבטיחות קוד
- ✅ **Tailwind CSS** לעיצוב מהיר
- ✅ **YouTube Hero Video** - רקע וידאו דינמי
- ✅ **Responsive Design** - מותאם לכל המכשירים
- ✅ **Optimized Images** - Next/Image לביצועים מקסימליים
- ✅ **SEO Ready** - מטא תגים ו-Open Graph
- ✅ **Chatbot** - צ'אט אינטראקטיבי עם ערדית
- ✅ **WhatsApp Integration** - חיבור ישיר לוואטסאפ
- ✅ **Clean Architecture** - קוד מודולרי ונקי

---

## 📁 מבנה הפרויקט

\`\`\`
multibrawn-nextjs/
├── app/
│   ├── components/          # כל הקומפוננטים
│   │   ├── Header.tsx       # ניווט עליון
│   │   ├── HeroVideo.tsx    # Hero עם YouTube
│   │   ├── HowItWorks.tsx   # "השיטה שלנו"
│   │   ├── FeaturedLocations.tsx  # מתחמים מומלצים
│   │   ├── WhyUs.tsx        # למה מולטיבראון
│   │   ├── Testimonials.tsx # המלצות לקוחות
│   │   ├── CTA.tsx          # Call to Action
│   │   ├── Footer.tsx       # פוטר
│   │   └── Chatbot.tsx      # צ'אטבוט
│   ├── locations/           # דפי מתחמים
│   ├── about/               # דף אודות
│   ├── for-owners/          # דף לבעלי מתחמים
│   ├── blog/                # בלוג/מדריך
│   ├── layout.tsx           # Layout ראשי
│   ├── page.tsx             # עמוד הבית
│   └── globals.css          # סטיילים גלובליים
├── public/                  # קבצים סטטיים
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
\`\`\`

---

## ⚙️ התקנה והרצה

### 1. התקנת Dependencies

\`\`\`bash
cd multibrawn-nextjs
npm install
\`\`\`

### 2. הרצה במצב Development

\`\`\`bash
npm run dev
\`\`\`

האתר יהיה זמין ב: [http://localhost:3000](http://localhost:3000)

### 3. Build לפרודקשן

\`\`\`bash
npm run build
npm start
\`\`\`

---

## 🎨 התאמה אישית

### צבעים

ערכו את הקובץ \`tailwind.config.js\`:

\`\`\`javascript
colors: {
  primary: {
    cyan: '#00E0FF',
    blue: '#2D7FFF',
    purple: '#A06BFF',
  },
  accent: {
    pink: '#FF5EA1',
    cyan: '#00E0FF',
  },
}
\`\`\`

### תוכן

- **Hero Video**: החליפו את ה-YouTube URL ב-\`app/components/HeroVideo.tsx\`
- **טקסטים**: ערכו את התוכן בכל קומפוננט
- **תמונות**: החליפו את ה-Cloudinary URLs

---

## 🚀 פריסה ל-Vercel

### שיטה 1: דרך GitHub (מומלץ)

1. העלו את הקוד ל-GitHub Repository
2. היכנסו ל-[Vercel](https://vercel.com)
3. לחצו על "New Project"
4. בחרו את ה-Repository
5. Vercel יזהה אוטומטית שזה Next.js
6. לחצו "Deploy"

### שיטה 2: דרך Vercel CLI

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

---

## 📱 אינטגרציות

### WhatsApp

החליפו את מספר הטלפון ב:
- \`app/components/CTA.tsx\`
- \`app/components/Header.tsx\`
- \`app/components/Footer.tsx\`

\`\`\`typescript
href="https://wa.me/972XXXXXXXXX"
\`\`\`

### YouTube Video

החליפו את ה-Video ID ב-\`app/components/HeroVideo.tsx\`:

\`\`\`typescript
src="https://www.youtube.com/embed/YOUR_VIDEO_ID?..."
\`\`\`

---

## 🔧 טיפים לפיתוח

### הוספת עמוד חדש

1. צרו תיקייה ב-\`app/\`
2. צרו קובץ \`page.tsx\` בתיקייה

דוגמה:
\`\`\`typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>עמוד חדש</h1>
    </div>
  )
}
\`\`\`

### הוספת קומפוננט חדש

\`\`\`typescript
// app/components/NewComponent.tsx
export default function NewComponent() {
  return <div>קומפוננט חדש</div>
}
\`\`\`

---

## 📊 ביצועים

האתר אופטימלי ל:
- ⚡ **Lighthouse Score**: 95+
- 🖼️ **Image Optimization**: Next/Image
- 📦 **Code Splitting**: אוטומטי
- 🎯 **SEO**: Meta tags מלאים

---

## 🆘 תמיכה

### שאלות נפוצות

**ש: הסרטון לא מתנגן?**  
ת: בדקו שה-YouTube Video ID נכון וש-autoplay מותר.

**ש: התמונות לא נטענות?**  
ת: בדקו את \`next.config.js\` שיש הרשאה ל-Cloudinary domain.

**ש: שגיאת TypeScript?**  
ת: הריצו \`npm install\` מחדש.

---

## 📝 TODO - שלבים הבאים

- [ ] דף "כל המתחמים" עם סינונים
- [ ] דף מתחם בודד דינמי
- [ ] דף אודות ערדית
- [ ] דף לבעלי מתחמים
- [ ] בלוג/מדריך
- [ ] חיבור ל-CMS (Sanity.io)
- [ ] אוטומציה של הצ'אטבוט (Make.com)
- [ ] אינטגרציה עם WhatsApp Business API

---

## 👨‍💻 פותח על ידי

Claude AI + Ardit Brawn  
נבנה עם Next.js 14, TypeScript, Tailwind CSS

---

## 📄 רישיון

© 2025 MultibrAWN. All rights reserved.
\`\`\`
