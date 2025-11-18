'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-lg border-t border-white/20">
      <div className="container py-16">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1762012646/Logo_multi_tzkqxl.png"
                alt="MultibrAWN"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <span className="text-xl font-playfair font-bold text-text-dark">
                MULTIBRAWN
              </span>
            </Link>
            <p className="text-text-grey mb-6 leading-relaxed">
              מעל 50 מתחמים מאומתים בכל הארץ. שירות אישי, חיפוש חכם, אמינות 100%.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center hover:bg-accent-pink hover:border-accent-pink transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-text-grey group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center hover:bg-accent-pink hover:border-accent-pink transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-text-grey group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center hover:bg-accent-pink hover:border-accent-pink transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube size={20} className="text-text-grey group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-text-dark mb-6">קישורים מהירים</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-text-grey hover:text-accent-pink transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-text-grey hover:text-accent-pink transition-colors">
                  כל המתחמים
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-grey hover:text-accent-pink transition-colors">
                  אודות ערדית
                </Link>
              </li>
              <li>
                <Link href="/for-owners" className="text-text-grey hover:text-accent-pink transition-colors">
                  לבעלי מתחמים
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-grey hover:text-accent-pink transition-colors">
                  המדריך שלנו
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Types */}
          <div>
            <h4 className="text-lg font-bold text-text-dark mb-6">סוגי מתחמים</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/locations?type=villa" className="text-text-grey hover:text-accent-pink transition-colors">
                  וילות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/locations?type=zimmer" className="text-text-grey hover:text-accent-pink transition-colors">
                  צימרים רומנטיים
                </Link>
              </li>
              <li>
                <Link href="/locations?type=apartment" className="text-text-grey hover:text-accent-pink transition-colors">
                  דירות נופש
                </Link>
              </li>
              <li>
                <Link href="/locations?type=event" className="text-text-grey hover:text-accent-pink transition-colors">
                  מתחמי אירועים
                </Link>
              </li>
              <li>
                <Link href="/locations?type=hotel" className="text-text-grey hover:text-accent-pink transition-colors">
                  מלונות בוטיק
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-text-dark mb-6">צרו קשר</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+972501234567"
                  className="flex items-center gap-3 text-text-grey hover:text-accent-pink transition-colors"
                >
                  <Phone size={18} />
                  <span>050-123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@multibrawn.com"
                  className="flex items-center gap-3 text-text-grey hover:text-accent-pink transition-colors"
                >
                  <Mail size={18} />
                  <span>info@multibrawn.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-grey">
            <Link href="/privacy" className="hover:text-accent-pink transition-colors">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="hover:text-accent-pink transition-colors">
              תנאי שימוש
            </Link>
            <Link href="/accessibility" className="hover:text-accent-pink transition-colors">
              הצהרת נגישות
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-grey">
            © {new Date().getFullYear()} MULTIBRAWN. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
