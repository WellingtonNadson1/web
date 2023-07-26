import Sidebar from '@/components/Sidebar'
import React from 'react'
import './globals.css'
import { Providers } from '@/providers/providers'
import { authOptions } from '@/app/api/auth/[...nextauth]/auth'
import { redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'
import { getServerSession } from 'next-auth'

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
    console.log({ message: 'You must be logged in.' })
    return redirect('/login', RedirectType.replace)
  }
  return (
    <html lang="pt">
      <body>
        <div className="overflow-x-auto overflow-y-auto">
          <div className="absolute top-0 -z-0 min-h-[18.75rem] w-screen bg-[#1D70B6]/90"></div>
          <div className="flex min-h-screen bg-slate-100">
            <Sidebar />
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
