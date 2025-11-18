'use client'

import Link from 'next/link'
import { Eye, Keyboard, Volume2, Users, Shield, Phone, Mail } from 'lucide-react'

const accessibilityFeatures = [
  {
    icon: Eye,
    title: 'התאמת ניגודיות',
    description: 'שינוי רמת הניגודיות לקריאות מיטבית',
  },
  {
    icon: Keyboard,
    title: 'ניווט מקלדת',
    description: 'ניווט מלא באתר באמצעות מקלדת בלבד',
  },
  {
    icon: Volume2,
    title: 'תמיכה בקוראי מסך',
    description: 'תאימות מלאה לקוראי מסך כמו JAWS ו-NVDA',
  },
  {
    icon: Users,
    title: 'הגדלת טקסט',
    description: 'אפשרות להגדלת גופן עד 150%',
  },
]

const implemented = [
  'התאמת הניגוד הצבעוני לקריאות מירבית',
  'הוספת תגי alt לכל התמונות באתר',
  'מבנה כותרות היררכי וברור',
  'ניווט מקלדת מלא לכל חלקי האתר',
  'תמיכה בקוראי מסך',
  'טקסט בגודל מתאים וקריא',
  'לינקים ברורים ומתוארים',
  'טפסים נגישים עם תוויות מתאימות',
  'אפשרות להגדלת טקסט באמצעות דפדפן',
  'תמיכה בטכנולוגיות מסייעות',
]

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-accent-cyan/10 via-purple-500/10 to-accent-pink/10">
        <div className="container text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-accent-cyan rounded-full flex items-center justify-center">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-6">
            הצהרת נגישות
          </h1>
          <p className="text-xl text-text-grey max-w-3xl mx-auto leading-relaxed">
            אנו ב-Multibrawn מחויבים להנגשת השירותים שלנו לכלל האוכלוסייה, כולל אנשים עם מוגבלויות
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-5xl py-16 space-y-12">
        {/* Commitment */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            מחויבותנו לנגישות
          </h2>
          <p className="text-lg text-text-grey leading-relaxed mb-6">
            אנו ב-Multibrawn מחויבים להנגשת השירותים שלנו לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.
            אנו פועלים ליישום נגישות האתר בהתאם לתקן הישראלי (ת״י 5568) ולהנחיות WCAG 2.1 ברמה AA.
          </p>
          <div className="bg-accent-cyan/10 border border-accent-cyan/30 rounded-xl p-6">
            <p className="text-text-dark font-semibold">
              אנו מאמינים שנגישות היא זכות בסיסית, ולא פריבילגיה. כל אדם זכאי לגישה שווה למידע ולשירותים באינטרנט.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section>
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-8 text-center">
            תכונות נגישות באתר
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-cyan to-accent-pink rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-grey">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* What We Did */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            מה עשינו כדי להנגיש את האתר?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {implemented.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-text-grey">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Future Improvements */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            שיפורים נוספים שאנו מתכננים
          </h2>
          <p className="text-text-grey leading-relaxed mb-6">
            אנו ממשיכים לעמל על שיפור נגישות האתר באופן מתמיד. בתוכניות שלנו לעתיד הקרוב:
          </p>
          <ul className="space-y-3 text-text-grey">
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">→</span>
              <span>הוספת כפתור דילוג לתוכן העיקרי</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">→</span>
              <span>שיפור הניגוד בחלקים נוספים</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">→</span>
              <span>הוספת תמיכה בניווט קולי</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">→</span>
              <span>תמיכה מורחבת יותר בטכנולוגיות מסייעות</span>
            </li>
          </ul>
        </section>

        {/* Standards */}
        <section className="bg-gradient-to-br from-purple-500/20 to-accent-pink/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            תקנים וחוקים
          </h2>
          <div className="space-y-4 text-text-grey">
            <p className="leading-relaxed">
              <strong className="text-text-dark">תקן ישראלי ת״י 5568:</strong> האתר מיושם בהתאם לתקן הישראלי 
              על בסיס הנחיות WCAG 2.1 ברמה AA.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-dark">חוק שוויון זכויות:</strong> בהתאם לחוק שוויון זכויות לאנשים 
              עם מוגבלות, התשנ״ח-1998 ולתקנותיו.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-dark">WCAG 2.1 Level AA:</strong> עמידה בהנחיות הבינלאומיות לנגישות 
              תוכן אינטרנט.
            </p>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            מידע נוסף על נגישות באתר
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">חלקים נגישים באתר</h3>
              <p className="text-text-grey leading-relaxed">
                כל דפי האתר והתוכן שבהם נגישים, כולל: דף הבית, דפי המתחמים, דף אודות, טפסי יצירת קשר, 
                והמדריך שלנו.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">טכנולוגיות מסייעות נתמכות</h3>
              <p className="text-text-grey leading-relaxed">
                קוראי מסך (JAWS, NVDA, VoiceOver), ניווט מקלדת, הגדלת טקסט, תוכנות זיהוי קולי.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">דפדפנים נתמכים</h3>
              <p className="text-text-grey leading-relaxed">
                Chrome, Firefox, Safari, Edge - בגרסאות העדכניות ביותר.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-4">
            יצירת קשר בנושא נגישות
          </h2>
          <p className="text-text-grey mb-8 leading-relaxed max-w-2xl mx-auto">
            אם נתקלתם בבעיית נגישות באתר, אנא פנו אלינו. אנו מחויבים לפתור כל בעיה במהירות המרבית.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="tel:+972523983394"
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/20 transition-all"
            >
              <Phone size={20} className="text-accent-cyan" />
              <span className="text-text-dark font-medium">052-398-3394</span>
            </a>
            <a
              href="mailto:multibrawn@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/20 transition-all"
            >
              <Mail size={20} className="text-accent-pink" />
              <span className="text-text-dark font-medium">multibrawn@gmail.com</span>
            </a>
          </div>
          <p className="text-sm text-text-grey">
            נענה לפניותיכם בהקדם האפשרי ונפעל לפתרון הבעיה תוך 7 ימי עבודה
          </p>
        </section>

        {/* Last Updated */}
        <div className="text-center py-8 bg-white/5 backdrop-blur-sm rounded-2xl">
          <p className="text-text-grey mb-2">
            <strong>הצהרה זו עודכנה לאחרונה:</strong> נובמבר 2024
          </p>
          <p className="text-sm text-text-grey">
            גרסה 1.2 - כוללת עדכונים בהתאם לתקן ת״י 5568 ו-WCAG 2.1 AA
          </p>
        </div>
      </div>
    </div>
  )
}
