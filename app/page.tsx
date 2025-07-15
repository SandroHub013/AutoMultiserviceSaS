"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Wrench,
  CreditCard,
  Truck,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  Euro,
  Shield,
  Recycle,
  Star,
  Award,
  Users,
  Calendar,
  Navigation,
  Menu,
  X,
  Instagram,
  Check,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { VehicleEvaluationForm } from "@/components/vehicle-evaluation-form"
import { WhatsAppBanner } from "@/components/whatsapp-banner"
import { SplashScreen } from "@/components/splash-screen"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CounterAnimation } from "@/components/counter-animation"
import { useState } from "react"
import { useIsIOS } from "@/hooks/use-is-ios"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openGoogleMaps = () => {
    const address = "Via del Lavoro, 12, 40061 Minerbio BO, Italy"
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(googleMapsUrl, "_blank")
  }

  const isIOS = useIsIOS()

  return (
    <main className="relative">
      <SplashScreen />
      {/* Header */}
      <header className="bg-[#1B365D] text-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo-automultiservice.jpg"
                alt="AutoMultiservice Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="#home" className="hover:text-[#FF6B35] transition-colors">
                Home
              </Link>
              <Link href="#servizi" className="hover:text-[#FF6B35] transition-colors">
                Servizi
              </Link>
              <Link href="#ricambi" className="hover:text-[#FF6B35] transition-colors">
                Ricambi
              </Link>
              <Link href="#preventivo" className="hover:text-[#FF6B35] transition-colors">
                Preventivo
              </Link>
              <Link href="#contatti" className="hover:text-[#FF6B35] transition-colors">
                Contatti
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+393387487512"
                  className="font-semibold hover:text-[#FF6B35] transition-colors cursor-pointer"
                >
                  338 74 87 512
                </a>
              </div>
              <Button
                size="sm"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                onClick={() => window.open("https://wa.me/393387487512", "_blank")}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-[#2A4A6B]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#2A4A6B] pt-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  className="hover:text-[#FF6B35] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#servizi"
                  className="hover:text-[#FF6B35] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Servizi
                </Link>
                <Link
                  href="#ricambi"
                  className="hover:text-[#FF6B35] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ricambi
                </Link>
                <Link
                  href="#preventivo"
                  className="hover:text-[#FF6B35] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Preventivo
                </Link>
                <Link
                  href="#contatti"
                  className="hover:text-[#FF6B35] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contatti
                </Link>
                <div className="flex items-center space-x-2 py-2 text-[#FF6B35]">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:+393387487512"
                    className="font-semibold hover:text-white transition-colors cursor-pointer"
                  >
                    338 74 87 512
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-[#1B365D] to-[#2A4A6B] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-[#FF6B35] text-white px-3 py-1 animate-pulse">
                    <Award className="h-4 w-4 mr-1" />
                    Dal 2000 nel settore
                  </Badge>
                  <Badge className="bg-[#28A745] text-white px-3 py-1 animate-pulse">
                    <Shield className="h-4 w-4 mr-1" />
                    Pagamenti Garantiti
                  </Badge>
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Acquistiamo il tuo veicolo in
                  <span className="text-[#FF6B35] animate-pulse"> qualsiasi condizione</span>
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  <strong>Valutazione immediata, pagamento in contanti e ritiro gratuito.</strong>
                  Oltre 15 anni di esperienza nel settore automotive con migliaia di clienti soddisfatti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://wa.me/393387487512?text=Ciao, vorrei una valutazione per il mio veicolo",
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Valutazione WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#1B365D] bg-transparent text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById("preventivo")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <CreditCard className="mr-2 h-6 w-6" />
                    Form Valutazione
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Pagamento immediato", "Ritiro gratuito", "Pratiche incluse", "Massima valutazione"].map(
                    (item, index) => (
                      <ScrollReveal key={item} direction="up" delay={0.4 + index * 0.1}>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-[#28A745]" />
                          <span>{item}</span>
                        </div>
                      </ScrollReveal>
                    ),
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="relative">
                <video 
                  controls 
                  preload="auto"
                  playsInline
                  muted
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                >
                  <source src="/ANTOPRESENTAZIONE.mp4#t=0.1" type="video/mp4" />
                  <source src="/ANTOPRESENTAZIONE.mp4#t=0.1" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
                  <p className="text-center p-4 bg-gray-100 rounded-lg">
                    Il tuo browser non supporta il tag video. 
                    <br />
                    <a href="/ANTOPRESENTAZIONE.mp4" className="text-blue-600 underline">
                      Clicca qui per scaricare il video
                    </a>
                  </p>
                </video>
                <div className="absolute -bottom-6 -left-6 bg-[#FF6B35] text-white p-6 rounded-lg shadow-lg animate-bounce">
                  <CounterAnimation end={24} duration={2000} />
                  <div className="text-sm">Anni di esperienza</div>
                </div>
                <div
                  className="absolute -top-6 -right-6 bg-[#28A745] text-white p-4 rounded-lg shadow-lg animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <CounterAnimation end={5000} duration={3000} suffix="+" />
                  <div className="text-xs">Veicoli acquistati</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Esperienza e Sicurezza */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl font-bold text-[#1B365D] mb-4">Oltre 24 Anni di Esperienza al Vostro Servizio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dal 2000, offriamo professionalità e trasparenza. La nostra lunga storia è la vostra garanzia di un servizio affidabile e competente.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            {/* Box 1: Anni di Esperienza */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#1B365D] mb-2">Esperienza Comprovata</h3>
              <p className="text-gray-700">
                Con oltre due decenni nel settore, abbiamo sviluppato una competenza unica nella valutazione e gestione di veicoli e ricambi.
              </p>
            </div>
            {/* Box 2: Clienti Soddisfatti */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#1B365D] mb-2">5000+ Clienti Soddisfatti</h3>
              <p className="text-gray-700">
                Migliaia di clienti soddisfatti in tutta Italia. La nostra fiducia e la nostra professionalità sono testimoniate dalle recensioni.
              </p>
            </div>
            {/* Box 3: Sicurezza Pagamenti */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#1B365D] mb-2">Pagamenti Sicuri</h3>
              <p className="text-gray-700">
                Pagamento in contanti immediato alla consegna. Nessun rischio, massima sicurezza. Siamo sempre a vostra disposizione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">I Nostri Servizi</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluzioni complete per ogni esigenza automotive. Dalla valutazione alla vendita, gestiamo tutto noi per
                offrirti il miglior servizio possibile.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: "Acquisto Veicoli Incidentati",
                description: "Acquistiamo veicoli in qualsiasi condizione con valutazione immediata",
                features: [
                  "Auto e moto incidentate",
                  "Veicoli con motori fusi",
                  "Auto grandinati e alluvionati",
                  "Veicoli d'epoca e storici",
                  "Pagamento in contanti immediato",
                ],
                whatsappText: "Vorrei vendere il mio veicolo incidentato",
              },
              {
                icon: Wrench,
                title: "Ricambi Usati Garantiti",
                description: "Ricambi di qualità con garanzia 12 mesi per tutte le marche",
                features: [
                  "Ricambi per tutte le marche",
                  "Motori revisionati",
                  "Cambi e trasmissioni",
                  "Garanzia 12 mesi",
                  "Prezzi competitivi",
                ],
                whatsappText: "Cerco ricambi per il mio veicolo",
              },
              {
                icon: Recycle,
                title: "Servizi Specializzati",
                description: "Soluzioni personalizzate per ogni esigenza automotive",
                features: [
                  "Permuta veicoli",
                  "Conto vendita",
                  "Riscatto leasing",
                  "Demolizione gratuita",
                  "Consulenza specializzata",
                ],
                whatsappText: "Vorrei informazioni sui vostri servizi",
              },
            ].map((service, index) => (
              <ScrollReveal key={service.title} direction="up" delay={0.2 + index * 0.1}>
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#FF6B35] transform hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#1B365D] text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={feature}
                          className="flex items-center opacity-0 animate-fadeInUp"
                          style={{ animationDelay: `${featureIndex * 0.1}s`, animationFillMode: "forwards" }}
                        >
                          <CheckCircle className="h-4 w-4 text-[#28A745] mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-4 bg-[#25D366] hover:bg-[#20BA5A] transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(`https://wa.me/393387487512?text=${service.whatsappText}`, "_blank")}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contatta su WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ricambi Section */}
      <section id="ricambi" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">Ricambi Usati di Qualità</h2>
              <p className="text-xl text-gray-600">
                Ampio catalogo di ricambi usati per tutte le marche e modelli con garanzia 12 mesi
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal direction="left" delay={0.3}>
              <div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-6">Perché Scegliere i Nostri Ricambi?</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Shield,
                      title: "Garanzia 12 Mesi",
                      description: "Tutti i ricambi sono garantiti per un anno completo con assistenza post-vendita",
                    },
                    {
                      icon: Award,
                      title: "Controllo Qualità",
                      description: "Ogni pezzo viene testato e revisionato dai nostri tecnici specializzati",
                    },
                    {
                      icon: Euro,
                      title: "Prezzi Competitivi",
                      description: "Risparmio fino al 70% rispetto al nuovo mantenendo la qualità",
                    },
                    {
                      icon: Truck,
                      title: "Disponibilità Immediata",
                      description: "Ampio magazzino con ricambi sempre disponibili e spedizione rapida",
                    },
                  ].map((item, index) => (
                    <ScrollReveal key={item.title} direction="left" delay={0.4 + index * 0.1}>
                      <div className="flex items-start space-x-4 group">
                        <div className="bg-[#28A745] p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div>
                <video 
                  controls 
                  preload="auto"
                  playsInline
                  muted
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                >
                  <source src="/BMW.mp4#t=0.1" type="video/mp4" />
                  <source src="/BMW.mp4#t=0.1" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
                  <p className="text-center p-4 bg-gray-100 rounded-lg">
                    Il tuo browser non supporta il tag video. 
                    <br />
                    <a href="/BMW.mp4" className="text-blue-600 underline">
                      Clicca qui per scaricare il video
                    </a>
                  </p>
                </video>
              </div>
            </ScrollReveal>
          </div>

          {/* Marche Principali */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#1B365D] mb-6 text-center">Ricambi per Tutte le Marche</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {[
                  "Fiat",
                  "Volkswagen",
                  "BMW",
                  "Mercedes",
                  "Audi",
                  "Ford",
                  "Opel",
                  "Peugeot",
                  "Renault",
                  "Toyota",
                  "Honda",
                  "Nissan",
                ].map((brand, index) => (
                  <div
                    key={brand}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                  >
                    <span className="font-semibold text-[#1B365D]">{brand}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://wa.me/393387487512?text=Cerco ricambi per la mia auto", "_blank")}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Trova il Tuo Ricambio
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Preventivo Online */}
      <section id="preventivo" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">Richiedi un Preventivo</h2>
              <p className="text-xl text-gray-600">
                Compila il form per ricevere una valutazione gratuita del tuo veicolo entro 24 ore
              </p>
              <div className="flex justify-center mt-6">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://wa.me/393387487512?text=Vorrei una valutazione rapida per il mio veicolo",
                      "_blank",
                    )
                  }
                >
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Valutazione Rapida WhatsApp
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">Oppure compila il form dettagliato qui sotto</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex justify-center mb-8">
              <video 
                controls 
                preload="auto"
                playsInline
                muted
                className="w-full max-w-lg rounded-lg shadow-lg"
              >
                <source src="/COSTANTINO.MP4#t=0.1" type="video/mp4" />
                <source src="/COSTANTINO.MP4#t=0.1" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
                <p className="text-center p-4 bg-gray-100 rounded-lg">
                  Il tuo browser non supporta il tag video. 
                  <br />
                  <a href="/COSTANTINO.MP4" className="text-blue-600 underline">
                    Clicca qui per scaricare il video
                  </a>
                </p>
              </video>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="max-w-4xl mx-auto">
              <VehicleEvaluationForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">Cosa Dicono i Nostri Clienti</h2>
              <p className="text-xl text-gray-600">Oltre 5000 clienti soddisfatti in tutta Italia</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Servizio eccellente! Hanno ritirato la mia auto incidentata in giornata e pagato subito in contanti. Professionalità e onestà al 100%.",
                author: "Marco R. - Milano",
              },
              {
                text: "Avevo bisogno di un motore per la mia Fiat. Ricambio perfetto, garanzia rispettata e prezzo onesto. Consigliatissimi!",
                author: "Giulia T. - Roma",
              },
              {
                text: "Demolizione gratuita della mia vecchia auto. Hanno gestito tutto loro, dalle pratiche al ritiro. Servizio impeccabile!",
                author: "Antonio M. - Napoli",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={testimonial.author} direction="up" delay={0.2 + index * 0.1}>
                <Card className="bg-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current opacity-0 animate-fadeInUp"
                          style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                    <div className="font-semibold text-[#1B365D]">{testimonial.author}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">Domande Frequenti</h2>
              <p className="text-xl text-gray-600">Le risposte alle domande più comuni sui nostri servizi</p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Come viene calcolata la valutazione?",
                answer:
                  "La valutazione si basa su marca, modello, anno, chilometraggio, condizioni generali e valore di mercato attuale. I nostri esperti effettuano un sopralluogo gratuito per una stima precisa e trasparente.",
              },
              {
                question: "Quali documenti servono?",
                answer:
                  "Libretto di circolazione, documento di identità del proprietario e, se presente, certificato di proprietà. Gestiamo noi tutte le pratiche burocratiche e il passaggio di proprietà.",
              },
              {
                question: "Tempi di ritiro del veicolo?",
                answer:
                  "Normalmente entro 24-48 ore dalla conferma. Per veicoli non marcianti organizziamo il ritiro con carro attrezzi senza costi aggiuntivi in tutta Italia.",
              },
              {
                question: "Zone di copertura del servizio?",
                answer:
                  "Operiamo in tutta Italia con sede principale a Minerbio (BO). Per distanze maggiori valutiamo caso per caso, sempre garantendo la massima convenienza e professionalità.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={faq.question} direction="up" delay={0.2 + index * 0.1}>
                <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#1B365D]">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">Contattaci Subito</h2>
              <p className="text-xl text-gray-600">Siamo qui per aiutarti. Contattaci per qualsiasi informazione</p>
              <div className="flex justify-center mt-6">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-xl px-12 py-6 transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://wa.me/393387487512", "_blank")}
                >
                  <MessageCircle className="h-8 w-8 mr-3" />
                  Contattaci su WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left" delay={0.3}>
              <div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-6">Informazioni di Contatto</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Indirizzo",
                      content: "Via del Lavoro, 12 - 40061 Minerbio (BO)",
                    },
                    {
                      icon: Phone,
                      title: "Telefono",
                      content: (
                        <a
                          href="tel:+393387487512"
                          className="text-[#FF6B35] hover:text-[#1B365D] font-semibold transition-colors cursor-pointer"
                        >
                          338 74 87 512
                        </a>
                      ),
                    },
                    {
                      icon: MessageCircle,
                      title: "WhatsApp (Preferito)",
                      content: (
                        <a
                          href="tel:+393387487512"
                          className="text-[#FF6B35] hover:text-[#1B365D] font-semibold transition-colors cursor-pointer"
                        >
                          338 74 87 512
                        </a>
                      ),
                      hasButton: true,
                    },
                    {
                      icon: Clock,
                      title: "Orari di Apertura",
                      content:
                        "Lunedì - Giovedì: 8:00 - 12:30 / 14:00 - 17:30\nVenerdì: 8:00 - 12:30 / 14:00 - 17:00\nSabato: Solo su appuntamento\nWhatsApp: 24/7",
                    },
                  ].map((contact, index) => (
                    <ScrollReveal key={contact.title} direction="left" delay={0.4 + index * 0.1}>
                      <div className="flex items-start space-x-4 group">
                        <contact.icon className="h-6 w-6 text-[#FF6B35] mt-1 transform group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h4 className="font-semibold">{contact.title}</h4>
                          <p className="text-gray-600 whitespace-pre-line">{contact.content}</p>
                          {contact.hasButton && (
                            <Button
                              size="sm"
                              className="bg-[#25D366] hover:bg-[#20BA5A] mt-2 transform hover:scale-105 transition-all duration-300"
                              onClick={() => window.open("https://wa.me/393387487512", "_blank")}
                            >
                              Apri Chat
                            </Button>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <ScrollReveal direction="left" delay={0.8}>
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">La Nostra Posizione</h4>
                    <div className="relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.123456789!2d11.4764!3d44.6394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e4c123456789a%3A0x123456789abcdef0!2sVia%20del%20Lavoro%2C%2012%2C%2040061%20Minerbio%20BO%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890123!5m2!1sen!2sit"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-lg"
                      />
                      <div
                        className="absolute inset-0 bg-transparent cursor-pointer rounded-lg"
                        onClick={openGoogleMaps}
                      >
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg hover:bg-white transition-all duration-300">
                          <div className="flex items-center space-x-2 text-[#1B365D]">
                            <Navigation className="h-4 w-4" />
                            <span className="text-sm font-semibold">Ottieni Indicazioni</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-[#1B365D] hover:bg-[#2A4A6B] transform hover:scale-105 transition-all duration-300"
                      onClick={openGoogleMaps}
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Apri in Google Maps
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B365D] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Sezione Info e Contatti */}
            <div>
              <h3 className="text-xl font-bold mb-4">AutoMultiservice SAS</h3>
              <p className="text-gray-300">
                Sede Operativa: Via del Lavoro, 14, 40061 Minerbio (BO)
                <br />
                Sede Legale: Viale dell'Industria 23/b, 35129 Padova (PD)
              </p>
              <p className="mt-4 text-gray-300">
                P.Iva: 04704900283
              </p>
            </div>

            {/* Sezione Link Utili */}
            <div>
              <h3 className="text-xl font-bold mb-4">Link Utili</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#servizi" className="hover:text-white">I Nostri Servizi</a></li>
                <li><a href="#ricambi" className="hover:text-white">Ricambi Usati</a></li>
                <li><a href="#valutazione" className="hover:text-white">Valutazione Gratuita</a></li>
                <li><a href="#contatti" className="hover:text-white">Contatti</a></li>
              </ul>
            </div>

            {/* Sezione Note Legali */}
            <div>
              <h3 className="text-xl font-bold mb-4">Informazioni Legali</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/note-legali" className="hover:text-white">Note Legali</a></li>
                <li><a href="/condizioni-d-uso" className="hover:text-white">Condizioni d'Uso</a></li>
                <li><a href="/privacy-clienti-fornitori" className="hover:text-white">Privacy Clienti/Fornitori</a></li>
                <li><a href="/privacy-ue-2016-679" className="hover:text-white">Informativa Privacy UE</a></li>
              </ul>
            </div>

            {/* Sezione Social */}
            <div>
              <h3 className="text-xl font-bold mb-4">Seguici</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/automultiservice_sas/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                {/* Aggiungi qui altre icone social se necessario */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AutoMultiservice SAS di D'Andrea Antonio & C. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
