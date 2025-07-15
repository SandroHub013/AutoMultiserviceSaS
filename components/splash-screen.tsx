"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000) // Durata riportata a 4 secondi

    // L'autoplay funziona in modo affidabile solo se mutato
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay failed, user interaction might be required.", error)
      })
    }

    return () => clearTimeout(timer)
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-fadeOut">
      <video
        ref={videoRef}
        src="/mazda.mp4"
        playsInline
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
      <button 
        onClick={toggleMute} 
        className="absolute bottom-8 right-8 z-50 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
        aria-label="Toggle audio"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  )
} 