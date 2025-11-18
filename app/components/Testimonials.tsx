'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    text: 'ערדית מצאה לנו וילה מדהימה לשבת החתן של הבן. היא הכירה את כל הפרטים - קרבה לבית כנסת, כשרות, גודל המשפחה. הכל היה בדיוק כמו שהיא הבטיחה. תודה ענקית!',
    author: 'משפחת כהן',
    location: 'ירושלים',
  },
  {
    text: 'חיפשנו צימר רומנטי ליום השנה שלנו. תוך שעה ערדית חזרה אלינו עם 3 אופציות מושלמות. בחרנו אחת והיה פשוט מושלם. השירות האישי עשה את ההבדל!',
    author: 'דוד ושרה לוי',
    location: 'פתח תקווה',
  },
  {
    text: 'ארגנו יום גיבוש לחברה דרך מולטיבראון. המתחם היה מדהים והתאים בדיוק למה שביקשנו. ערדית תיאמה הכל מראש והכל עבד חלק. בהחלט נחזור!',
    author: 'אבי מזרחי',
    location: 'מנכ"ל, טק קומפני בע"מ',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>מה הלקוחות אומרים</h2>
          <p>סיפורים אמיתיים ממשפחות מרוצות</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-accent-pink/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent-pink text-accent-pink" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-grey leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white/20 pt-4">
                <p className="font-bold text-text-dark">{testimonial.author}</p>
                <p className="text-sm text-text-grey">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
