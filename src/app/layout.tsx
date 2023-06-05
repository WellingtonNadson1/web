import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { NextAuthProvider } from './Provider'

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
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
