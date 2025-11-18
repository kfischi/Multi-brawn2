'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Users } from 'lucide-react'

const locations = [
  {
    id: 1,
    name: 'וילת פאר בגליל',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg',
    region: 'גליל עליון',
    capacity: 'עד 25 איש',
    features: ['בריכה מחוממת', 'ג\'קוזי', 'נוף מדהים'],
    badge: 'מומלץ',
  },
  {
    id: 2,
    name: 'צימר רומנטי עם נוף לכנרת',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818996/Zimmer2_ge7g6h.jpg',
    region: 'רמות הגליל',
    capacity: '2 אנשים',
    features: ['ג\'קוזי פרטי', 'נוף לכנרת'],
    badge: 'פופולרי',
  },
  {
    id: 3,
    name: 'מלון בוטיק בירושלים',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Hotel1_ihkey7.jpg',
    region: 'ירושלים',
    capacity: '10-40 אנשים',
    features: ['כשרות מהדרין', 'קרוב לכותל'],
    badge: 'חדש',
  },
  {
    id: 4,
    name: 'פנטהאוז יוקרתי בתל אביב',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Apartment1_mrxdad.jpg',
    region: 'תל אביב',
    capacity: 'עד 8 אנשים',
    features: ['מרפסת ענקית', 'נוף לים'],
  },
  {
    id: 5,
    name: 'פנטהאוז מפואר בנתניה',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/20_t6yw8m.jpg',
    region: 'נתניה',
    capacity: 'עד 10 אנשים',
    features: ['בריכה פרטית', 'נוף פנורמי'],
    badge: 'מומלץ',
  },
  {
    id: 6,
    name: 'מתחם אירועים בגוש עציון',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1762003191/1_tsc6xx.jpg',
    region: 'גוש עציון',
    capacity: 'עד 200 איש',
    features: ['שבתות חתן', 'כשרות'],
  },
]

export default function FeaturedLocations() {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>המתחמים המובילים שלנו</h2>
          <p>כל מקום נבחר בקפידה ונבדק אישית על ידי ערדית</p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/locations/${location.id}`}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:border-accent-pink/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {location.badge && (
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-md ${
                    location.badge === 'מומלץ' ? 'bg-accent-pink/90' :
                    location.badge === 'פופולרי' ? 'bg-accent-cyan/90' :
                    'bg-purple-500/90'
                  }`}>
                    {location.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-accent-pink transition-colors">
                  {location.name}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-text-grey">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-accent-pink" />
                    <span>{location.region}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-accent-cyan" />
                    <span>{location.capacity}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-text-grey"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-lg text-text-dark border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 hover:border-accent-pink/50 transition-all duration-300"
          >
            צפו בכל המתחמים (50+)
          </Link>
        </div>
      </div>
    </section>
  )
}
