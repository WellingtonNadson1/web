'use client'
import { FilePdf } from '@phosphor-icons/react'

export default function LicoesCelula() {
  const temaMesCelula = 'Aliança'
  const statusLicoes = [
    {
      title: 'A Colheita da Aliança',
      periodo: '11 a 17 de Jun/2023',
      status: 'ok',
      icon: FilePdf,
      versiculo: '1Re 11:9-13',
    },
    {
      title: 'Deus de Aliança',
      periodo: '04 a 10 de Jun/2023',
      status: 'ok',
      icon: FilePdf,
      versiculo: '1Re 11:9-13',
    },
    {
      title: 'A Colheita da Aliança',
      periodo: '11 a 17 de Jun/2023',
      status: 'pendente',
      icon: FilePdf,
      versiculo: '1Re 11:9-13',
    },
    {
      title: 'Nova Aliança',
      periodo: '25 de Jun a 1º de Jul/2023',
      status: 'pendente',
      icon: FilePdf,
      versiculo: 'Fp 2:22',
    },
  ]

  return (
    <div className="relative z-10 mx-auto flex w-full flex-wrap items-center justify-between md:flex-nowrap">
      <div className="flex-warp relative w-full flex-col rounded-lg bg-white p-4 shadow-md hover:bg-white/95">
        <div className="mb-3 flex flex-col items-start justify-start">
          <h1 className="text-lg font-semibold">Lições</h1>
          <span className="text-base">Tema: {temaMesCelula}</span>
        </div>
        <div className="mb-3 grid cursor-pointer grid-cols-1 gap-4 px-2 py-1 sm:grid-cols-2">
          {statusLicoes.map((stat) => (
            <div
              key={stat.title}
              className="rounded-md bg-gray-50 hover:bg-gray-100/90"
            >
              <div className="p-2 sm:col-span-1">
                <div className="flex w-full items-center justify-between">
                  <div>
                    <div className="mb-0 font-sans text-lg font-semibold uppercase leading-normal">
                      {stat.title}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold">
                          {stat.versiculo}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {stat.status === 'pendente' ? (
                          <span className="text-sm font-bold leading-normal text-red-500">
                            {stat.status}
                          </span>
                        ) : (
                          <span className="text-sm font-bold leading-normal text-emerald-500">
                            {stat.status}
                          </span>
                        )}

                        <span className="ml-2 text-sm font-bold leading-normal text-gray-500">
                          {stat.periodo}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Imagem PDF */}
                  <div
                    className={`h-14 rounded-md bg-gray-900 p-2 drop-shadow-md`}
                  >
                    <stat.icon width={24} height={24} color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
