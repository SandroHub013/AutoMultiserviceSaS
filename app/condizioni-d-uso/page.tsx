import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Condizioni d'Uso",
  description: "Leggi le condizioni d'uso del sito di AutoMultiservice SAS. Accedendo al sito, accetti i termini e le condizioni qui descritte.",
}

export default function CondizioniUsoPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1B365D] mb-6">Condizioni d'Uso</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p>
              L'accesso e l'utilizzo di questo sito web sono soggetti alle seguenti condizioni. Utilizzando questo sito, l'utente dichiara di aver letto, compreso e accettato i termini d'uso qui riportati. Se non si è d'accordo con questi termini, si prega di non utilizzare il sito.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Oggetto del Servizio</h2>
            <p>
              AutoMultiservice SAS fornisce, attraverso questo sito, informazioni relative ai propri servizi di acquisto di veicoli usati, incidentati e di vendita di ricambi. Le informazioni sono fornite a scopo puramente informativo e non costituiscono una proposta contrattuale.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti di questo sito, inclusi testi, grafiche, loghi e video, sono di proprietà di AutoMultiservice SAS e protetti dalle leggi sul diritto d'autore. È vietata la riproduzione, anche parziale, senza autorizzazione esplicita.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Limitazione di Responsabilità</h2>
            <p>
              AutoMultiservice SAS si impegna a fornire informazioni accurate e aggiornate. Tuttavia, non si assume alcuna responsabilità per eventuali errori o omissioni nei contenuti del sito. La navigazione e l'utilizzo del sito sono a totale rischio dell'utente.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Modifiche ai Termini</h2>
            <p>
              AutoMultiservice SAS si riserva il diritto di modificare queste condizioni d'uso in qualsiasi momento. Le modifiche saranno effettive dalla data di pubblicazione sul sito.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 