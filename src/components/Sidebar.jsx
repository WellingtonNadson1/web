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
  { name: 'Dashboard', icon: House },
  { name: 'Novo Memb.', icon: Baby },
  { name: 'Células', icon: Users },
  { name: 'Supervisões', icon: UsersFour },
  { name: 'Escolas', icon: Student },
  { name: 'Relatórios', icon: ChartBar },
  { name: 'Eventos', icon: Calendar },
  { name: 'Fincanceiro', icon: Wallet },
]
export default function Sidebar() {
  return (
    <div>
      <aside className="w-64 border-r border-gray-200 px-8 py-6">
        <Image
          src="/images/Logo-IBB-Name.svg"
          width={54}
          height={54}
          alt="Picture of the author"
        />
        <div className="pt-6">
          <hr className="border-gray-300" />
        </div>
        <ul className="flex flex-col gap-y-5 pt-10">
          {sidebar.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className="group flex items-center gap-x-4 rounded py-2 pl-2 text-gray-500 hover:bg-[#1D70B6] hover:text-gray-200"
              >
                <span className="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-[#014874] transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100" />
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
