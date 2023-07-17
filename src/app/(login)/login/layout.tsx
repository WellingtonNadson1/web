// import { Providers } from '@/providers/providers'
import React from 'react'
import '../globals.css'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Providers } from '@/providers/providers'

export const metadata = {
  title: 'App IBB',
  description: 'Criado para auxiliar no controle e desenvolvimento da IBB',
}

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    console.log({ message: 'You must be logged in.' })
  }

  if (session) {
    // Signed in
    console.log('Session', JSON.stringify(session, null, 2))
    redirect('/dashboard')
  }
  return (
    <html lang="pt">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
