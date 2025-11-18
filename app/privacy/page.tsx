'use client'

import Link from 'next/link'
import { Shield, Mail, Phone } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-accent-pink/10 via-accent-cyan/10 to-purple-500/10">
        <div className="container text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-accent-pink rounded-full flex items-center justify-center">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-6">
            מדיניות פרטיות
          </h1>
          <p className="text-xl text-text-grey max-w-3xl mx-auto leading-relaxed">
            ב-Multibrawn אנו מחויבים להגנה מלאה על הפרטיות שלכם. מדיניות זו מסבירה כיצד אנו אוספים, 
            משתמשים ומגינים על המידע האישי שלכם.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-5xl py-16 space-y-12">
        {/* Section 1 */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            איזה מידע אנו אוספים?
          </h2>
          <p className="text-text-grey mb-6 leading-relaxed">
            אנו עשויים לאסוף את סוגי המידע הבאים:
          </p>
          <ul className="space-y-4 text-text-grey">
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">•</span>
              <span><strong>מידע אישי:</strong> שם, כתובת אימייל, מספר טלפון כפי שמסרתם בטפסי יצירת קשר</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">•</span>
              <span><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה ונתוני ביקור באתר</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">•</span>
              <span><strong>העדפות שירות:</strong> סוג הנכס המועדף עליכם, תאריכים רצויים ודרישות מיוחדות</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">•</span>
              <span><strong>תקשורת:</strong> תוכן ההודעות והשיחות איתנו לצורך מתן שירות מיטבי</span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            כיצד אנו משתמשים במידע?
          </h2>
          <ul className="space-y-4 text-text-grey">
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">•</span>
              <span>מתן שירותי הזמנה והתאמה אישית של נכסים</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">•</span>
              <span>שיפור השירות וחוויית המשתמש באתר</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">•</span>
              <span>יצירת קשר לצורך אישור הזמנות ומתן עדכונים</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">•</span>
              <span>שליחת מידע שיווקי רלוונטי (רק עם הסכמתכם)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">•</span>
              <span>עמידה בדרישות חוקיות ורגולטוריות</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-cyan font-bold">•</span>
              <span>מניעת הונאות והבטחת אבטחת המידע</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            שיתוף מידע עם גורמים חיצוניים
          </h2>
          <p className="text-text-grey mb-6 leading-relaxed">
            אנו לא מוכרים, מחכירים או משתפים את המידע האישי שלכם עם גורמים חיצוניים, למעט במקרים הבאים:
          </p>
          <ul className="space-y-4 text-text-grey">
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <span>שותפי עסקיים (בעלי נכסים) לצורך ביצוע ההזמנה</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <span>ספקי שירות טכנולוגיים המסייעים בהפעלת האתר</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <span>חובה חוקית או צו בית משפט</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <span>הגנה על הזכויות והבטיחות שלנו ושל לקוחותינו</span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            אבטחת המידע
          </h2>
          <p className="text-text-grey mb-6 leading-relaxed">
            אנו נוקטים בצעדי אבטחה מתקדמים להגנה על המידע שלכם:
          </p>
          <ul className="space-y-4 text-text-grey">
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">✓</span>
              <span>הצפנת SSL לכל העברות המידע באתר</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">✓</span>
              <span>אחסון מידע בשרתים מאובטחים בישראל</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">✓</span>
              <span>גישה מוגבלת למידע רק לעובדים מורשים</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">✓</span>
              <span>ביקורות אבטחה תקופתיות ועדכוני מערכות</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-pink font-bold">✓</span>
              <span>גיבוי מידע תקופתי ותוכניות התאוששות</span>
            </li>
          </ul>
        </section>

        {/* Section 5 - Rights */}
        <section className="bg-gradient-to-br from-accent-pink/20 to-accent-cyan/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-6">
            הזכויות שלכם
          </h2>
          <p className="text-text-grey mb-6 leading-relaxed">
            בהתאם לחוק הגנת הפרטיות, הזכויות שלכם כוללות:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-2">זכות עיון</h3>
              <p className="text-text-grey text-sm">לדעת איזה מידע אנו מחזיקים עליכם</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-2">זכות תיקון</h3>
              <p className="text-text-grey text-sm">לבקש תיקון מידע שגוי או לא מדויק</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-2">זכות מחיקה</h3>
              <p className="text-text-grey text-sm">לבקש מחיקת המידע האישי שלכם</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-2">זכות התנגדות</h3>
              <p className="text-text-grey text-sm">להתנגד לעיבוד מידע לצרכי שיווק</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-playfair font-bold text-text-dark mb-4">
            יש לכם שאלות על הפרטיות שלכם?
          </h2>
          <p className="text-text-grey mb-8 leading-relaxed">
            אנו כאן כדי לעזור ולענות על כל שאלה
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="tel:+972501234567"
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/20 transition-all"
            >
              <Phone size={20} className="text-accent-pink" />
              <span className="text-text-dark font-medium">050-123-4567</span>
            </a>
            <a
              href="mailto:privacy@multibrawn.com"
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/20 transition-all"
            >
              <Mail size={20} className="text-accent-cyan" />
              <span className="text-text-dark font-medium">privacy@multibrawn.com</span>
            </a>
          </div>
          <p className="text-sm text-text-grey">
            נענה לפניותיכם תוך 72 שעות ונפעל למימוש זכויותיכם במהירות המרבית
          </p>
        </section>

        {/* Last Updated */}
        <div className="text-center py-8 bg-white/5 backdrop-blur-sm rounded-2xl">
          <p className="text-text-grey mb-2">
            <strong>מדיניות זו עודכנה לאחרונה:</strong> נובמבר 2024
          </p>
          <p className="text-sm text-text-grey">
            גרסה 2.1 - כוללת עדכונים בהתאם לחוק הגנת הפרטיות התשפ"א-2021
          </p>
        </div>
      </div>
    </div>
  )
}
