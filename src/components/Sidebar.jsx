'use client'

import {
  Baby,
  Calendar,
  ChartBar,
  House,
  Student,
  Users,
  UsersFour,
  Wallet,
  X,
} from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'

const sidebar = [
  { name: 'Dashboard', icon: House, href: '/dashboard' },
  { name: 'Novo Memb.', icon: Baby, href: '/novo-membro' },
  { name: 'Supervisões', icon: UsersFour, href: '/supervisoes' },
  { name: 'Células', icon: Users, href: '/celulas' },
  { name: 'Escolas', icon: Student, href: '/escolas' },
  { name: 'Relatórios', icon: ChartBar, href: '/relatorios' },
  { name: 'Eventos', icon: Calendar, href: '/eventos' },
  { name: 'Fincanceiro', icon: Wallet, href: '/financeiro' },
]
export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="shadow">
      <aside
        className={`relative h-full ${
          open ? 'w-56' : 'w-20'
        } bg-white px-4  py-6 duration-500`}
      >
        <a href="/dashboard">
          <Image
            src="/images/logo-ibb-1.svg"
            width={54}
            height={54}
            alt="logo ibb"
            className={`cursor-pointer ${
              !open ? 'mx-auto' : 'mx-2'
            } transition-all duration-200`}
          />
        </a>

        <div
          className={`absolute top-[3.9rem] z-50 flex cursor-pointer justify-end rounded-full border border-[#014874] bg-[#3e98e1] p-1.5 text-3xl text-white duration-500 hover:rounded-full hover:bg-slate-400/90 hover:fill-white ${
            open ? 'ml-[12.2rem]' : 'ml-[3.2rem] rotate-45'
          } `}
          onClick={() => setOpen(!open)}
        >
          <X
            className={`${
              !open ? 'mx-auto' : 'justify-end'
            } transition-all duration-200`}
            size={14}
          />
        </div>

        <hr className="mt-7 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <ul className="relative flex flex-col gap-y-2 pt-4">
          {sidebar.map((item) => (
            <li key={item.name} className="z-50">
              <a
                href={item.href}
                className="group flex transform cursor-pointer items-center gap-x-2 rounded-md py-2 pl-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:scale-105 hover:bg-[#1D70B6] hover:fill-current hover:text-gray-200 focus:outline-none"
              >
                <item.icon
                  className={`${!open ? 'w-screen' : ''}`}
                  width={`${open ? 24 : 26}`}
                  height={`${open ? 24 : 26}`}
                />
                <span
                  className={`whitespace-pre duration-150 ${
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
