'use client'
import MainSide from '../../components/MainSide'

export default function Dashboard() {
  return (
    <div className="overflow-x-auto overflow-y-auto">
      <div className="flex min-h-screen bg-slate-100">
        <MainSide />
      </div>
    </div>
  )
}
