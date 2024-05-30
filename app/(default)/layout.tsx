'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import WidgetBot from '@widgetbot/react-embed'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <main className="grow">

        {children}
      <WidgetBot 
       server="1243020756292730953" // Carat Card Club 
       channel="1243020756728680581" // #general
      />

      </main>

      <Footer />
    </>
  )
}
