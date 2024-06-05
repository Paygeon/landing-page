import VideoThumb from '@/public/images/hero-image.png'
import DiscordButton from './discord-button/DiscordButton'
import GithubButton from './github-button/github-button'
import InstallInstructions from './ui/InstallInstructions'
import * as React from 'react'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Embed Financial Services With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Out The Bullshit!</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Add financial services easily, quickly, and for free using the most robust tech offered by Paygeon.</p>
              <InstallInstructions />
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <DiscordButton url="https://discord.gg/Pnurz9mTas" />
                </div>
                <div>
                  <GithubButton url="https://github.com/VashonG/Cred.Sucks" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}

        </div>

      </div>
    </section>
  )
}