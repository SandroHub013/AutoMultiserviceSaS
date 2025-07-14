"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send, MessageCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crea messaggio WhatsApp
    const message = `📧 MESSAGGIO DAL SITO WEB

👤 CONTATTO:
• Nome: ${formData.name}
• Email: ${formData.email}
• Telefono: ${formData.phone}

📋 OGGETTO: ${formData.subject}

💬 MESSAGGIO:
${formData.message}

Grazie per averci contattato!`

    const whatsappUrl = `https://wa.me/393387487512?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    alert("Messaggio inviato su WhatsApp! Ti risponderemo al più presto.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-[#1B365D]">Invia un Messaggio</CardTitle>
        <CardDescription>Compila il form e ti risponderemo entro 24 ore</CardDescription>
        <div className="flex justify-center mt-4">
          <Button
            size="sm"
            className="bg-[#25D366] hover:bg-[#20BA5A]"
            onClick={() => window.open("https://wa.me/393387487512", "_blank")}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contatto Diretto WhatsApp
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome e Cognome *</Label>
            <Input
              id="name"
              placeholder="Il tuo nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="tua@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Telefono/WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+39 338 748 7512"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="subject">Oggetto *</Label>
            <Select onValueChange={(value) => handleInputChange("subject", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona oggetto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="valutazione">Richiesta Valutazione Veicolo</SelectItem>
                <SelectItem value="ricambi">Ricerca Ricambi</SelectItem>
                <SelectItem value="permuta">Permuta Veicolo</SelectItem>
                <SelectItem value="demolizione">Demolizione Gratuita</SelectItem>
                <SelectItem value="leasing">Riscatto Leasing</SelectItem>
                <SelectItem value="info">Informazioni Generali</SelectItem>
                <SelectItem value="altro">Altro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Messaggio *</Label>
            <Textarea
              id="message"
              placeholder="Scrivi qui il tuo messaggio dettagliato..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={5}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button type="submit" className="bg-[#25D366] hover:bg-[#20BA5A] text-white flex-1">
              <MessageCircle className="mr-2 h-4 w-4" />
              Invia su WhatsApp
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white bg-transparent"
              onClick={() => window.open("tel:338 74 87 512", "_self")}
            >
              <Send className="mr-2 h-4 w-4" />
              Chiama: 338 74 87 512
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
