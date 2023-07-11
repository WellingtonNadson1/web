'use client'
import Header from '@/components/Header'
// import ListCelulas from '@/components/ListCelulas'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
// import useSWR from 'swr'

export default function Celulas() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })

  // const hostname = 'server-lac-nine.vercel.app'
  // const URL = `http://${hostname}/`
  return (
    <div className="relative z-10 mx-auto w-full px-2 py-2">
      <div className="relative mx-auto w-full">
        <Header session={session} titlePage="Células" />
      </div>

      {/* Presenca */}
      {/* <ListCelulas /> */}
    </div>
  )
}