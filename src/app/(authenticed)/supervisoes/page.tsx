'use client'
import Header from '@/components/Header'
import StatsCardSupervisions from '@/components/StatsCardSupervisions'
import Session from '@/contexts/session/session'
import useSWR from 'swr'
import { ISupervisaoData } from './[supervisaoId]/page'

export default function Supervisoes() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const hostname = 'server-lac-nine.vercel.app'
  const URL = `http://${hostname}/supervisoes`
  const { data: supervisoes, error } = useSWR<ISupervisaoData[]>(URL, fetcher)
  console.log(supervisoes)
  if (error) return <div>failed to load</div>
  if (!supervisoes) return <div>loading...</div>

  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        <Header session={Session()} titlePage="Supervisões" />
      </div>
      <StatsCardSupervisions dataSupervision={supervisoes} />
    </div>
  )
}
