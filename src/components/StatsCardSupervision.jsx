import { UsersFour } from '@phosphor-icons/react'

export default function StatsCardSupervision() {
  const supervisoesIbb = [
    {
      title: 'Vermelha',
      supervisor: 'Ana Ceila',
      total: '234',
      status: 'up',
      icon: UsersFour,
      color: 'bg-[#F55343]',
      nivel: 'Área',
    },
    {
      title: 'Azul',
      supervisor: 'Zedequias',
      total: '334',
      status: 'up',
      icon: UsersFour,
      color: 'bg-[#43a2f5]',
      nivel: 'Distrito',
    },
    {
      title: 'Amarela',
      supervisor: 'Carlos e Thaisa',
      total: '234',
      status: 'up',
      icon: UsersFour,
      color: 'bg-[#e2de5f]',
      nivel: 'Área',
    },
    {
      title: 'Laranja',
      supervisor: 'Paulo e Patrícia',
      total: '234',
      status: 'up',
      icon: UsersFour,
      color: 'bg-[#f58224]',
      nivel: 'Área',
    },
    {
      title: 'Verde',
      supervisor: 'Alécio e Iraneide',
      total: '234',
      status: 'up',
      icon: UsersFour,
      color: 'bg-[#5fe2c2]',
      nivel: 'Área',
    },
  ]
  return (
    <>
      <div className='className="relative py-2" z-10 mx-auto w-full'>
        <div className="relative z-10 mx-auto mt-3 grid w-full grid-cols-1 flex-wrap items-center justify-between gap-4 p-2 sm:grid-cols-2 md:flex-nowrap">
          {supervisoesIbb.map((stat) => (
            <div
              key={stat.title}
              className={`flex-warp relative w-full cursor-pointer flex-col rounded-lg bg-white p-4 shadow-md hover:bg-white/95`}
            >
              <div className="flex w-full items-center justify-between">
                <div className="mb-0 font-sans text-sm font-semibold uppercase leading-normal">
                  {stat.title}
                </div>
                <div
                  className={`rounded-full ${stat.color} p-2 drop-shadow-md`}
                >
                  <stat.icon width={24} height={24} color="#fff" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold">{stat.supervisor}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-bold leading-normal text-emerald-500">
                  {stat.porcentagem}
                </span>
                <span className="ml-2 text-sm font-bold leading-normal text-gray-500">
                  {stat.nivel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}