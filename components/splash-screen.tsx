"use client"

import { useState, useEffect } from "react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 6000) // Il video dura 6 secondi

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-fadeOut">
      <video
        src="/mazda.mp4"
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  )
} 