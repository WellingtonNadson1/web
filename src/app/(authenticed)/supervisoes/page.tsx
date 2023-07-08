'use client'
import Header from '@/components/Header'
import StatsCardSupervisions from '@/components/StatsCardSupervisions'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import useSWR from 'swr'
import { ISupervisaoData } from './[supervisaoId]/page'

export default function Supervisoes() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const URL = 'http://localhost:3333/supervisoes'
  const { data: supervisoes, error } = useSWR<ISupervisaoData[]>(URL, fetcher)
  console.log(supervisoes)
  if (error) return <div>failed to load</div>
  if (!supervisoes) return <div>loading...</div>

  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        <Header session={session} titlePage="Supervisões" />
      </div>
      <StatsCardSupervisions dataSupervision={supervisoes} />
    </div>
  )
}
