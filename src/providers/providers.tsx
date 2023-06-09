'use client'
import { SupervisaoProvider } from '@/contexts/supervisao/supervisao'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <SupervisaoProvider>{children}</SupervisaoProvider>
      </SessionProvider>
    </>
  )
}
