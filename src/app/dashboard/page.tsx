'use client'
import MainSide from '../../components/MainSide'
import Sidebar from '../../components/Sidebar'

export default function Dashboard() {
  return (
    <div>
      <div className="absolute top-0 min-h-[18.75rem] w-screen bg-[#1D70B6]"></div>
      <div className="flex h-screen bg-slate-100">
        <Sidebar />
        <MainSide />
      </div>
    </div>
  )
}
