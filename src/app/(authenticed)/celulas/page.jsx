import Header from '@/components/Header'

export default function Celulas() {
  const celulas = [
    {
      id: 1,
      nomeCelula: 'Betel',
      lideres: 'Wellington e Rafaelly',
    },
    {
      id: 2,
      nomeCelula: 'Casa de Deus',
      lideres: 'Chrystiano e Joseilma',
    },
    {
      id: 3,
      nomeCelula: 'Confins da Terra',
      lideres: 'Flávio e Cleudilene',
    },
    {
      id: 4,
      nomeCelula: 'Herdeiros de Deus',
      lideres: 'Ariadina',
    },
    {
      id: 5,
      nomeCelula: 'Lugar de Deus',
      lideres: 'Denise',
    },
    {
      id: 6,
      nomeCelula: 'Luz do Mundo',
      lideres: 'Viviane',
    },
    {
      id: 7,
      nomeCelula: 'Reconcililando Vidas',
      lideres: 'Victor e Patricia',
    },
    {
      id: 8,
      nomeCelula: 'Resgatando Vidas',
      lideres: 'Antônio e Rose',
    },
    {
      id: 9,
      nomeCelula: 'Semeando Vidas',
      lideres: 'Raimundo e Marylex',
    },
  ]
  return (
    <div className="relative w-full">
      <div className="relative mx-auto w-full px-4 py-2">
        <Header titlePage="Eventos" />
      </div>

      {/* Presenca */}
      <div className="relative w-full">
        <div className="relative mx-auto w-full px-6 py-2">
          <div className="w-full rounded bg-white p-4 shadow-md">
            <div className="rounded-md border p-2">
              <table className="w-full table-auto px-2">
                <thead>
                  <tr>
                    <th className="text-start text-gray-800">Célula</th>
                    <th className="text-start text-gray-800">Líder(es)</th>
                    <th className="text-gray-800">Presença</th>
                  </tr>
                </thead>
                <tbody className="px-4">
                  {celulas.map((celula) => (
                    <tr
                      className="hover:rounded-md hover:bg-gray-100/90"
                      key={celula.id}
                    >
                      <td>
                        <div className="mb-2">
                          <h2>{celula.nomeCelula}</h2>
                        </div>
                      </td>

                      <td className="text-start text-gray-700">
                        {celula.lideres}
                      </td>
                      <td>
                        <a
                          className="block rounded-md bg-green-500 p-2 text-center text-sm font-semibold leading-3 text-white hover:bg-green-600"
                          href="/celula/controle-celula"
                        >
                          Lançar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
