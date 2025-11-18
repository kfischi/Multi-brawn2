'use client'

import { UserCheck, Headphones, Clock, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: UserCheck,
    title: 'נבדק אישית',
    description: 'ערדית מכירה כל מתחם באופן אישי. לא נכנס אצלנו מתחם שלא עבר בדיקה יסודית בשטח.',
  },
  {
    icon: Headphones,
    title: 'שירות אישי',
    description: 'לא רובוטים, לא מוקד. את מדברת ישירות עם ערדית - אדם אמיתי שמכיר את הצרכים שלך.',
  },
  {
    icon: Clock,
    title: 'חוסכים זמן',
    description: 'במקום שבועות של חיפושים - אתם מקבלים המלצות מדויקות תוך שעה. זה הכל.',
  },
  {
    icon: Shield,
    title: 'אמינות 100%',
    description: 'מה שרואים בתמונות זה מה שמקבלים. אין הפתעות, אין אכזבות. מובטח.',
  },
  {
    icon: Star,
    title: 'מתחמים ייחודיים',
    description: 'גישה למקומות שלא תמצאו בחיפוש רגיל. מתחמים אקסקלוסיביים זמינים רק דרכנו.',
  },
  {
    icon: MessageCircle,
    title: 'ליווי מלא',
    description: 'מרגע הפנייה ועד שאתם בחזרה בבית - ערדית זמינה לכל שאלה ובעיה.',
  },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-white/5 backdrop-blur-sm">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-6">
            למה מולטיבראון?
          </h2>
          <p className="text-xl text-text-grey leading-relaxed">
            מה שמייחד אותנו משאר הפלטפורמות. לא עוד "אתר הזמנות" - אנחנו הסוכנים האישיים שלכם.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group text-center p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/20 hover:border-accent-pink/30 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-pink to-accent-cyan rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon size={36} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-dark mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-grey leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
