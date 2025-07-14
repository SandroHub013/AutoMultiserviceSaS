import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AutoMultiservice | Acquistiamo Auto Incidentate Bologna, Modena, Ferrara - Valutazione Immediata",
  description:
    "Acquistiamo auto incidentate, sinistrate, alluvionate a Bologna, Modena, Ferrara, Parma, Reggio Emilia, Verona, Firenze, Mantova, Cesena, Ravenna, Padova, Rovigo. Valutazione gratuita, pagamento immediato, ritiro con nostri mezzi. Ricambi usati garantiti, revisione motori e cambi, rottamazione veicoli. AUTOMULTISERVICE Minerbio (BO).",
  keywords: [
    // Acquistiamo auto incidentate per città
    "acquistiamo auto incidentata Bologna",
    "acquistiamo auto incidentata Modena",
    "acquistiamo auto incidentata Cesena",
    "acquistiamo auto incidentata Parma",
    "acquistiamo auto incidentata Reggio Emilia",
    "acquistiamo auto incidentata Verona",
    "acquistiamo auto incidentata Ferrara",
    "acquistiamo auto incidentata Firenze",
    "acquistiamo auto incidentata Mantova",
    "acquistiamo auto incidentata Rovigo",
    "acquistiamo auto incidentata Ravenna",
    "acquistiamo auto incidentata Padova",

    // Valutazione auto incidentate per città
    "valutazione auto incidentata Bologna",
    "valutazione auto incidentata Modena",
    "valutazione auto incidentata Cesena",
    "valutazione auto incidentata Parma",
    "valutazione auto incidentata Firenze",
    "valutazione auto incidentata Verona",
    "valutazione auto incidentata Reggio Emilia",
    "valutazione auto incidentata Ferrara",
    "valutazione auto incidentata Mantova",

    // Valutazione auto sinistrate
    "valutazione auto sinistrata Bologna",
    "valutazione auto sinistrata Ferrara",
    "valutazione auto sinistrata Imola",
    "acquistiamo auto sinistrata Bologna",
    "acquistiamo auto sinistrata Ferrara",
    "acquistiamo auto sinistrata Modena",

    // Compro autoveicoli
    "compro autoveicoli incidentata Bologna",
    "compro autoveicoli incidentata Modena",
    "compro autoveicoli incidentata Ferrara",
    "compro auto incidentata Ferrara",

    // Valutazione auto usate
    "valutazione auto usata Bologna",
    "valutazione auto usata Ferrara",

    // Auto alluvionate
    "auto alluvionata Firenze",
    "auto alluvionate Bologna",
    "auto grandinata Emilia Romagna",

    // Servizi tecnici
    "sostituzione revisione cambio",
    "revisione sostituzione motore",
    "rottamazione veicoli",
    "veicoli rottamazione",
    "demolizione auto gratuita",

    // Keywords generali
    "compro auto incidentate",
    "acquisto veicoli usati",
    "ricambi auto usati",
    "permuta veicoli",
    "riscatto leasing",
    "AutoMultiservice Minerbio",
    "AutoMultiservice Bologna",
    "pagamento immediato auto",
    "ritiro gratuito veicoli",
  ].join(", "),
  authors: [{ name: "AutoMultiservice" }],
  creator: "AutoMultiservice",
  publisher: "AutoMultiservice",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
  openGraph: {
    title: "AutoMultiservice | Acquistiamo Auto Incidentate Bologna, Modena, Ferrara - Valutazione Immediata",
    description:
      "Acquistiamo auto incidentate, sinistrate, alluvionate in Emilia Romagna, Veneto, Toscana. Valutazione gratuita a Bologna, Modena, Ferrara, Parma, Reggio Emilia, Verona, Firenze. Pagamento immediato, ritiro gratuito. Dal 2008 oltre 5000 clienti soddisfatti.",
    url: "https://www.automultiservice.it",
    siteName: "AutoMultiservice",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/logo-automultiservice.jpg",
        width: 1200,
        height: 630,
        alt: "AutoMultiservice - Acquistiamo Auto Incidentate Bologna Modena Ferrara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoMultiservice | Acquistiamo Auto Incidentate Bologna, Modena, Ferrara",
    description:
      "Valutazione gratuita auto incidentate, sinistrate, alluvionate. Pagamento immediato, ritiro gratuito in Emilia Romagna, Veneto, Toscana. Dal 2008 a Minerbio (BO).",
    images: ["/logo-automultiservice.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://www.automultiservice.it",
  },
    generator: 'v0.dev'
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
      </body>
    </html>
  )
}
