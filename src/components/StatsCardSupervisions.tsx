'use client'
import { ISupervisaoData } from '@/app/(authenticed)/supervisoes/[supervisaoId]/page'
import { UsersFour } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import useSWR from 'swr'

export default async function StatsCardSupervisions() {
  const [count, setCount] = useState(1)
  useEffect(() => {
    setCount(count + 1)
    console.log('O estado count foi atualizado:', count)
  }, [count])

  const router = useRouter()
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const hostname = 'server-lac-nine.vercel.app'
  const URL = `https://${hostname}/supervisoes`
  const {
    data: supervisoes,
    error,
    isLoading,
  } = useSWR<ISupervisaoData[]>(URL, fetcher)
  console.log(supervisoes)
  if (error)
    return (
      <div className="mx-auto w-full px-2 py-2">
        <div className="mx-auto w-full">
          <div>failed to load</div>
        </div>
      </div>
    )
  if (isLoading)
    return (
      <div className="mx-auto w-full px-2 py-2">
        <div className="mx-auto flex w-full items-center gap-2">
          <div className="text-white">carregando...</div>
        </div>
      </div>
    )

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
