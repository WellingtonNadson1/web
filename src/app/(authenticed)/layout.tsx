import { Providers } from '@/Providers/supervisao'
import Sidebar from '@/components/Sidebar'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App IBB',
  description: 'Criado para auxiliar no controle e desenvolvimento da IBB',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
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
