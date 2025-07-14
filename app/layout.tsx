import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadataBase = new URL("https://automultiservicesas.com")

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "AutoMultiservice - Acquisto Auto Incidentate, Usate e Ricambi a Bologna",
    template: "%s | AutoMultiservice",
  },
  description:
    "Acquistiamo auto incidentate, usate, fuse in tutta Italia. Pagamento immediato, ritiro gratuito. Ricambi usati garantiti per tutte le marche. Sede a Minerbio (BO).",
  keywords: [
    "acquisto auto incidentate",
    "vendo auto incidentata",
    "valutazione auto usate",
    "ricambi auto usati",
    "demolizione auto gratuita",
    "auto grandinate",
    "veicoli alluvionati",
    "ritiro auto non marcianti",
    "pagamento contanti auto",
    "ricambi garantiti",
    "Bologna auto incidentate",
    "Modena ricambi auto",
    "Emilia Romagna acquisto auto",
  ],
  authors: [{ name: "AutoMultiservice s.a.s." }],
  openGraph: {
    title: "AutoMultiservice - Compro Auto Incidentate e Usate",
    description: "Valutazione gratuita, pagamento immediato e ritiro in tutta Italia.",
    url: "https://automultiservicesas.com",
    siteName: "AutoMultiservice",
    images: [
      {
        url: "/logo-automultiservice.jpg",
        width: 1200,
        height: 630,
        alt: "AutoMultiservice Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoMultiservice - Acquisto Auto Incidentate",
    description: "Pagamenti immediati e ritiro gratuito in tutta Italia.",
    images: ["/logo-automultiservice.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-automultiservice.jpg", type: "image/jpg" },
    ],
    shortcut: "/logo-automultiservice.jpg",
    apple: "/logo-automultiservice.jpg",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1B365D",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="h-full">
      <head>
        <link rel="canonical" href="https://www.automultiservice.it" />
        <meta name="geo.region" content="IT-ER" />
        <meta name="geo.placename" content="Minerbio, Bologna, Emilia Romagna" />
        <meta name="geo.position" content="44.6394;11.4764" />
        <meta name="ICBM" content="44.6394, 11.4764" />

        {/* Hreflang per targeting geografico */}
        <link rel="alternate" hrefLang="it-IT" href="https://www.automultiservice.it" />
        <link rel="alternate" hrefLang="it" href="https://www.automultiservice.it" />

        {/* Meta tag aggiuntivi per SEO locale */}
        <meta
          name="coverage"
          content="Bologna, Modena, Ferrara, Parma, Reggio Emilia, Verona, Firenze, Mantova, Cesena, Ravenna, Padova, Rovigo, Imola"
        />
        <meta name="distribution" content="local" />
        <meta name="audience" content="Bologna, Emilia Romagna, Veneto, Toscana" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AUTOMULTISERVICE s.a.s. di D'Andrea Antonio & C.",
              description:
                "Acquistiamo auto incidentate, sinistrate, alluvionate a Bologna, Modena, Ferrara, Parma, Reggio Emilia, Verona, Firenze. Valutazione gratuita, pagamento immediato, ricambi usati garantiti.",
              url: "https://www.automultiservice.it",
              telephone: "+39-338-74-87-512",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via del Lavoro, 12",
                addressLocality: "Minerbio",
                addressRegion: "Emilia-Romagna",
                postalCode: "40061",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "44.6394",
                longitude: "11.4764",
              },
              openingHours: ["Mo-Th 08:00-12:30,14:00-17:30", "Fr 08:00-12:30,14:00-17:00", "Sa by appointment"],
              priceRange: "€€",
              paymentAccepted: "Cash, Bank Transfer",
              foundingDate: "2008",
              areaServed: [
                {
                  "@type": "City",
                  name: "Bologna",
                },
                {
                  "@type": "City",
                  name: "Modena",
                },
                {
                  "@type": "City",
                  name: "Ferrara",
                },
                {
                  "@type": "City",
                  name: "Parma",
                },
                {
                  "@type": "City",
                  name: "Reggio Emilia",
                },
                {
                  "@type": "City",
                  name: "Verona",
                },
                {
                  "@type": "City",
                  name: "Firenze",
                },
                {
                  "@type": "City",
                  name: "Mantova",
                },
                {
                  "@type": "City",
                  name: "Cesena",
                },
                {
                  "@type": "City",
                  name: "Ravenna",
                },
                {
                  "@type": "City",
                  name: "Padova",
                },
                {
                  "@type": "City",
                  name: "Rovigo",
                },
                {
                  "@type": "City",
                  name: "Imola",
                },
              ],
              serviceType: [
                "Acquisto auto incidentate",
                "Valutazione auto sinistrate",
                "Compro autoveicoli incidentata",
                "Valutazione auto usata",
                "Auto alluvionate",
                "Sostituzione revisione cambio",
                "Revisione sostituzione motore",
                "Rottamazione veicoli",
                "Ricambi auto usati",
                "Demolizione gratuita",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servizi AutoMultiservice",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Acquisto Auto Incidentate Bologna",
                      description:
                        "Acquistiamo auto incidentate a Bologna con valutazione gratuita e pagamento immediato",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Valutazione Auto Sinistrate Modena",
                      description: "Valutazione professionale auto sinistrate a Modena e provincia",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Compro Autoveicoli Incidentata Ferrara",
                      description: "Compriamo autoveicoli incidentata a Ferrara con ritiro gratuito",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Schema markup per FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Acquistiamo auto incidentate a Bologna?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sì, acquistiamo auto incidentate a Bologna e in tutta l'Emilia Romagna. Offriamo valutazione gratuita, pagamento immediato e ritiro con nostri mezzi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Come funziona la valutazione auto incidentata?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La valutazione si basa su marca, modello, anno, chilometraggio, condizioni generali e valore di mercato. I nostri esperti effettuano un sopralluogo gratuito per una stima precisa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Operati anche a Modena, Ferrara e Parma?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sì, operiamo in tutta l'Emilia Romagna incluse Bologna, Modena, Ferrara, Parma, Reggio Emilia, e anche in Veneto (Verona, Padova, Rovigo) e Toscana (Firenze).",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} h-full w-full m-0 p-0`}>
        <div className="w-full min-h-screen">{children}</div>
        <SpeedInsights />
      </body>
    </html>
  )
}
