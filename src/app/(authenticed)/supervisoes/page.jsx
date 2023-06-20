'use client'
import Header from '@/components/Header'
import StatsCardSupervision from '@/components/StatsCardSupervision'

export default function Supervisoes() {
  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        <Header titlePage="Supervisões" />
      </div>
      <StatsCardSupervision />
    </div>
  )
}
