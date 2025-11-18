'use client'

import Image from 'next/image'
import Link from 'next/link'

const timeline = [
  {
    year: '2020-2021',
    title: 'התחלות בקורונה',
    description: 'כשהעולם נעצר, ראיתי הזדמנות. התחלתי לחקור את עולם הווילות והצימרים.',
  },
  {
    year: '2021-2022',
    title: 'שיתופי פעולה ראשונים',
    description: 'התחלתי לעבוד עם מגוון נכסים ולבנות מוניטין של מקצועיות ואמינות.',
  },
  {
    year: '2023-2024',
    title: 'הולדת "הסוכן האישי"',
    description: 'הבנו שהערך האמיתי הוא בסינון ובאמינות. התמקדנו בשירות פרימיום.',
  },
  {
    year: '2024 ואילך',
    title: 'המשך הצמיחה',
    description: 'עם מאות לקוחות מרוצים, אנחנו ממשיכים להיות המותג המוביל בתחום.',
  },
]

const values = [
  {
    icon: '❤️',
    title: 'שירות אישי',
    description: 'כל לקוח מקבל יחס אישי ופתרון מותאם במדויק לצרכים שלו.',
  },
  {
    icon: '💎',
    title: 'אמינות ואיכות',
    description: 'כל נכס נבדק אישית. אנחנו עובדים רק עם הטובים ביותר.',
  },
  {
    icon: '💡',
    title: 'חדשנות',
    description: 'חשיבה מחוץ לקופסה היא המנוע שלנו למצוא פתרונות יצירתיים.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-6">
            הסיפור שלנו: מומחיות, לא רק חיפוש
          </h1>
          <p className="text-xl text-text-grey max-w-3xl mx-auto leading-relaxed">
            גלו למה הקמנו את שירות הסוכן האישי, ואיך המומחיות שלנו הופכת לשקט הנפשי שלכם.
          </p>
        </div>
      </section>

      {/* Ardit's Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-text-dark mb-6">
                ערדית בראון - מייסדת והלב הפועם
              </h2>
              <p className="text-lg text-text-grey mb-6 leading-relaxed">
                שמי ערדית בראון, יזמית עם מעל 10 שנות ניסיון בחיבור בין אנשים לחלומות שלהם. 
                הכל התחיל מתסכול אישי: ראיתי איך אנשים יקרים מבזבזים שעות בחיפושים אינסופיים, 
                רק כדי להתאכזב ממקום שלא תאם את התמונות.
              </p>
              <p className="text-lg text-text-grey leading-relaxed">
                הקמתי את מולטיבראון על עיקרון פשוט: <strong className="text-accent-pink">לכל אדם מגיע 
                שירות אישי שחוסך לו זמן ומבטיח לו 100% אמינות.</strong>
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1762012646/Ardit_znq9aj.jpg"
                  alt="ערדית בראון, מייסדת Multibrawn"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg"
                  alt="צוות Multibrawn"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-playfair font-bold text-text-dark mb-6">
                החזון הופך למציאות
              </h2>
              <p className="text-lg text-text-grey mb-6 leading-relaxed">
                היום אני גאה להוביל צוות מומחים שמכיר כל נכס באופן אישי. אנחנו לא "עוד פלטפורמה", 
                אנחנו <strong className="text-accent-pink">הסוכנים האישיים שלכם.</strong>
              </p>
              <p className="text-lg text-text-grey leading-relaxed">
                ההבטחה שלנו היא פשוטה: אנחנו מבצעים את כל הבדיקות, התיאומים והסינונים, 
                כדי שלכם יישאר רק החלק המהנה - החוויה. אנחנו בודקים שהבריכה באמת מחוממת, 
                שהמקום מאושר למסיבות, ושהתמונות משקפות את המציאות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-dark text-center mb-16">
            המסע שלנו לאורך השנים
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent-pink rounded-full border-4 border-white shadow-lg z-10" />
                
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                    <div className="text-accent-pink font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-grey leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>

          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-accent-pink via-accent-cyan to-accent-pink -z-10" 
               style={{ height: `${timeline.length * 200}px` }} />
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-dark text-center mb-16">
            הערכים שלנו
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:border-accent-pink/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-text-grey leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent-pink/10 via-accent-cyan/10 to-purple-500/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-playfair font-bold text-text-dark mb-6">
              בדקו אם התאריך שלכם פנוי
            </h2>
            <p className="text-xl text-text-grey mb-8 leading-relaxed">
              בדיקה מהירה, בלי כרטיס אשראי. נחזור באותו יום עם "כן/לא" ותמחור חד.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent-pink text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              הפעל את הסוכן האישי שלי
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
