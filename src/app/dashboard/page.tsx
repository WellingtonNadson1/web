'use client'
import MainSide from '../../components/MainSide'
import Sidebar from '../../components/Sidebar'

export default function Dashboard() {
  return (
    <div className="flex w-full flex-1 bg-gray-50 font-sans text-gray-900">
      <Sidebar />
      <MainSide />
    </div>
  )
}
