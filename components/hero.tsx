'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const images = [
  'https://manage.braywoodcc.com/storage/mediaimages/May2024/DhIi4kPb4Yq5RSXKiWlZ.jpg',
  'https://images.immediate.co.uk/production/volatile/sites/3/2023/02/Best-cricket-players-2024-283d079.jpg',
  'https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/2516/live/45988f20-cc0a-11ef-9fd6-0be88a764111.jpg',
]

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-white w-full h-auto pt-4 pb-4 pl-4 rounded-lg shadow-lg">
      {/* Left: Slideshow */}
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Right: Text + Button */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-4 py-6 lg:py-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Welcome to Braywood Cricket Club
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl">
          Established in 1920, our club thrives in Fifield, Berkshire. We field two teams in the Chiltern Cricket League, fostering camaraderie and lifelong memories.
        </p>

        <Link href="/about" className="mt-8">
          <button className="px-8 py-3 bg-red-900 hover:bg-red-700 text-white rounded-full text-base font-medium transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Learn More About Us
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
