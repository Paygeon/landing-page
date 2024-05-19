export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { HeroScrollDemo } from '@/components/container-scroll-animation/HeroScroll'
import Ready from '@/components/animations/are-you-ready-lottie/are-you-ready-lottie'
import StoryIframe from '@/components/animations/iframe/StoryIframe'


export default function Home() {
  return (
    <>
     
      <Hero />
      <HeroScrollDemo />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
  
    </>
  )
}
