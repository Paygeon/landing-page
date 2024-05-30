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
import Section from '@/components/Section'
import Graph from '@/components/animations/graph/Graph'
import { LampDemo } from '@/components/lamp/lamp'
import WidgetBot from '@widgetbot/react-embed'


export default function Home() {
  return (
    <>
     
      <Hero />
      <HeroScrollDemo description={'https://loan.aestheticscard.com'} />
      <Features />
      <FeaturesBlocks />
      <Section
          component={Graph}
          title="Increase Revenues"
          description="The only open source project with rev-share built in:"
          listItems={["Interchange", "Recurring", "Origination Fees"]}
      />
      <LampDemo description={'Integrations <br /> built in'} />
      <Testimonials />
      <Newsletter />
  
    </>
  )
}
