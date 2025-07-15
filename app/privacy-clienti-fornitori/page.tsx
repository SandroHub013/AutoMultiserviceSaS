import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy per Clienti e Fornitori",
  description: "Informativa sulla privacy per clienti e fornitori di AutoMultiservice SAS, ai sensi del GDPR. Scopri come trattiamo i tuoi dati personali.",
}

export default function PrivacyClientiFornitoriPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1B365D] mb-6">Informativa Privacy per Clienti e Fornitori</h1>
          <p className="mb-6 text-gray-500">Ai sensi dell'art. 13 del Regolamento (UE) 2016/679</p>
          
          <div className="prose max-w-none text-gray-700">
            <p>
              AUTOMULTISERVICE s.a.s. di D'Andrea Antonio & C., in qualità di Titolare del trattamento, si impegna a proteggere la privacy dei propri clienti e fornitori. Questo documento descrive le modalità con cui trattiamo i dati personali raccolti nell'ambito dei nostri rapporti commerciali.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Finalità del Trattamento</h2>
            <p>
              I dati personali sono raccolti e trattati per le seguenti finalità:
            </p>
            <ul>
              <li>Gestione dei contratti di acquisto e vendita di veicoli e ricambi.</li>
              <li>Adempimenti amministrativi, contabili e fiscali.</li>
              <li>Gestione dei contatti e delle comunicazioni di servizio.</li>
              <li>Invio di preventivi e offerte commerciali su richiesta dell'interessato.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Base Giuridica del Trattamento</h2>
            <p>
              Il trattamento si basa sull'esecuzione di un contratto di cui l'interessato è parte, sull'adempimento di obblighi di legge e, in alcuni casi, sul consenso dell'interessato.
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Periodo di Conservazione</h2>
            <p>
              I dati saranno conservati per il tempo necessario a conseguire gli scopi per cui sono stati raccolti e per gli adempimenti di legge (tipicamente 10 anni dalla cessazione del rapporto contrattuale).
            </p>

            <h2 className="text-2xl font-semibold text-[#1B365D] mt-8 mb-4">Diritti dell'Interessato</h2>
            <p>
              L'interessato ha diritto di accedere ai propri dati, chiederne la rettifica, la cancellazione, la limitazione del trattamento, opporsi al trattamento e richiedere la portabilità dei dati. Per esercitare i propri diritti, è possibile contattarci ai recapiti indicati nella pagina "Note Legali".
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 