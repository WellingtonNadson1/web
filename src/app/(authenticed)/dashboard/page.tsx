'use client'
import Header from '@/components/Header'
import MainSide from '@/components/MainSide'

export default function Dashboard() {
  return (
    <>
      <div className="mx-auto w-full px-2 py-2">
        {/* Navbar */}
        <Header titlePage="Dashboard" />
        <MainSide />
      </div>
    </>
  )
}
