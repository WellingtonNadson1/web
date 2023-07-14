'use client'
import { ISupervisaoData } from '@/app/(authenticed)/supervisoes/[supervisaoId]/page'
import { useSupervisaoContext } from '@/contexts/supervisao/supervisao'
import { UsersFour } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'

export default function StatsCardSupervisions() {
  const router = useRouter()
  const i = useSupervisaoContext()
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const hostname = 'server-lac-nine.vercel.app'
  const URL = `http://${hostname}/supervisoes`
  const { data: supervisoes, error } = useSWR<ISupervisaoData[]>(URL, fetcher)
  console.log(supervisoes)
  if (error)
    return (
      <div className="mx-auto w-full px-2 py-2">
        <div className="mx-auto w-full">
          <div>failed to load</div>
        </div>
      </div>
    )
  if (!supervisoes)
    return (
      <div className="mx-auto w-full px-2 py-2">
        <div className="mx-auto flex w-full items-center gap-2">
          <div className="absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 transform ">
            <div className="h-64 w-64 animate-spin  rounded-full border-8 border-solid border-blue-400 border-t-transparent"></div>
          </div>
          <div className="text-white">loading...</div>
        </div>
      </div>
    )
  console.log('Este é o I: ', i)

  const handleSupervisaoSelecionada = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    const id = event.currentTarget.id
    console.log('Esta aqui o ID clicado', id)
    router.push(`/supervisoes/${id}`)
  }

  return (
    <>
      <div className="relative z-10 mx-auto w-full py-2">
        <div className="relative z-10 mx-auto mt-3 grid w-full grid-cols-1 flex-wrap items-center justify-between gap-4 p-2 sm:grid-cols-2 md:flex-nowrap">
          {supervisoes?.map((supervisao) => (
            <div
              onClick={handleSupervisaoSelecionada}
              key={supervisao.id}
              id={supervisao.id}
              className={`flex-warp relative w-full cursor-pointer flex-col rounded-lg bg-white p-4 shadow-md hover:bg-white/95`}
            >
              <div className="flex w-full items-center justify-between">
                <div className="mb-0 font-sans text-sm font-semibold uppercase leading-normal">
                  {supervisao.nome}
                </div>
                <div
                  className={`rounded-full ${supervisao.cor} p-2 drop-shadow-md`}
                >
                  <UsersFour width={24} height={24} color="#fff" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold">
                  {supervisao.supervisor?.firstName}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-bold leading-normal text-emerald-500">
                  {supervisao.nivel}
                </span>
                <span className="ml-2 text-sm font-bold leading-normal text-gray-500">
                  {supervisao.nivel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
