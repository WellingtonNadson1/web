'use client'
import Header from '@/components/Header'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Relatorios() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })
  return (
    <div className="mx-auto w-full px-2 py-2">
      <Header session={session} titlePage="Relatórios" />
    </div>
  )
}
