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
    <main className="mx-autoh-full relative max-h-full w-full px-6 py-2">
      {/* Navbar */}
      <nav className="duration-250 relative mx-2 flex flex-wrap items-center justify-between rounded-2xl px-0 shadow-none transition-all ease-in lg:flex-nowrap lg:justify-start">
        <div className="flex-wrap-inherit mx-auto flex w-full items-center justify-between">
          {/* Titile Page */}
          <h1 className="text-3xl font-semibold leading-loose text-white">
            Dashboard
          </h1>
        </div>
      </nav>

      <hr className="mt-2 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <StatsCard />
    </main>
  )
}
