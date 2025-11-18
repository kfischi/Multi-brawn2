'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-xl shadow-lg' 
          : 'bg-white/10 backdrop-blur-lg'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image 
              src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1762012646/Logo_multi_tzkqxl.png" 
              alt="MultibrAWN" 
              width={50} 
              height={50}
              className="w-12 h-12"
            />
            <span className="text-2xl font-playfair font-bold text-text-dark">
              MULTIBRAWN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text-dark hover:opacity-60 transition-opacity font-medium">
              דף הבית
            </Link>
            <Link href="/locations" className="text-text-dark hover:opacity-60 transition-opacity font-medium">
              המתחמים שלנו
            </Link>
            <Link href="/tips" className="text-text-dark hover:opacity-60 transition-opacity font-medium flex items-center gap-1">
              <span>🎬</span>
              <span>טיפים של ערדית</span>
            </Link>
            <Link href="/about" className="text-text-dark hover:opacity-60 transition-opacity font-medium">
              אודות ערדית
            </Link>
            <Link href="/for-owners" className="text-text-dark hover:opacity-60 transition-opacity font-medium">
              לבעלי מתחמים
            </Link>
            <Link href="/blog" className="text-text-dark hover:opacity-60 transition-opacity font-medium">
              המדריך שלנו
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-accent-pink text-white rounded-lg font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{ boxShadow: '0 4px 15px rgba(255, 94, 161, 0.4)' }}
            >
              בואו נדבר
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-dark hover:opacity-60 transition-opacity"
            aria-label="תפריט"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-white/20">
            <div className="flex flex-col p-4 gap-4">
              <Link 
                href="/" 
                className="text-text-dark hover:text-accent-pink transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                דף הבית
              </Link>
              <Link 
                href="/locations" 
                className="text-text-dark hover:text-accent-pink transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                המתחמים שלנו
              </Link>
              <Link 
                href="/about" 
                className="text-text-dark hover:text-accent-pink transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                אודות ערדית
              </Link>
              <Link 
                href="/for-owners" 
                className="text-text-dark hover:text-accent-pink transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                לבעלי מתחמים
              </Link>
              <Link 
                href="/blog" 
                className="text-text-dark hover:text-accent-pink transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                המדריך שלנו
              </Link>
              <Link 
                href="#contact" 
                className="mt-2 px-6 py-3 bg-accent-pink text-white rounded-lg font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                בואו נדבר
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
