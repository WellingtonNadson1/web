import Header from '@/components/Header'
import StatsCardEscolas from '@/components/StatsCardEscolas'

export default function Escolas() {
  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        <Header titlePage="Escolas" />
      </div>
      <StatsCardEscolas />
    </div>
  )
}
