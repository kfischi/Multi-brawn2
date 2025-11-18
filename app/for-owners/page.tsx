'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TrendingUp, Users, Target, Award, DollarSign, BarChart, Shield, Clock, Check } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'חשיפה מקסימלית',
    description: 'המתחם שלכם יוצג ללקוחות איכותיים שמחפשים בדיוק מה שאתם מציעים',
  },
  {
    icon: Users,
    title: 'לקוחות ממוקדים',
    description: 'אנחנו מסננים ושולחים אליכם רק לקוחות רלוונטיים שמתאימים למתחם',
  },
  {
    icon: Target,
    title: 'שיווק מקצועי',
    description: 'צוות מקצועי שדואג לצילומים, תוכן, וקידום המתחם שלכם ברשתות',
  },
  {
    icon: Award,
    title: 'תג "מאומת"',
    description: 'אישור איכות ממולטיבראון מעלה את האמינות והביקוש למתחם שלכם',
  },
  {
    icon: DollarSign,
    title: 'הכנסה נוספת',
    description: 'הגדלת התפוסה והכנסות ללא השקעה שיווקית מצדכם',
  },
  {
    icon: BarChart,
    title: 'דוחות ותובנות',
    description: 'קבלו נתונים על ביצועים, חיפושים, ומגמות בשוק',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'שלחו פרטים',
    description: 'מלאו את הטופס או שלחו לנו הודעה עם פרטי המתחם',
  },
  {
    step: '02',
    title: 'ביקור מקדים',
    description: 'ערדית מגיעה לבקר במתחם, לצלם ולהכיר אותו לעומק',
  },
  {
    step: '03',
    title: 'בניית פרופיל',
    description: 'יצירת דף מתחם מקצועי עם תמונות, תיאור, ותגים',
  },
  {
    step: '04',
    title: 'שיווק וחשיפה',
    description: 'המתחם מקודם ללקוחות מתאימים דרך הערוצים שלנו',
  },
  {
    step: '05',
    title: 'קבלת הזמנות',
    description: 'אתם מקבלים פניות איכותיות ומנהלים ישירות מול הלקוחות',
  },
]

const stats = [
  { number: '500+', label: 'לקוחות שביעי רצון' },
  { number: '50+', label: 'מתחמים מאומתים' },
  { number: '95%', label: 'שיעור תפוסה ממוצע' },
  { number: '4.9', label: 'דירוג ממוצע' },
]

export default function ForOwnersPage() {
  const [formData, setFormData] = useState({
    ownerName: '',
    propertyName: '',
    propertyType: '',
    location: '',
    capacity: '',
    phone: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Send to WhatsApp
      const message = `היי ערדית, אני ${formData.ownerName}
מתחם: ${formData.propertyName}
סוג: ${formData.propertyType}
מיקום: ${formData.location}
קיבולת: ${formData.capacity}
טלפון: ${formData.phone}
מייל: ${formData.email}

${formData.message || 'אשמח לשמוע עוד על ההצטרפות למולטיבראון'}`

      window.open(`https://wa.me/972523983394?text=${encodeURIComponent(message)}`, '_blank')
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-accent-pink/10 via-accent-cyan/10 to-purple-500/10">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-6">
            הצטרפו למשפחת מולטיבראון
          </h1>
          <p className="text-xl text-text-grey max-w-3xl mx-auto leading-relaxed mb-8">
            אם יש לכם מתחם איכותי ואתם רוצים להגדיל תפוסה - זה המקום בשבילכם
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contact-form"
              className="px-8 py-4 bg-accent-pink text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              אני רוצה להצטרף
            </a>
            <a
              href="https://wa.me/972523983394?text=היי%20ערדית,%20יש%20לי%20מתחם%20ואני%20רוצה%20לשמוע%20עוד"
              className="px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              שיחה עם ערדית
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-text-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-text-grey">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-dark mb-4">
              למה כדאי להצטרף?
            </h2>
            <p className="text-xl text-text-grey max-w-2xl mx-auto">
              אנחנו לא עוד פלטפורמה - אנחנו שותפים להצלחה שלכם
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-pink to-accent-cyan rounded-xl flex items-center justify-center mb-6">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-grey leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-dark mb-4">
              איך זה עובד?
            </h2>
            <p className="text-xl text-text-grey max-w-2xl mx-auto">
              תהליך פשוט ומהיר להצטרפות
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-pink to-accent-cyan rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-grey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent-cyan/10 to-purple-500/10 border border-accent-cyan/30 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-text-dark mb-6 text-center">
              דרישות להצטרפות
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'מתחם מאובזר ונקי',
                'רישיון עסק תקף',
                'תמונות באיכות גבוהה',
                'זמינות לביקור מקדים',
                'יחס מקצועי ללקוחות',
                'תקשורת זמינה',
              ].map((req, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-text-dark font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-dark mb-4">
                בואו נדבר
              </h2>
              <p className="text-xl text-text-grey">
                מלאו את הטופס ונחזור אליכם תוך 24 שעות
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-12 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4">
                  תודה! קיבלנו את הפרטים
                </h3>
                <p className="text-text-grey mb-6">
                  ערדית תחזור אליכם תוך 24 שעות
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-accent-pink text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  שלח מתחם נוסף
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      השם שלך *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark"
                      placeholder="שם מלא"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      שם המתחם *
                    </label>
                    <input
                      type="text"
                      name="propertyName"
                      value={formData.propertyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark"
                      placeholder="וילת החלומות"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      סוג המתחם *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark"
                    >
                      <option value="">בחר סוג</option>
                      <option value="villa">וילה</option>
                      <option value="zimmer">צימר</option>
                      <option value="apartment">דירת נופש</option>
                      <option value="hotel">מלון בוטיק</option>
                      <option value="event">מתחם אירועים</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      מיקום *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark"
                      placeholder="גליל עליון, כנרת..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    קיבולת (כמה אנשים) *
                  </label>
                  <input
                    type="text"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark"
                    placeholder="10-20 אנשים"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      טלפון *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark"
                      placeholder="050-1234567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    ספרו לנו עוד על המתחם
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark resize-none"
                    placeholder="מה מיוחד במתחם? יש תכונות ייחודיות?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent-pink to-accent-cyan text-white rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'שולח...' : 'שלח פרטים'}
                </button>

                <p className="text-sm text-text-grey text-center">
                  * שדות חובה
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
