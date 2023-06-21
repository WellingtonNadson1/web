import Link from 'next/link'

export default function ListCelulas() {
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
      lideres: 'Cleudilene',
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
      nomeCelula: 'Kadosh',
      lideres: 'Antônio e Rose',
    },
    {
      id: 9,
      nomeCelula: 'Semeando Vidas',
      lideres: 'Raimundo e Marylex',
    },
    {
      id: 10,
      nomeCelula: 'Resgatando Vidas',
      lideres: 'Flávio',
    },
    {
      id: 11,
      nomeCelula: 'Resgatando',
      lideres: 'Daniel e Jeycilene',
    },
  ]
  return (
    <div>
      <div className="relative mx-auto mt-3 w-full p-2">
        <div className="relative mx-auto w-full py-2">
          <div className="w-full rounded-lg bg-white p-4 shadow-md">
            <div className="p-2">
              <table className="w-full table-auto border-separate border-spacing-y-2 px-2">
                <thead>
                  <tr>
                    <th className="text-start text-gray-800">Ord.</th>
                    <th className="text-start text-gray-800">Célula</th>
                    <th className="hidden text-start text-gray-800 sm:block">
                      Líder(es)
                    </th>
                    <th className="text-gray-800">Presença</th>
                  </tr>
                </thead>
                <tbody className="px-4">
                  {celulas.map((celula, index) => (
                    <tr
                      className="rounded-lg hover:bg-gray-100/90"
                      key={celula.id}
                    >
                      <td>
                        <h2 className="pl-2">{index + 1}</h2>
                      </td>
                      <td>
                        <h2 className="pl-2">{celula.nomeCelula}</h2>
                      </td>

                      <td className="mt-2 hidden text-start text-gray-700 sm:block">
                        {celula.lideres}
                      </td>
                      <td className="p-2">
                        <div>
                          <Link
                            className="block rounded-md bg-green-500 px-4 py-2 text-center text-sm font-medium leading-3 text-white shadow-sm ring-1 ring-slate-700/10 duration-150 hover:bg-green-600"
                            href="/supervisoes/celulas/controle-celula"
                          >
                            Lançar
                          </Link>
                        </div>
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
