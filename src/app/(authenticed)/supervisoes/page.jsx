'use client'
import Header from '@/components/Header'
import StatsCardSupervision from '@/components/StatsCardSupervision'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Supervisoes() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })
  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        <Header session={session} titlePage="Supervisões" />
      </div>
      <StatsCardSupervision />
    </div>
  )
}
