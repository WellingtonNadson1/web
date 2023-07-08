'use client'
import Calendar from '@/components/Calendar'
import Header from '@/components/Header'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Eventos() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })
  return (
    <div className="relative mx-auto w-full px-2 py-2">
      <div className="relative mx-auto w-full">
        <Header session={session} titlePage="Eventos" />
      </div>
      <div className="relative mx-auto mb-4 mt-3 w-full px-2">
        <Calendar />
      </div>
    </div>
  )
}
