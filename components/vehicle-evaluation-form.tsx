"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Car, Calculator, MessageCircle } from "lucide-react"

export function VehicleEvaluationForm() {
  const [formData, setFormData] = useState({
    vehicleType: "",
    brand: "",
    model: "",
    year: "",
    fuel: "",
    mileage: "",
    condition: "",
    hasDocuments: false,
    isRunning: "",
    damageDescription: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    preferredContact: "",
    urgency: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crea messaggio WhatsApp con i dati del form
    const message = `🚗 RICHIESTA VALUTAZIONE VEICOLO

📋 DATI VEICOLO:
• Tipo: ${formData.vehicleType}
• Marca: ${formData.brand}
• Modello: ${formData.model}
• Anno: ${formData.year}
• Alimentazione: ${formData.fuel}
• Chilometraggio: ${formData.mileage} km
• Condizioni: ${formData.condition}
• Funzionante: ${formData.isRunning}
• Documenti: ${formData.hasDocuments ? "Sì" : "No"}

📝 DESCRIZIONE:
${formData.damageDescription || "Nessuna descrizione aggiuntiva"}

👤 CONTATTI:
• Nome: ${formData.contactName}
• Telefono: ${formData.contactPhone}
• Email: ${formData.contactEmail}
• Urgenza: ${formData.urgency}

Grazie per la richiesta!`

    const whatsappUrl = `https://wa.me/393387487512?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    alert("Richiesta inviata su WhatsApp! Ti contatteremo entro 24 ore per la valutazione.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl text-[#1B365D]">Valutazione Gratuita del Veicolo</CardTitle>
        <CardDescription>
          Compila tutti i campi per ricevere una valutazione accurata del tuo veicolo entro 24 ore
        </CardDescription>
        <div className="flex justify-center mt-4">
          <Button
            type="button"
            className="bg-[#25D366] hover:bg-[#20BA5A]"
            onClick={() =>
              window.open("https://wa.me/393387487512?text=Vorrei una valutazione rapida per il mio veicolo", "_blank")
            }
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Valutazione Rapida WhatsApp
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informazioni Veicolo */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1B365D] flex items-center">
                <Car className="mr-2 h-5 w-5" />
                Informazioni Veicolo
              </h3>

              <div>
                <Label htmlFor="vehicleType">Tipo di Veicolo *</Label>
                <Select onValueChange={(value) => handleInputChange("vehicleType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Automobile</SelectItem>
                    <SelectItem value="moto">Motociclo</SelectItem>
                    <SelectItem value="furgone">Furgone</SelectItem>
                    <SelectItem value="camper">Camper</SelectItem>
                    <SelectItem value="autocarro">Autocarro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="brand">Marca *</Label>
                <Select onValueChange={(value) => handleInputChange("brand", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona marca" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fiat">Fiat</SelectItem>
                    <SelectItem value="volkswagen">Volkswagen</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes</SelectItem>
                    <SelectItem value="audi">Audi</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="opel">Opel</SelectItem>
                    <SelectItem value="peugeot">Peugeot</SelectItem>
                    <SelectItem value="renault">Renault</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="nissan">Nissan</SelectItem>
                    <SelectItem value="altro">Altro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="model">Modello *</Label>
                <Input
                  id="model"
                  placeholder="es. Punto, Golf, Serie 3..."
                  value={formData.model}
                  onChange={(e) => handleInputChange("model", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="year">Anno di Immatricolazione *</Label>
                <Input
                  id="year"
                  type="number"
                  placeholder="es. 2015"
                  min="1980"
                  max="2024"
                  value={formData.year}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1B365D]">Dettagli Tecnici</h3>

              <div>
                <Label htmlFor="fuel">Alimentazione *</Label>
                <Select onValueChange={(value) => handleInputChange("fuel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona alimentazione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="benzina">Benzina</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="gpl">GPL</SelectItem>
                    <SelectItem value="metano">Metano</SelectItem>
                    <SelectItem value="ibrida">Ibrida</SelectItem>
                    <SelectItem value="elettrica">Elettrica</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mileage">Chilometraggio *</Label>
                <Input
                  id="mileage"
                  type="number"
                  placeholder="es. 150000"
                  value={formData.mileage}
                  onChange={(e) => handleInputChange("mileage", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label>Il veicolo è funzionante? *</Label>
                <RadioGroup
                  value={formData.isRunning}
                  onValueChange={(value) => handleInputChange("isRunning", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="running-yes" />
                    <Label htmlFor="running-yes">Sì, funziona regolarmente</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partial" id="running-partial" />
                    <Label htmlFor="running-partial">Funziona con problemi</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="running-no" />
                    <Label htmlFor="running-no">Non funziona</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="urgency">Urgenza della vendita *</Label>
                <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona urgenza" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediata">Immediata (entro 1 settimana)</SelectItem>
                    <SelectItem value="breve">Breve termine (entro 1 mese)</SelectItem>
                    <SelectItem value="normale">Normale (entro 3 mesi)</SelectItem>
                    <SelectItem value="valutazione">Solo valutazione</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="documents"
                  checked={formData.hasDocuments}
                  onCheckedChange={(checked) => handleInputChange("hasDocuments", checked as boolean)}
                />
                <Label htmlFor="documents">Ho tutti i documenti del veicolo</Label>
              </div>
            </div>
          </div>

          {/* Condizioni e Danni */}
          <div>
            <Label htmlFor="condition">Condizioni Generali *</Label>
            <Select onValueChange={(value) => handleInputChange("condition", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona condizioni" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ottimo">Ottimo stato</SelectItem>
                <SelectItem value="buono">Buono stato</SelectItem>
                <SelectItem value="discreto">Discreto stato</SelectItem>
                <SelectItem value="incidentato-lieve">Incidentato lieve</SelectItem>
                <SelectItem value="incidentato-grave">Incidentato grave</SelectItem>
                <SelectItem value="motore-fuso">Motore fuso</SelectItem>
                <SelectItem value="grandinato">Grandinato</SelectItem>
                <SelectItem value="alluvionato">Alluvionato</SelectItem>
                <SelectItem value="fermo">Fermo da tempo</SelectItem>
                <SelectItem value="rottame">Da rottamare</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="damageDescription">Descrizione Dettagliata Danni o Problemi</Label>
            <Textarea
              id="damageDescription"
              placeholder="Descrivi in dettaglio eventuali danni, problemi meccanici, parti mancanti, interventi necessari..."
              value={formData.damageDescription}
              onChange={(e) => handleInputChange("damageDescription", e.target.value)}
              rows={4}
            />
          </div>

          {/* Dati di Contatto */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-[#1B365D] mb-4">Dati di Contatto</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contactName">Nome e Cognome *</Label>
                <Input
                  id="contactName"
                  placeholder="Il tuo nome completo"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange("contactName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactPhone">Telefono/WhatsApp *</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="+39 338 748 7512"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactEmail">Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="tua@email.com"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                />
              </div>
              <div>
                <Label>Preferenza di Contatto *</Label>
                <RadioGroup
                  value={formData.preferredContact}
                  onValueChange={(value) => handleInputChange("preferredContact", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                    <Label htmlFor="contact-whatsapp">WhatsApp (Consigliato)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="contact-phone" />
                    <Label htmlFor="contact-phone">Telefono</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="contact-email" />
                    <Label htmlFor="contact-email">Email</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button type="submit" size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8">
              <MessageCircle className="mr-2 h-5 w-5" />
              Invia Richiesta WhatsApp
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 bg-transparent"
              onClick={() => window.open("tel:338 74 87 512", "_self")}
            >
              Chiama Subito: 338 74 87 512
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
