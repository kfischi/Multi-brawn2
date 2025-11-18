'use client'

import HeroVideo from './components/HeroVideo'
import HowItWorks from './components/HowItWorks'
import FeaturedLocations from './components/FeaturedLocations'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

export default function Home() {
  return (
    <>
      <HeroVideo />
      <HowItWorks />
      <FeaturedLocations />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  )
}
