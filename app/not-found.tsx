import Link from 'next/link'
import { Home, Search, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[180px] md:text-[240px] font-bold leading-none bg-gradient-to-br from-accent-pink via-accent-cyan to-purple-500 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-text-dark mb-4">
          אופס! הדף לא נמצא
        </h2>
        <p className="text-xl text-text-grey mb-12 leading-relaxed">
          נראה שהמתחם שחיפשתם עבר למקום אחר, או שהכתובת שגויה.
          <br />
          אבל אל דאגה - יש לנו עוד המון מתחמים מדהימים!
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-pink to-accent-cyan text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <Home size={20} />
            <span>חזרה לדף הבית</span>
          </Link>

          <Link
            href="/locations"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-text-dark rounded-lg font-semibold hover:bg-white/20 transition-all"
          >
            <Search size={20} />
            <span>כל המתחמים</span>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-sm text-text-grey mb-4">דפים פופולריים:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/about" className="text-text-dark hover:text-accent-pink transition-colors flex items-center gap-1">
              <ArrowRight size={16} />
              <span>אודות</span>
            </Link>
            <Link href="/tips" className="text-text-dark hover:text-accent-pink transition-colors flex items-center gap-1">
              <ArrowRight size={16} />
              <span>טיפים של ערדית</span>
            </Link>
            <Link href="/for-owners" className="text-text-dark hover:text-accent-pink transition-colors flex items-center gap-1">
              <ArrowRight size={16} />
              <span>לבעלי מתחמים</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
