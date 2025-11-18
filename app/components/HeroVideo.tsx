'use client'

import { ChevronDown } from 'lucide-react'

export default function HeroVideo() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/EihK8Py6EdE?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=EihK8Py6EdE&playsinline=1&disablekb=1"
          title="MultibrAWN Hero Video"
          allow="autoplay; fullscreen"
          style={{ pointerEvents: 'none' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Hero Content - Skyline Style */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight">
            החופשה שלכם.<br />
            החיפוש שלנו.<br />
            השקט הנפשי שלכם.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            רוב האתרים יראו לכם תמונות יפות. אנחנו מאמינים שחופשה מושלמת מתחילה בלהבין <strong>בדיוק</strong> מה אתם צריכים - ולמצוא את זה עבורכם.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-pink rounded-full" />
              <span>50+ מתחמים מאומתים</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-cyan rounded-full" />
              <span>נבדקים אישית</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-pink rounded-full" />
              <span>תגובה תוך שעה</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#how-it-works" 
              className="w-full sm:w-auto px-10 py-5 bg-accent-pink text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 8px 30px rgba(255, 94, 161, 0.5)' }}
            >
              בואו נמצא את המקום המושלם
            </a>
            <a 
              href="tel:+972501234567" 
              className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              050-123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  )
}
