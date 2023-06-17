import Calendar from '@/components/Calendar'
import Header from '@/components/Header'
import Image from 'next/image'

export default function ControleCelula() {
  const membrosCelula = [
    {
      id: 1,
      imagePerfil: '/images/man1.avif',
      nomeMembroCelula: 'Wellington',
      status: 'Ativo',
      tipo: 'Membro',
    },
    {
      id: 2,
      imagePerfil: '/images/woman1.avif',
      nomeMembroCelula: 'Rafaelly',
      status: 'Ativo',
      tipo: 'Membro',
    },
    {
      id: 3,
      imagePerfil: '/images/man1.avif',
      nomeMembroCelula: 'Rocha',
      status: 'Ativo',
      tipo: 'Membro',
    },
    {
      id: 4,
      imagePerfil: '/images/woman1.avif',
      nomeMembroCelula: 'Carmem',
      status: 'Ativo',
      tipo: 'Membro',
    },
    {
      id: 5,
      imagePerfil: '/images/man2.avif',
      nomeMembroCelula: 'Washington',
      status: 'Normal',
      tipo: 'Membro',
    },
    {
      id: 6,
      imagePerfil: '/images/woman1.avif',
      nomeMembroCelula: 'Socorro',
      status: 'Normal',
      tipo: 'Membro',
    },
    {
      id: 7,
      imagePerfil: '/images/man1.avif',
      nomeMembroCelula: 'Willian',
      status: 'Normal',
      tipo: 'Membro',
    },
    {
      id: 8,
      imagePerfil: '/images/man2.avif',
      nomeMembroCelula: 'Magno',
      status: 'Normal',
      tipo: 'Membro',
    },
    {
      id: 9,
      imagePerfil: '/images/woman1.avif',
      nomeMembroCelula: 'Karol',
      status: 'Normal',
      tipo: 'Membro',
    },
  ]
  return (
    <div className="relative w-full">
      <div className="mx-auto w-full px-4 py-2">
        <Header titlePage="Controle de Célula" />
      </div>
      <div className="relative mx-auto px-6 py-2">
        <Calendar />
      </div>
      <div className="relative mx-auto w-full px-4 py-2">
        <div className="w-full rounded bg-white p-4">
          <div className="rounded-md border p-2">
            <table className="w-full table-auto px-2">
              <thead>
                <tr>
                  <th className="text-start text-gray-800">Nome</th>
                  <th className="text-gray-800">Status</th>
                  <th className="text-gray-800">Tipo</th>
                  <th className="text-gray-800">Presença</th>
                </tr>
              </thead>
              <tbody className="px-4">
                {membrosCelula.map((membro) => (
                  <tr
                    className="hover:rounded-md hover:bg-gray-100/90"
                    key={membro.id}
                  >
                    <td>
                      <div className="mb-2 flex items-center justify-start gap-2">
                        <Image
                          src={membro.imagePerfil}
                          width={22}
                          height={22}
                          alt={membro.nomeMembroCelula}
                          className={`cursor-pointer rounded-full`}
                        />
                        <h2>{membro.nomeMembroCelula}</h2>
                      </div>
                    </td>
                    <td className="text-center">
                      <span
                        className={`w-full rounded-md px-2 py-1 text-center text-sm ${
                          membro.status === 'Ativo'
                            ? 'border border-green-200 bg-green-100 ring-green-500'
                            : 'border border-orange-200 bg-orange-100 ring-orange-500'
                        }`}
                      >
                        {membro.status}
                      </span>
                    </td>
                    <td className="text-center text-gray-700">{membro.tipo}</td>
                    <td>
                      <div className="flex items-center justify-center gap-3 sm:gap-8">
                        <input
                          id="presente"
                          name="presente"
                          type="checkbox"
                          className="h-4 w-4 cursor-pointer rounded border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <input
                          id="faltou"
                          name="faltou"
                          type="checkbox"
                          className="h-4 w-4 cursor-pointer rounded border-gray-300 text-red-600 focus:ring-red-600"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
                <div className="w-full">
                  <div className="w-1/2">
                    <button
                      className='type="submit"
                    className="flex w-full justify-center rounded-md bg-[#014874] px-3 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm duration-100 hover:bg-[#1D70B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#014874]'
                      type="submit"
                    >
                      Registrar
                    </button>
                  </div>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
