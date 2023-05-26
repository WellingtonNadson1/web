'use client'

import { Calendar, Graph, ShoppingBag, Wallet } from '@phosphor-icons/react'
import Image from 'next/image'

const sidebar = [
  { name: 'Shopping', icon: ShoppingBag },
  { name: 'Analytics', icon: Graph },
  { name: 'Payout', icon: Wallet },
  { name: 'Schedule', icon: Calendar },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans text-gray-900">
      <aside className="w-64 border-r border-gray-200 px-10 py-6">
        <Image
          src="/images/Logo-IBB-Name.svg"
          width={54}
          height={54}
          alt="Picture of the author"
        />
        <ul className="flex flex-col gap-y-6 pt-20">
          {sidebar.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className="group flex items-center gap-x-4 py-2 text-gray-500 hover:text-indigo-500"
              >
                <span className="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-indigo-600 transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100" />
                <item.icon width={24} height={24} className="fill-current" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
