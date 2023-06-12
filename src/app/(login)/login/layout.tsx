import React from 'react'

export const metadata = {
  title: 'App IBB',
  description: 'Criado para auxiliar no controle e desenvolvimento da IBB',
}

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
