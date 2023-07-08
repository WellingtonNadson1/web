'use client'
import Header from '@/components/Header'
import { ICelula } from '@/components/ListCelulas'
import StatsCardSupervision from '@/components/StatsCardSupervision'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
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
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })
  console.log('Id da Supervisao aqui', supervisaoId)

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const URL = `http://localhost:3333/supervisoes/${supervisaoId}`
  const { data: supervisao, error } = useSWR<ISupervisaoData>(URL, fetcher)
  if (error) return <div>failed to load</div>
  if (!supervisao) return <div>loading...</div>

  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        <Header
          session={session}
          titlePage={`${!error}` && `Supervisão ${supervisao.nome}`}
        />
      </div>
      <StatsCardSupervision supervisao={supervisao} />
    </div>
  )
}
