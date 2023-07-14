import Header from '@/components/Header'
import StatsCardSupervisions from '@/components/StatsCardSupervisions'

export default function Supervisoes() {
  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        <Header titlePage="Supervisões" />
      </div>
      <StatsCardSupervisions />
    </div>
  )
}
