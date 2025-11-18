'use client'

import { MessageCircle, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-accent-pink/10 via-accent-cyan/10 to-purple-500/10">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-6">
            מוכנים למצוא את המקום המושלם?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-text-grey mb-12 leading-relaxed">
            ספרו לנו מה אתם מחפשים ונחזור אליכם תוך שעה. פשוט ככה.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/972501234567?text=היי%20ערדית,%20אני%20מעוניין%20במתחם%20נופש"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle size={24} />
              שלחו הודעה בוואטסאפ
            </a>

            <a
              href="tel:+972501234567"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-lg text-text-dark border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <Phone size={24} />
              050-123-4567
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-text-grey">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-pink rounded-full animate-pulse" />
              <span>זמינים 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
              <span>תגובה תוך שעה</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>ללא עלות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
