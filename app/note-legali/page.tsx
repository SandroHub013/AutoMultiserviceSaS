import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Note Legali",
  description: "Informazioni legali, dati societari, e contatti di AutoMultiservice SAS. Trasparenza e professionalità al servizio dei nostri clienti.",
}

export default function NoteLegaliPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1B365D] mb-6">Note Legali</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              In questa pagina sono riportate le informazioni legali che regolano l'accesso e l'utilizzo del sito web di AutoMultiservice SAS. La trasparenza è un valore fondamentale per noi e vogliamo garantire che tutti i nostri utenti abbiano accesso a informazioni chiare e complete.
            </p>

            <div className="border-t pt-6">
              <h2 className="text-2xl font-semibold text-[#1B365D] mb-4">Dati Societari</h2>
              <ul className="space-y-2">
                <li><strong>Ragione Sociale:</strong> AUTOMULTISERVICE s.a.s. di D'Andrea Antonio & C.</li>
                <li><strong>Sede Legale:</strong> Viale dell'Industria, 23/b - 35129 - Padova (PD)</li>
                <li><strong>Sede Operativa:</strong> Via del Lavoro, 14 - 40061 - Minerbio (BO)</li>
                <li><strong>Partita IVA:</strong> 04704900283</li>
                <li><strong>Codice Fiscale:</strong> 04704900283</li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-2xl font-semibold text-[#1B365D] mb-4">Contatti</h2>
              <ul className="space-y-2">
                <li><strong>Telefono:</strong> <a href="tel:+393387487512" className="text-blue-600 hover:underline">338 74 87 512</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@automultiservice.it" className="text-blue-600 hover:underline">info@automultiservice.it</a></li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Per qualsiasi domanda o necessità, non esitare a contattarci. Siamo a tua completa disposizione per fornirti il supporto di cui hai bisogno.
              </p>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-2xl font-semibold text-[#1B365D] mb-4">Orari di Apertura</h2>
              <ul className="space-y-2">
                <li><strong>Lunedì - Giovedì:</strong> 8:00–12:30 / 14:00–17:30</li>
                <li><strong>Venerdì:</strong> 8:00–12:30 / 14:00-17:00</li>
                <li><strong>Sabato:</strong> Solo su appuntamento</li>
                <li><strong>Domenica e Festivi:</strong> Chiuso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 