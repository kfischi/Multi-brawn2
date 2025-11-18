import type { Metadata } from 'next'
import './globals.css'
import { Heebo, Playfair_Display } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import AccessibilityWidget from './components/AccessibilityWidget'

const heebo = Heebo({ 
  subsets: ['latin', 'hebrew'],
  variable: '--font-heebo',
  weight: ['300', '400', '500', '600', '700', '800']
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '800', '900']
})

export const metadata: Metadata = {
  title: 'מולטיבראון - לוקיישנים שווים במינימום מאמץ | 50+ מתחמים מאומתים',
  description: 'מעל 50 מתחמי נופש ואירועים מאומתים בכל הארץ. שירות אישי, חיפוש חכם, אמינות 100%. ערדית בראון ומולטיבראון - השותפים שלכם למציאת המקום המושלם.',
  keywords: 'מתחמי נופש, וילות, צימרים, אירועים, שבתות חתן, חופשות משפחה, ערדית בראון',
  authors: [{ name: 'MultibrAWN' }],
  openGraph: {
    title: 'מולטיבראון - לוקיישנים שווים במינימום מאמץ',
    description: 'מעל 50 מתחמים מאומתים בכל הארץ. שירות אישי ואמינות 100%',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        <AccessibilityWidget />
      </body>
    </html>
  )
}
