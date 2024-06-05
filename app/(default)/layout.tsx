'use client'

import { useEffect } from 'react'

import * as AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '../../components/ui/footer'
import * as React from 'react'

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
      <main>

        {children}

      </main>

      <Footer />
    </>
  )
}
