"use client"

import { useState, useEffect, useRef } from "react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    // Tenta di riprodurre con audio. Potrebbe essere bloccato dal browser.
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay with sound was blocked by the browser.", error)
        // Se bloccato, l'utente potrebbe dover interagire per sentire l'audio
        // o il video potrebbe non partire. Lasciamo che il browser gestisca.
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
        autoPlay
        className="w-full h-full object-cover"
      />
    </div>
  )
} 