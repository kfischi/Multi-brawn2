'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Clock, TrendingUp, Heart, BookmarkPlus, Filter, Search } from 'lucide-react'

// Mock data - תחליפי עם הסרטונים האמיtiים שלך
const tipsVideos = [
  {
    id: 1,
    title: 'איך לבחור מתחם לשבת חתן מושלם',
    description: 'הטיפים החשובים שחייבים לדעת לפני שמזמינים מתחם לשבת חתן',
    category: 'שבתות חתן',
    duration: '2:30',
    views: '12.5K',
    thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1762003191/1_tsc6xx.jpg',
    videoUrl: 'https://youtube.com/watch?v=...',
    isNew: true,
    isTrending: true,
  },
  {
    id: 2,
    title: '5 שאלות שחובה לשאול את בעל המתחם',
    description: 'השאלות שיחסכו לכם הרבה כאב ראש ואכזבות',
    category: 'טיפים כלליים',
    duration: '3:15',
    views: '8.2K',
    thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg',
    videoUrl: 'https://youtube.com/watch?v=...',
    isNew: true,
  },
  {
    id: 3,
    title: 'הצימרים הכי רומנטיים בצפון',
    description: 'סיור במתחמים הכי מיוחדים לבריחה זוגית',
    category: 'צימרים',
    duration: '4:20',
    views: '15.3K',
    thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818996/Zimmer2_ge7g6h.jpg',
    videoUrl: 'https://youtube.com/watch?v=...',
    isTrending: true,
  },
  {
    id: 4,
    title: 'כך תזהו מתחם מזויף בתמונות',
    description: 'הסימנים האדומים שכל אחד צריך לדעת',
    category: 'טיפים כלליים',
    duration: '2:45',
    views: '20.1K',
    thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/20_t6yw8m.jpg',
    videoUrl: 'https://youtube.com/watch?v=...',
    isNew: true,
    isTrending: true,
  },
  {
    id: 5,
    title: 'וילות עם בריכה פרטית - המלצות שלי',
    description: 'הוילות הכי שוות עם בריכה מחוממת',
    category: 'וילות',
    duration: '3:50',
    views: '9.7K',
    thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Apartment1_mrxdad.jpg',
    videoUrl: 'https://youtube.com/watch?v=...',
  },
  {
    id: 6,
    title: 'מלונות בוטיק שכדאי להכיר',
    description: 'המלונות הכי מיוחדים בארץ',
    category: 'מלונות',
    duration: '5:10',
    views: '6.4K',
    thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Hotel1_ihkey7.jpg',
    videoUrl: 'https://youtube.com/watch?v=...',
  },
  {
    id: 7,
    title: 'כיצד לחסוך 30% בהזמנת מתחם',
    description: 'הטריקים שבעלי המתחמים לא רוצים שתדעו',
    category: 'טיפים כלליים',
    duration: '3:30',
    views: '18.2K',
    thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1762003191/1_tsc6xx.jpg',
    videoUrl: 'https://youtube.com/watch?v=...',
    isTrending: true,
  },
  {
    id: 8,
    title: 'מתחמים לאירועים - המדריך המלא',
    description: 'כל מה שצריך לדעת על בחירת מקום לאירוע',
    category: 'אירועים',
    duration: '6:00',
    views: '11.5K',
    thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg',
    videoUrl: 'https://youtube.com/watch?v=...',
    isNew: true,
  },
]

const categories = [
  { id: 'all', name: 'הכל', icon: '🎬' },
  { id: 'שבתות חתן', name: 'שבתות חתן', icon: '✡️' },
  { id: 'צימרים', name: 'צימרים', icon: '🏡' },
  { id: 'וילות', name: 'וילות', icon: '🏰' },
  { id: 'מלונות', name: 'מלונות', icon: '🏨' },
  { id: 'אירועים', name: 'אירועים', icon: '🎉' },
  { id: 'טיפים כלליים', name: 'טיפים כלליים', icon: '💡' },
]

export default function TipsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [savedVideos, setSavedVideos] = useState<number[]>([])

  const filteredVideos = tipsVideos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleSave = (id: number) => {
    setSavedVideos(prev => 
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent-pink/10 via-accent-cyan/10 to-purple-500/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1762012646/Ardit_znq9aj.jpg"
                alt="ערדית בראון"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-text-dark mb-4">
              הטיפים של ערדית 🎬
            </h1>
            <p className="text-xl text-text-grey mb-8 leading-relaxed">
              סרטונים קצרים עם כל הסודות והטיפים למציאת המתחם המושלם
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-text-grey" size={20} />
              <input
                type="text"
                placeholder="חפשו טיפ מסוים..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark placeholder-text-grey"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-accent-pink to-accent-cyan text-white shadow-lg scale-105'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-text-dark hover:bg-white/20'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section-padding">
        <div className="container">
          {/* Stats */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-text-grey">
              נמצאו <strong className="text-text-dark">{filteredVideos.length}</strong> טיפים
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-grey">מיין לפי:</span>
              <select className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-text-dark cursor-pointer">
                <option>הכי פופולרי</option>
                <option>חדש ביותר</option>
                <option>הכי ארוך</option>
                <option>הכי קצר</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Play size={28} className="text-accent-pink mr-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1">
                    <Clock size={12} />
                    <span>{video.duration}</span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {video.isNew && (
                      <span className="px-3 py-1 bg-accent-pink rounded-full text-white text-xs font-bold">
                        חדש
                      </span>
                    )}
                    {video.isTrending && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={12} />
                        טרנד
                      </span>
                    )}
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSave(video.id)
                    }}
                    className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      savedVideos.includes(video.id)
                        ? 'bg-accent-pink text-white'
                        : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/40'
                    }`}
                  >
                    {savedVideos.includes(video.id) ? (
                      <Heart size={18} fill="currentColor" />
                    ) : (
                      <BookmarkPlus size={18} />
                    )}
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Category Tag */}
                  <span className="inline-block px-3 py-1 mb-3 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-xs font-semibold text-accent-cyan">
                    {video.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text-dark mb-2 line-clamp-2 group-hover:text-accent-pink transition-colors">
                    {video.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-grey mb-3 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-text-grey">
                    <div className="flex items-center gap-1">
                      <Play size={14} className="text-accent-pink" />
                      <span>{video.views} צפיות</span>
                    </div>
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {filteredVideos.length >= 8 && (
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-accent-pink to-accent-cyan text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                טען עוד טיפים
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-pink/10 via-accent-cyan/10 to-purple-500/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-playfair font-bold text-text-dark mb-6">
              רוצים שערדית תמצא לכם את המתחם המושלם?
            </h2>
            <p className="text-xl text-text-grey mb-8 leading-relaxed">
              שירות אישי, מהיר, ובחינם. נחזור אליכם תוך 24 שעות עם המתחמים הכי מתאימים.
            </p>
            <a
              href="https://wa.me/972523983394?text=היי%20ערדית,%20ראיתי%20את%20הטיפים%20שלך%20ואני%20רוצה%20למצוא%20מתחם"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <span>💬</span>
              שלחו הודעה ב-WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Style for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
