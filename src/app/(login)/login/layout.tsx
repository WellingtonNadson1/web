import { Providers } from '@/providers/supervisao/providers'
import React from 'react'
import '../globals.css'

export const metadata = {
  title: 'App IBB',
  description: 'Criado para auxiliar no controle e desenvolvimento da IBB',
}

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
