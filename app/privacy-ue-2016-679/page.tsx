import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Informativa Privacy (GDPR)",
  description: "Dettagli sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR). La tua privacy è la nostra priorità.",
}

export default function PrivacyUePage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1B365D] mb-6">Informativa sul Trattamento dei Dati Personali</h1>
          <p className="mb-6 text-gray-500">Regolamento (UE) 2016/679 (GDPR)</p>
          
          <div className="prose max-w-none text-gray-700">
            <p>
              Questo documento fornisce un'informativa dettagliata su come AUTOMULTISERVICE s.a.s. di D'Andrea Antonio & C. tratta i dati personali raccolti tramite questo sito web (es. moduli di contatto, richieste di valutazione) in conformità con il GDPR.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati è <strong>AUTOMULTISERVICE s.a.s. di D'Andrea Antonio & C.</strong>, con sede legale in Viale dell'Industria, 23/b - 35129 - Padova (PD).
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Tipologie di Dati Trattati</h2>
            <p>
              Raccogliamo i dati che ci fornisci volontariamente tramite i moduli di contatto, come nome, cognome, email, numero di telefono e dettagli del veicolo. Raccogliamo inoltre dati di navigazione anonimi tramite servizi di terze parti come Vercel Analytics.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Finalità e Base Giuridica</h2>
            <p>
              I dati sono trattati per rispondere alle tue richieste, fornire valutazioni di veicoli e adempiere a obblighi pre-contrattuali e contrattuali. La base giuridica è l'esecuzione di misure pre-contrattuali adottate su tua richiesta e l'adempimento di un contratto.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Natura del Conferimento</h2>
            <p>
              Il conferimento dei dati è facoltativo ma necessario per poter elaborare le tue richieste. Il mancato conferimento renderà impossibile fornire il servizio richiesto.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Diritti dell'Interessato</h2>
            <p>
              In qualità di interessato, hai il diritto di richiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei tuoi dati personali. Per esercitare tali diritti, puoi contattarci all'indirizzo email <a href="mailto:info@automultiservice.it" className="text-blue-600 hover:underline">info@automultiservice.it</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 