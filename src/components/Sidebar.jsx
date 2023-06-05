'use client'

import {
  Baby,
  Calendar,
  ChartBar,
  House,
  List,
  Student,
  Users,
  UsersFour,
  Wallet,
} from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'

const sidebar = [
  { name: 'Dashboard', icon: House, href: '/dashboard' },
  { name: 'Novo Memb.', icon: Baby, href: '/novo-membro' },
  { name: 'Células', icon: Users, href: '/celulas' },
  { name: 'Supervisões', icon: UsersFour, href: '/supervisoes' },
  { name: 'Escolas', icon: Student, href: '/escolas' },
  { name: 'Relatórios', icon: ChartBar, href: '/relatorios' },
  { name: 'Eventos', icon: Calendar, href: '/eventos' },
  { name: 'Fincanceiro', icon: Wallet, href: '/financeiro' },
]
export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <aside
        className={`relative h-full ${
          open ? 'w-56' : 'w-16'
        } bg-white px-4  py-6 duration-500`}
      >
        <Image
          src="/images/logo-ibb-1.svg"
          width={54}
          height={54}
          alt="Picture of the author"
          className={`${
            !open ? 'mx-auto' : 'mx-2'
          } transition-all duration-200`}
        />

        <div className="flex justify-end py-3">
          <List
            className={`${
              !open ? 'mx-auto' : 'justify-end'
            } cursor-pointer transition-all duration-200`}
            size={24}
            onClick={() => setOpen(!open)}
          />
        </div>

        <hr className="mt-4 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <ul className="relative flex flex-col gap-y-2 pt-4">
          {sidebar.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="group flex transform cursor-pointer items-center gap-x-2 rounded-md py-2 pl-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:scale-105 hover:bg-[#1D70B6] hover:text-gray-200 focus:outline-none"
              >
                <item.icon width={24} height={24} />
                <span
                  className={`duration-400 whitespace-pre ${
                    !open && 'translate-x-28 overflow-hidden opacity-0'
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`${
                    open && 'hidden'
                  } absolute left-12 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-white p-2 text-xs font-bold text-gray-700 shadow-md transition-all duration-100 group-hover:scale-100`}
                >
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
