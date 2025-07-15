"use client"

import { useState, useEffect, useRef } from "react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 6000)

    // Gestione autoplay con audio
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Se l'autoplay con audio fallisce, muta il video e riprova
        console.warn("Autoplay with sound failed, falling back to muted autoplay.", error)
        if (videoRef.current) {
          videoRef.current.muted = true
          videoRef.current.play()
        }
      })
    }

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-fadeOut">
      <video
        ref={videoRef}
        src="/mazda.mp4"
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  )
} 