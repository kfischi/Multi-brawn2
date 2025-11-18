'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  MapPin, Users, Star, Check, Phone, MessageCircle, 
  Home, Bed, Bath, Wifi, Utensils, Droplets, Wind, 
  ChevronRight, ChevronLeft, X, Share2, Heart
} from 'lucide-react'

// Mock data - תחליפי עם המתחמים האמיתיים שלך מה-CMS
const locationData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'וילת פאר בגליל',
    region: 'גליל עליון',
    address: 'רמות הגליל',
    type: 'וילה פרטית',
    capacity: 25,
    bedrooms: 6,
    bathrooms: 4,
    area: '350 מ"ר',
    priceRange: '₪4,000-7,000',
    rating: 4.9,
    reviews: 127,
    verified: true,
    description: `וילה מדהימה בלב הגליל המציעה חוויית נופש יוצאת דופן. המתחם משתרע על 350 מ"ר וכולל 6 חדרי שינה מרווחים, 4 חדרי רחצה מפוארים, וסלון ענק עם חלונות מהרצפה עד התקרה.

הוילה מושלמת למשפחות גדולות, שבתות חתן, וימי גיבוש. הבריכה המחוממת פעילה כל השנה, והג'קוזי החיצוני מציע נוף מרהיב להרי הגליל.

המטבח מאובזר במלואו עם כל הציוד הדרוש להכנת ארוחות לקבוצה גדולה. החצר הגדולה כוללת פינת ברביקיו, ערסלים, ופינות ישיבה מרובות.`,
    
    amenities: [
      { icon: Wifi, name: 'WiFi מהיר' },
      { icon: Droplets, name: 'בריכה מחוממת' },
      { icon: Wind, name: 'מיזוג מרכזי' },
      { icon: Utensils, name: 'מטבח מאובזר' },
      { icon: Home, name: 'גינה פרטית' },
      { icon: Bed, name: '6 חדרי שינה' },
      { icon: Bath, name: '4 חדרי רחצה' },
      { name: 'ג\'קוזי חיצוני' },
      { name: 'פינת ברביקיו' },
      { name: 'חניה פרטית' },
      { name: 'מערכת סאונד' },
      { name: 'טלוויזיות בכל חדר' },
    ],
    
    images: [
      'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg',
      'https://res.cloudinary.com/dptyfvwyo/image/upload/v1762003191/1_tsc6xx.jpg',
      'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818996/Zimmer2_ge7g6h.jpg',
      'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Hotel1_ihkey7.jpg',
      'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Apartment1_mrxdad.jpg',
      'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/20_t6yw8m.jpg',
    ],
    
    highlights: [
      'נבדק ומאומת על ידי ערדית',
      'בריכה מחוממת פעילה כל השנה',
      'נוף פנורמי להרי הגליל',
      'קרוב לאטרקציות (15 דק\' לרמות)',
      'מתאים לקבוצות גדולות',
      'חצר גדולה ומטופחת',
    ],
    
    rules: [
      'אפשרות להביא חיות מחמד (בתיאום מראש)',
      'אין עישון בתוך הוילה',
      'שעת צ\'ק-אין: 16:00',
      'שעת צ\'ק-אאוט: 11:00',
      'אפשרות להארכת שהות (בכפוף לזמינות)',
    ],
  },
}

export default function SingleLocationPage() {
  const params = useParams()
  const id = params?.id as string
  const location = locationData[id]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  if (!location) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-text-dark mb-4">המתחם לא נמצא</h1>
          <Link href="/locations" className="text-accent-pink hover:underline">
            חזרה לכל המתחמים
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % location.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + location.images.length) % location.images.length)
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="container mb-6">
        <div className="flex items-center gap-2 text-sm text-text-grey">
          <Link href="/" className="hover:text-accent-pink transition-colors">דף הבית</Link>
          <ChevronRight size={16} />
          <Link href="/locations" className="hover:text-accent-pink transition-colors">כל המתחמים</Link>
          <ChevronRight size={16} />
          <span className="text-text-dark">{location.name}</span>
        </div>
      </div>

      {/* Gallery */}
      <section className="container mb-12">
        <div className="grid md:grid-cols-2 gap-4 rounded-3xl overflow-hidden">
          {/* Main Image */}
          <div className="relative aspect-[4/3] md:row-span-2 cursor-pointer group" onClick={() => setShowGallery(true)}>
            <Image
              src={location.images[0]}
              alt={location.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-lg">
                לחץ לצפייה בגלריה
              </span>
            </div>
          </div>

          {/* Small Images */}
          {location.images.slice(1, 5).map((img: string, idx: number) => (
            <div key={idx} className="relative aspect-[4/3] cursor-pointer group" onClick={() => { setCurrentImageIndex(idx + 1); setShowGallery(true); }}>
              <Image
                src={img}
                alt={`${location.name} - תמונה ${idx + 2}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {idx === 3 && location.images.length > 5 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">+{location.images.length - 5}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
              isSaved
                ? 'bg-accent-pink border-accent-pink text-white'
                : 'bg-white/10 backdrop-blur-lg border-white/20 text-text-dark hover:bg-white/20'
            }`}
          >
            <Heart size={20} fill={isSaved ? 'currentColor' : 'none'} />
            <span>{isSaved ? 'נשמר' : 'שמור'}</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-text-dark hover:bg-white/20 transition-all">
            <Share2 size={20} />
            <span>שתף</span>
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-text-dark mb-3">
                    {location.name}
                  </h1>
                  <div className="flex items-center gap-4 text-text-grey">
                    <div className="flex items-center gap-1">
                      <MapPin size={18} className="text-accent-pink" />
                      <span>{location.region}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={18} className="text-accent-cyan" />
                      <span>עד {location.capacity} איש</span>
                    </div>
                  </div>
                </div>
                {location.verified && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                    <Check size={18} className="text-green-500" />
                    <span className="text-green-600 font-semibold">מאומת</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-500" fill="currentColor" />
                  <span className="text-2xl font-bold text-text-dark">{location.rating}</span>
                </div>
                <span className="text-text-grey">({location.reviews} ביקורות)</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-4">תיאור המתחם</h2>
              <div className="text-text-grey leading-relaxed space-y-4 whitespace-pre-line">
                {location.description}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-6">מה המקום מציע</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {location.amenities.map((amenity: any, idx: number) => {
                  const Icon = amenity.icon
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      {Icon ? (
                        <Icon size={20} className="text-accent-pink" />
                      ) : (
                        <Check size={20} className="text-accent-cyan" />
                      )}
                      <span className="text-text-dark">{amenity.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-br from-accent-pink/10 to-accent-cyan/10 border border-accent-pink/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-6">למה כדאי לבחור פה</h2>
              <div className="space-y-3">
                {location.highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-text-dark">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-6">כללי הבית</h2>
              <div className="space-y-3">
                {location.rules.map((rule: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-accent-cyan font-bold">•</span>
                    <span className="text-text-grey">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <p className="text-sm text-text-grey mb-2">מחיר ללילה</p>
                  <p className="text-4xl font-bold text-text-dark">{location.priceRange}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <a
                    href={`https://wa.me/972523983394?text=היי%20ערדית,%20אני%20מעוניין%20במתחם%20${encodeURIComponent(location.name)}`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    <MessageCircle size={20} />
                    <span>שלח הודעה ב-WhatsApp</span>
                  </a>

                  <a
                    href="tel:+972523983394"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent-pink text-white rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    <Phone size={20} />
                    <span>התקשר עכשיו</span>
                  </a>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-text-grey text-center leading-relaxed">
                    ✅ תגובה תוך 2 שעות<br/>
                    ✅ ללא עמלה ללקוח<br/>
                    ✅ שירות אישי של ערדית
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
          >
            <X size={24} className="text-white" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          <div className="relative w-full max-w-6xl aspect-video">
            <Image
              src={location.images[currentImageIndex]}
              alt={`${location.name} - תמונה ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {location.images.length}
          </div>
        </div>
      )}
    </div>
  )
}
