"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Mostra dopo 3 secondi

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Pulsante Desktop - Piccolo in basso a destra */}
      <div className="fixed bottom-4 right-4 z-50 hidden md:block">
        <Button
          size="lg"
          className="bg-[#25D366] hover:bg-[#20BA5A] rounded-full w-16 h-16 shadow-lg animate-pulse"
          onClick={() =>
            window.open("https://wa.me/393387487512?text=Ciao! Vorrei informazioni sui vostri servizi", "_blank")
          }
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>

      {/* Pulsante Mobile Fisso */}
      <div className="fixed bottom-20 right-4 z-50 md:hidden">
        <Button
          size="lg"
          className="bg-[#25D366] hover:bg-[#20BA5A] rounded-full w-16 h-16 shadow-lg animate-pulse"
          onClick={() =>
            window.open("https://wa.me/393387487512?text=Ciao! Vorrei informazioni sui vostri servizi", "_blank")
          }
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </>
  )
}
