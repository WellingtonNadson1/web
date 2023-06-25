'use client'
import Header from '@/components/Header'
import StatsCardEscolas from '@/components/StatsCardEscolas'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Escolas() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })
  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        <Header session={session} titlePage="Escolas" />
      </div>
      <StatsCardEscolas />
    </div>
  )
}
