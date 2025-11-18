'use client'

import { MessageCircle, Search, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'פגישת קונספט',
    subtitle: 'The Vision',
    description: 'אנחנו לא מתחילים ב"מתחמים". אנחנו מתחילים בכם. שלב ראשון: שיחה קצרה שבה אנחנו צוללים למה חשוב לכם - הרצון, התקציב, הציפיות. זה לא שאלון, זה אפיון אמיתי.',
  },
  {
    number: '02',
    icon: Search,
    title: 'ליקוט וניהול',
    subtitle: 'The Curation',
    description: 'אחרי שפיצחנו את הקונספט, אנחנו מרכיבים את הרשימה. 3-5 מתחמים שנבדקו אישית, שמתאימים בדיוק לצרכים שלכם. לא 50 אופציות מבלבלות - רק הכי טובים עבורכם.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'ביצוע',
    subtitle: 'The Execution',
    description: 'ברגע שבחרתם, אנחנו מתאמים הכל. מרגע ההזמנה ועד שאתם בדרך חזרה - ערדית זמינה לכל שאלה. התפקיד היחיד שלכם הוא ליהנות.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white/5 backdrop-blur-sm">
      <div className="container">
        {/* Section Header - Skyline Style */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-6">
            השיטה שלנו
          </h2>
          <p className="text-xl text-text-grey leading-relaxed">
            שלושה שלבים פשוטים שחוסכים לכם שבועות של חיפושים ומבטיחים שתקבלו בדיוק מה שצריך.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-6 -right-6 text-8xl font-playfair font-bold text-accent-pink/10 group-hover:text-accent-pink/20 transition-colors duration-300">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-accent-pink/30 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-pink to-accent-cyan rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold text-text-dark mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-sm text-accent-pink font-semibold mb-4 italic">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-text-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -left-6 w-12 h-0.5 bg-gradient-to-l from-accent-pink/30 to-transparent" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-grey mb-6">
            מוכנים להתחיל?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent-pink text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            style={{ boxShadow: '0 8px 30px rgba(255, 94, 161, 0.4)' }}
          >
            לתאום פגישת קונספט
          </a>
        </div>
      </div>
    </section>
  )
}
