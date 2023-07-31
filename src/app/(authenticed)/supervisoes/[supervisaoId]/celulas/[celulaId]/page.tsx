'use client'
import Calendar from '@/components/Calendar'
import ControlePresenca from '@/components/ControlePresenca'
// import Header from '@/components/Header'
import LicoesCelula from '@/components/LicoesCelula'
import { ICelula } from '@/components/ListCelulas'
import { useParams } from 'next/navigation'
import useSWR from 'swr'

export default function ControleCelulaSupervision({
  params: { celulaId },
}: {
  params: { celulaId: string }
}) {
  console.log(useParams())
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const hostname = 'server-lac-nine.vercel.app'
  const URL = `https://${hostname}/celulas/${celulaId}`
  const { data, error } = useSWR<ICelula>(URL, fetcher)
  console.log('dataCelula', data)
  if (error) {
    return <div>Erro na requisiçãoo</div>
  }

  return (
    <div className="relative mx-auto w-full px-2 py-2">
      <div className="relative mx-auto w-full">
        {/* <Header titlePage={`Célula ${data?.nome}`} /> */}
      </div>
      <div className="relative mx-auto mb-4 mt-3 w-full px-2">
        <Calendar />
      </div>
      <div className="relative mx-auto mb-4 w-full px-2">
        <LicoesCelula />
      </div>
      <div className="relative mx-auto mb-4 w-full px-2">
        <ControlePresenca />
      </div>
    </div>
  )
}
