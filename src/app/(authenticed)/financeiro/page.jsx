import Header from '@/components/Header'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Financeiro() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })
  return (
    <div className="mx-auto w-full px-2 py-2">
      <Header session={session} titlePage="Financeiro" />
    </div>
  )
}
