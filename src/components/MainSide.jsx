import StatsCard from '../components/StatsCard'

// const userNavigation = [
//   { name: 'Meu Perfil', href: '#' },
//   { name: 'Configurações', href: '#' },
//   { name: 'Sair', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function MainSide() {
  return (
    <main className="relative z-10 mx-auto h-full w-full px-6 py-2">
      {/* Navbar */}
      <nav className="relative mx-2 flex items-center justify-between rounded-2xl px-0 shadow-none">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between">
          {/* Titile Page */}
          <h1 className="text-3xl font-semibold leading-loose text-white">
            Dashboard
          </h1>
        </div>
        <div className="flex w-1/2 items-center justify-end gap-2 sm:w-1/2 sm:gap-8">
          <p className="hidden text-xs text-gray-200 sm:block">
            terça, 06/06/23
          </p>
          <div className="h-10 w-10 rounded-full bg-gray-50 ring-1 ring-gray-600"></div>
        </div>
      </nav>

      <hr className="mt-2 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <StatsCard />
      <div className="mx-auto flex items-center justify-between px-2 py-4">
        <div className="m-2 h-96 w-1/2 rounded-md bg-white/95 shadow"></div>
        <div className="h-96 w-1/2 rounded-md bg-white/95 shadow"></div>
      </div>
    </main>
  )
}
