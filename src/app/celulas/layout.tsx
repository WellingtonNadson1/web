import Sidebar from '@/components/Sidebar'
import React from 'react'

export const metadata = {
  title: 'App IBB',
  description: 'Criado para auxiliar no controle e desenvolvimento da IBB',
}

export default async function CelulasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="overflow-x-auto overflow-y-auto">
      <div className="absolute top-0 -z-0 min-h-[18.75rem] w-screen bg-[#1D70B6]/90">
        {' '}
      </div>
      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}
