'use client'
import Header from '@/components/Header'
import MainSide from '@/components/MainSide'

export default function Dashboard() {
  return (
    <>
      <div className="relative mx-auto w-full px-4 py-2">
        {/* Navbar */}
        <Header titlePage="Dashboard" />
        <MainSide />
      </div>
    </>
  )
}
