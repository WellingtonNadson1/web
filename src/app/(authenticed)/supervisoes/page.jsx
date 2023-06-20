'use client'
import Header from '@/components/Header'
import StatsCardSupervision from '@/components/StatsCardSupervision'

export default function Supervisoes() {
  return (
    <div className="mx-auto w-full py-2">
      <div className="mx-auto w-full px-1">
        <Header titlePage="Supervisões" />
      </div>
      <StatsCardSupervision />
    </div>
  )
}
