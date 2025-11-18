'use client'

import { useState, useEffect } from 'react'
import { Accessibility, Plus, Minus, Contrast, RotateCcw, X } from 'lucide-react'

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  useEffect(() => {
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [highContrast])

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(150, prev + 10))
  }

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(80, prev - 10))
  }

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev)
  }

  const resetSettings = () => {
    setFontSize(100)
    setHighContrast(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-accent-cyan rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        aria-label="נגישות"
        title="הגדרות נגישות"
      >
        <Accessibility size={28} className="text-white" />
        <div className="absolute inset-0 rounded-full bg-accent-cyan opacity-50 animate-ping" />
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center">
                <Accessibility size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-text-dark">הגדרות נגישות</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="סגור"
            >
              <X size={20} className="text-text-dark" />
            </button>
          </div>

          {/* Controls */}
          <div className="p-6 space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">
                גודל טקסט ({fontSize}%)
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-accent-cyan/10 to-accent-cyan/20 border border-accent-cyan/30 rounded-lg hover:bg-accent-cyan/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="הקטן טקסט"
                >
                  <Minus size={18} />
                  <span className="font-medium text-text-dark">הקטן</span>
                </button>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-accent-cyan/10 to-accent-cyan/20 border border-accent-cyan/30 rounded-lg hover:bg-accent-cyan/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="הגדל טקסט"
                >
                  <Plus size={18} />
                  <span className="font-medium text-text-dark">הגדל</span>
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <div>
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  highContrast
                    ? 'bg-accent-pink text-white'
                    : 'bg-gradient-to-r from-purple-500/10 to-purple-500/20 border border-purple-500/30 text-text-dark hover:bg-purple-500/30'
                }`}
                aria-label={highContrast ? 'בטל ניגודיות גבוהה' : 'הפעל ניגודיות גבוהה'}
              >
                <Contrast size={18} />
                <span className="font-medium">
                  {highContrast ? 'בטל ניגודיות גבוהה' : 'ניגודיות גבוהה'}
                </span>
              </button>
            </div>

            {/* Reset */}
            <div>
              <button
                onClick={resetSettings}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300 transition-all text-text-dark"
                aria-label="אפס הגדרות"
              >
                <RotateCcw size={18} />
                <span className="font-medium">אפס הגדרות</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50/50">
            <p className="text-xs text-center text-text-grey">
              תואם לתקן ת״י 5568 ו-WCAG 2.1 AA
            </p>
          </div>
        </div>
      )}

      {/* Global styles for high contrast */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(1.5);
        }
        
        .high-contrast * {
          background-color: inherit !important;
          border-color: currentColor !important;
        }
        
        .high-contrast a {
          text-decoration: underline !important;
        }
      `}</style>
    </>
  )
}
