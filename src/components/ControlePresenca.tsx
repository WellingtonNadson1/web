'use client'
import Image from 'next/image'

export default function ControlePresenca() {
  const membrosCelula = [
    {
      id: 1,
      imagePerfil: '/images/man3.jpg',
      nomeMembroCelula: 'Wellington',
      status: 'Líder',
      tipo: 'Membro',
    },
    {
      id: 2,
      imagePerfil: '/images/woman2.png',
      nomeMembroCelula: 'Rafaelly',
      status: 'Líder',
      tipo: 'Membro',
    },
    {
      id: 3,
      imagePerfil: '/images/man6.png',
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
      imagePerfil: '/images/man4.png',
      nomeMembroCelula: 'Washington',
      status: 'Ativo',
      tipo: 'Membro',
    },
    {
      id: 6,
      imagePerfil: '/images/woman3.png',
      nomeMembroCelula: 'Socorro',
      status: 'Ativo',
      tipo: 'Membro',
    },
    {
      id: 7,
      imagePerfil: '/images/man1.avif',
      nomeMembroCelula: 'Willian',
      status: 'Ativo',
      tipo: 'Membro',
    },
    {
      id: 8,
      imagePerfil: '/images/man5.png',
      nomeMembroCelula: 'Magno',
      status: 'Normal',
      tipo: 'Membro',
    },
    {
      id: 9,
      imagePerfil: '/images/woman4.png',
      nomeMembroCelula: 'Karol',
      status: 'Normal',
      tipo: 'Membro',
    },
  ]
  return (
    <>
      <div className="relative mx-auto w-full rounded-xl bg-white px-4 py-2 shadow-lg">
        <div className="w-full px-2 py-2 ">
          <div className="w-full rounded-md px-1 py-2">
            <h2 className="text-lg font-semibold leading-7 text-gray-800">
              Lista de Presença
            </h2>
            <table className="w-full table-auto border-separate border-spacing-y-6">
              <thead>
                <tr className="text-base font-bold ">
                  <th className="border-b-2 border-blue-300 py-2 text-start text-gray-800">
                    Nome
                  </th>
                  <th className="border-b-2 border-orange-300 py-2 text-gray-800">
                    Status
                  </th>
                  <th className="hidden border-b-2 border-indigo-300 py-2 text-gray-800 sm:block">
                    Tipo
                  </th>
                  <th className="border-b-2 border-green-300 py-2 text-gray-800">
                    P
                  </th>
                  <th className="border-b-2 border-red-300 py-2 text-gray-800">
                    F
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                {membrosCelula.map((membro) => (
                  <tr
                    className="border-b border-gray-200 py-8 hover:bg-gray-100/90"
                    key={membro.id}
                  >
                    <td>
                      <div className="flex items-center justify-start gap-3">
                        <Image
                          src={membro.imagePerfil}
                          width={40}
                          height={40}
                          alt={membro.nomeMembroCelula}
                          className={`cursor-pointer rounded-full shadow`}
                        />
                        <h2 className="ml-4">{membro.nomeMembroCelula}</h2>
                      </div>
                    </td>
                    <td className="text-center">
                      <span
                        className={`w-full rounded-md px-2 py-1 text-center ${
                          membro.status === 'Ativo'
                            ? 'border border-green-200 bg-green-100 ring-green-500'
                            : membro.status === 'Líder'
                            ? 'border border-blue-200 bg-blue-100 ring-blue-500'
                            : 'border border-orange-200 bg-orange-100 ring-orange-500'
                        }`}
                      >
                        {membro.status}
                      </span>
                    </td>
                    <td className="mt-2 hidden text-center sm:block">
                      {membro.tipo}
                    </td>

                    <td className="mr-1 text-center">
                      <input
                        id="presente"
                        name={`presenca-${membro.id}`}
                        type="radio"
                        className="h-4 w-4 cursor-pointer border-green-300 text-green-600 focus:ring-green-600"
                      />
                    </td>
                    <td className="ml-1 text-center">
                      <input
                        id="faltou"
                        name={`presenca-${membro.id}`}
                        type="radio"
                        className="h-4 w-4 cursor-pointer border-red-300 text-red-600 focus:ring-red-600"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="mx-auto w-full rounded-md bg-[#014874] px-3 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm duration-100 hover:bg-[#1D70B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#014874]"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
