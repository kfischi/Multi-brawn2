'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, Users, Filter, SlidersHorizontal, X } from 'lucide-react'

// Mock data - תחליפי עם המתחמים האמיתיים שלך
const allLocations = [
  {
    id: 1,
    name: 'וילת פאר בגליל',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg',
    region: 'galil',
    regionName: 'גליל עליון',
    type: 'villa',
    typeName: 'וילה',
    capacity: 25,
    priceRange: '4000-7000',
    features: ['בריכה מחוממת', 'ג\'קוזי', 'נוף מדהים', 'גינה גדולה'],
    badge: 'מומלץ',
    verified: true,
  },
  {
    id: 2,
    name: 'צימר רומנטי עם נוף לכנרת',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818996/Zimmer2_ge7g6h.jpg',
    region: 'kinneret',
    regionName: 'כנרת וסביבתה',
    type: 'zimmer',
    typeName: 'צימר',
    capacity: 2,
    priceRange: '800-1200',
    features: ['ג\'קוזי פרטי', 'נוף לכנרת', 'רומנטי'],
    badge: 'פופולרי',
    verified: true,
  },
  {
    id: 3,
    name: 'מלון בוטיק בירושלים',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Hotel1_ihkey7.jpg',
    region: 'jerusalem',
    regionName: 'ירושלים',
    type: 'hotel',
    typeName: 'מלון בוטיק',
    capacity: 40,
    priceRange: '2000-4000',
    features: ['כשרות מהדרין', 'קרוב לכותל', 'ארוחת בוקר'],
    badge: 'חדש',
    verified: true,
  },
  {
    id: 4,
    name: 'פנטהאוז יוקרתי בתל אביב',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Apartment1_mrxdad.jpg',
    region: 'center',
    regionName: 'מרכז הארץ',
    type: 'apartment',
    typeName: 'דירת נופש',
    capacity: 8,
    priceRange: '2000-4000',
    features: ['מרפסת ענקית', 'נוף לים', 'מודרני'],
    verified: true,
  },
  {
    id: 5,
    name: 'פנטהאוז מפואר בנתניה',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/20_t6yw8m.jpg',
    region: 'center',
    regionName: 'מרכז הארץ',
    type: 'apartment',
    typeName: 'דירת נופש',
    capacity: 10,
    priceRange: '4000-7000',
    features: ['בריכה פרטית', 'נוף פנורמי', 'יוקרתי'],
    badge: 'מומלץ',
    verified: true,
  },
  {
    id: 6,
    name: 'מתחם אירועים בגוש עציון',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1762003191/1_tsc6xx.jpg',
    region: 'gush-etzion',
    regionName: 'גוש עציון',
    type: 'event',
    typeName: 'מתחם אירועים',
    capacity: 200,
    priceRange: '7000+',
    features: ['שבתות חתן', 'כשרות', 'חצר גדולה'],
    verified: true,
  },
]

// Filters configuration
const regions = [
  { id: 'all', name: 'כל האזורים' },
  { id: 'galil', name: 'גליל עליון' },
  { id: 'kinneret', name: 'כנרת וסביבתה' },
  { id: 'jerusalem', name: 'ירושלים והסביבה' },
  { id: 'gush-etzion', name: 'גוש עציון' },
  { id: 'center', name: 'מרכז הארץ' },
  { id: 'south', name: 'דרום' },
]

const types = [
  { id: 'all', name: 'כל הסוגים' },
  { id: 'villa', name: 'וילות פרטיות' },
  { id: 'zimmer', name: 'צימרים רומנטיים' },
  { id: 'apartment', name: 'דירות נופש' },
  { id: 'event', name: 'מתחמי אירועים' },
  { id: 'hotel', name: 'מלונות בוטיק' },
]

const capacities = [
  { id: 'all', name: 'כל הגדלים' },
  { id: '2-4', name: '2-4 אנשים' },
  { id: '5-10', name: '5-10 אנשים' },
  { id: '10-20', name: '10-20 אנשים' },
  { id: '20-50', name: '20-50 אנשים' },
  { id: '50+', name: '50+ אנשים' },
]

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedCapacity, setSelectedCapacity] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  // Filter logic
  const filteredLocations = allLocations.filter(location => {
    // Search query
    if (searchQuery && !location.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Region filter
    if (selectedRegion !== 'all' && location.region !== selectedRegion) {
      return false
    }

    // Type filter
    if (selectedType !== 'all' && location.type !== selectedType) {
      return false
    }

    // Capacity filter
    if (selectedCapacity !== 'all') {
      const [min, max] = selectedCapacity.split('-').map(s => s.replace('+', ''))
      const minNum = parseInt(min)
      const maxNum = max ? parseInt(max) : Infinity
      
      if (location.capacity < minNum || location.capacity > maxNum) {
        return false
      }
    }

    return true
  })

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-4">
            כל המתחמים שלנו
          </h1>
          <p className="text-xl text-text-grey mb-2">
            מעל 50 מתחמים מאומתים ונבדקים אישית
          </p>
          <p className="text-text-grey">
            {filteredLocations.length} מתחמים מתאימים לחיפוש שלך
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-text-grey" size={20} />
            <input
              type="text"
              placeholder="חפשו לפי שם מתחם, אזור, תכונות..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark placeholder-text-grey"
            />
          </div>
        </div>

        {/* Filters Toggle (Mobile) */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-text-dark font-medium"
          >
            <SlidersHorizontal size={20} />
            {showFilters ? 'הסתר סינונים' : 'הצג סינונים'}
          </button>
        </div>

        {/* Main Content: Filters + Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-6">
              {/* Region Filter */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-accent-pink" />
                  אזור
                </h3>
                <div className="space-y-2">
                  {regions.map(region => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`w-full text-right px-4 py-2 rounded-lg transition-all duration-200 ${
                        selectedRegion === region.id
                          ? 'bg-accent-pink text-white font-semibold'
                          : 'bg-white/5 text-text-grey hover:bg-white/10'
                      }`}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <Filter size={20} className="text-accent-cyan" />
                  סוג מתחם
                </h3>
                <div className="space-y-2">
                  {types.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-right px-4 py-2 rounded-lg transition-all duration-200 ${
                        selectedType === type.id
                          ? 'bg-accent-cyan text-white font-semibold'
                          : 'bg-white/5 text-text-grey hover:bg-white/10'
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Capacity Filter */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <Users size={20} className="text-purple-500" />
                  גודל קבוצה
                </h3>
                <div className="space-y-2">
                  {capacities.map(capacity => (
                    <button
                      key={capacity.id}
                      onClick={() => setSelectedCapacity(capacity.id)}
                      className={`w-full text-right px-4 py-2 rounded-lg transition-all duration-200 ${
                        selectedCapacity === capacity.id
                          ? 'bg-purple-500 text-white font-semibold'
                          : 'bg-white/5 text-text-grey hover:bg-white/10'
                      }`}
                    >
                      {capacity.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedRegion !== 'all' || selectedType !== 'all' || selectedCapacity !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedRegion('all')
                    setSelectedType('all')
                    setSelectedCapacity('all')
                    setSearchQuery('')
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-text-dark font-medium hover:bg-white/20 transition-all"
                >
                  <X size={20} />
                  נקה סינונים
                </button>
              )}
            </div>
          </aside>

          {/* Locations Grid */}
          <div className="flex-1">
            {filteredLocations.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-text-grey mb-6">לא נמצאו מתחמים התואמים את החיפוש</p>
                <button
                  onClick={() => {
                    setSelectedRegion('all')
                    setSelectedType('all')
                    setSelectedCapacity('all')
                    setSearchQuery('')
                  }}
                  className="px-8 py-3 bg-accent-pink text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  נקה סינונים
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredLocations.map(location => (
                  <Link
                    key={location.id}
                    href={`/locations/${location.id}`}
                    className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:border-accent-pink/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                      {location.verified && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/90 backdrop-blur-md rounded-full text-xs font-semibold text-white flex items-center gap-1">
                          <span>✓</span>
                          <span>מאומת</span>
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
                          <span>{location.regionName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={16} className="text-accent-cyan" />
                          <span>עד {location.capacity} איש</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {location.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-text-grey"
                          >
                            {feature}
                          </span>
                        ))}
                        {location.features.length > 3 && (
                          <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-text-grey">
                            +{location.features.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-accent-pink/10 via-accent-cyan/10 to-purple-500/10 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-text-dark mb-4">
            לא מצאתם מה שחיפשתם?
          </h2>
          <p className="text-lg text-text-grey mb-8">
            ספרו לערדית מה אתם מחפשים והיא תמצא לכם את המקום המושלם
          </p>
          <a
            href="https://wa.me/972501234567?text=היי%20ערדית,%20אני%20מחפש%20מתחם%20ספציפי"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <span>💬</span>
            שלחו הודעה לערדית
          </a>
        </div>
      </div>
    </div>
  )
}
