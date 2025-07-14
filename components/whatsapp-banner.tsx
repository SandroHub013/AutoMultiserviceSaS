"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

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
      {/* Banner Desktop - Piccolo in basso a destra */}
      <div className="fixed bottom-4 right-4 z-50 hidden md:block">
        <div className="bg-[#25D366] text-white p-3 rounded-lg shadow-lg max-w-xs animate-bounce">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span className="font-semibold text-sm">Valutazione Gratuita!</span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-[#20BA5A] p-0.5 h-6 w-6"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          <p className="text-xs mb-2">Invia foto su WhatsApp per valutazione immediata!</p>
          <Button
            size="sm"
            className="w-full bg-white text-[#25D366] hover:bg-gray-100 text-xs py-1.5"
            onClick={() => {
              window.open("https://wa.me/393387487512?text=Ciao! Vorrei una valutazione per il mio veicolo", "_blank")
              setIsVisible(false)
            }}
          >
            <MessageCircle className="h-3 w-3 mr-1" />
            Invia Foto
          </Button>
        </div>
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

      {/* Banner Bottom Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <div className="bg-[#25D366] text-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <div>
                <div className="font-semibold text-sm">Valutazione Gratuita</div>
                <div className="text-xs">Invia foto su WhatsApp</div>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-white text-[#25D366] hover:bg-gray-100 text-xs px-3"
              onClick={() => {
                window.open("https://wa.me/393387487512?text=Vorrei una valutazione per il mio veicolo", "_blank")
                setIsVisible(false)
              }}
            >
              Invia
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
