'use client'
import Header from '@/components/Header'
import MainSide from '@/components/MainSide'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Dashboard() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })
  return (
    <>
      <div className="mx-auto w-full px-2 py-2">
        {/* Navbar */}
        <Header session={session} titlePage="Dashboard" />
        <MainSide />
      </div>
    </>
  )
}
