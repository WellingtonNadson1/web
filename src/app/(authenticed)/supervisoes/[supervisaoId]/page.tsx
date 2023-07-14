'use client'
import { Providers } from '@/providers/supervisao'
import Header from '@/components/Header'
import { ICelula } from '@/components/ListCelulas'
import StatsCardSupervision from '@/components/StatsCardSupervision'
import useSWR from 'swr'

interface IUser {
  id: string
  firstName: string
}

interface ISupervisor {
  id: string
  firstName: string
}

export interface ISupervisaoData {
  id: string
  nome: string
  cor: string
  supervisor: ISupervisor
  nivel: string
  User: IUser[]
  celulas: ICelula[]
}

export default function Supervisao({
  params: { supervisaoId },
}: {
  params: { supervisaoId: string }
}) {
  console.log('Id da Supervisao aqui', supervisaoId)

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const hostname = 'server-lac-nine.vercel.app'
  const URL = `http://${hostname}/supervisoes/${supervisaoId}`
  const { data: supervisao, error } = useSWR<ISupervisaoData>(URL, fetcher)
  if (error) return <div>failed to load</div>
  if (!supervisao) return <div>loading...</div>

  return (
    <Providers>
      <div className="mx-auto w-full px-2 py-2">
        <div className="mx-auto w-full">
          <Header titlePage={`${!error}` && `Supervisão ${supervisao.nome}`} />
        </div>
        <StatsCardSupervision supervisao={supervisao} />
      </div>
    </Providers>
  )
}
