import {
  Baby,
  Calendar,
  ChartBar,
  House,
  Student,
  Users,
  UsersFour,
  Wallet,
} from '@phosphor-icons/react'
import Image from 'next/image'

const sidebar = [
  { name: 'Dashboard', icon: House, href: '/dashboard' },
  { name: 'Novo Memb.', icon: Baby, href: '/novo-mebro' },
  { name: 'Células', icon: Users, href: '/celulas' },
  { name: 'Supervisões', icon: UsersFour, href: '/supervisoes' },
  { name: 'Escolas', icon: Student, href: '/escolas' },
  { name: 'Relatórios', icon: ChartBar, href: '/relatorios' },
  { name: 'Eventos', icon: Calendar, href: '/eventos' },
  { name: 'Fincanceiro', icon: Wallet, href: '/financeiro' },
]
export default function Sidebar() {
  return (
    <div>
      <aside className="h-screen w-64 border-r border-gray-200 px-4 py-4">
        <Image
          src="/images/Logo-IBB-Name.svg"
          width={54}
          height={54}
          alt="Picture of the author"
          className="mx-2"
        />
        <div className="pt-4">
          <hr className="border-gray-300" />
        </div>
        <ul className="flex flex-col gap-y-2 pt-4">
          {sidebar.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="group flex transform cursor-pointer items-center gap-x-2 rounded-md py-2 pl-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:scale-105 hover:bg-[#1D70B6] hover:text-gray-200 focus:outline-none"
              >
                {/* <span className="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-[#014874] transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100" /> */}
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
