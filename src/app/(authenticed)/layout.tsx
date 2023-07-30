import Sidebar from '@/components/Sidebar'
import React from 'react'
import './globals.css'
import { Providers } from '@/providers/providers'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/auth'
import { RedirectType } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'
import Header from '@/components/Header'

export const metadata = {
  title: 'App IBB',
  description: 'Criado para auxiliar no controle e desenvolvimento da IBB',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    // Signed in
    console.log(session)
    return redirect('/login', RedirectType.replace)
  }
  return (
    <html lang="pt">
      <body>
        <div className="overflow-x-auto overflow-y-auto">
          <div className="absolute top-0 -z-0 min-h-[18.75rem] w-screen bg-[#1D70B6]/90"></div>
          <div className="flex min-h-screen bg-slate-100">
            <Sidebar />
            <div className="mx-auto w-full px-2 py-2">
              <Header titlePage="Dashboard" />
              <Providers>{children}</Providers>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
