'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Session() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/dashboard')
    },
  })
  return session
}
