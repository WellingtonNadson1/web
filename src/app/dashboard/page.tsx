'use client'
import MainSide from '../../components/MainSide'
import Sidebar from '../../components/Sidebar'

export default function Dashboard() {
  return (
    <div className="overflow-x-auto overflow-y-auto">
      <div className="absolute top-0 min-h-[18.75rem] w-screen bg-[#1D70B6]/90"></div>
      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />
        <MainSide />
      </div>
    </div>
  )
}
