import { Menu, Transition } from '@headlessui/react'
import { Bell } from '@phosphor-icons/react'
import Image from 'next/image'
import { Fragment } from 'react'

const userNavigation = [
  { name: 'Meu Perfil', href: '#' },
  { name: 'Configurações', href: '#' },
  { name: 'Sair', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainSide() {
  return (
    <main className="focus:outiline-none relative z-0 flex-1">
      <div className="flex h-16 flex-shrink-0 items-center justify-end bg-sky-700 px-10 py-7">
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className="rounded-full bg-sky-700 p-1 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-700"
            >
              <span className="sr-only">View notifications</span>
              <Bell size={24} aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-sky-700 text-sm ring-1 ring-gray-50 hover:ring-indigo-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-700">
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    width={8}
                    height={8}
                    src="/images/Logo-IBB-Name.svg"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      <div className="mt-4 px-8">
        <h2 className="page-title">Células</h2>
        <p className="text-sm font-medium text-gray-500">
          Relação de células, cadastro, controle e outros
        </p>
      </div>
      <div className="container relative mx-auto px-4 ">
        <div className="grid gap-4 px-8 py-4 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-64 w-60 rounded-2xl border border-gray-300">01</div>
          <div className="h-64 w-60 rounded-2xl border border-gray-300">02</div>
          <div className="h-64 w-60 rounded-2xl border border-gray-300">03</div>
          <div className="h-64 w-60 rounded-2xl border border-gray-300">04</div>
          <div className="h-64 w-60 rounded-2xl border border-gray-300">05</div>
          <div className="h-64 w-60 rounded-2xl border border-gray-300">06</div>
          <div className="h-64 w-60 rounded-2xl border border-gray-300">07</div>
        </div>
      </div>
    </main>
  )
}
