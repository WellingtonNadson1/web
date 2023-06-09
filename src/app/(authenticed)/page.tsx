'use client'
import { signIn, signOut } from 'next-auth/react'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#F7F6F9]">
      <header className="items-center">
        <h1 className="h-12 bg-white px-4 py-3 drop-shadow-[0_0_2px_rgba(0,0,0,0.15)]">
          App IBB
        </h1>
        <h2>Perfil</h2>
        <section className="min-h-screen bg-gray-100 p-4">
          <button onClick={() => signIn()}>Sign In</button>
          <button onClick={() => signOut()}>Sign Out</button>
        </section>
      </header>
    </main>
  )
}
