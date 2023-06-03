import { ChartLineUp, Confetti, HandsPraying } from '@phosphor-icons/react'

export default function StatsCard() {
  const statusIbb = [
    {
      title: 'Conversões/Mês',
      porcentagem: '+32.48%',
      total: '234',
      status: 'up',
      icon: HandsPraying,
      color: 'bg-[#6074E1]',
      destaq: ' o último mês',
    },
    {
      title: 'Conversões/Ano',
      porcentagem: '+72.48%',
      total: '334',
      status: 'up',
      icon: Confetti,
      color: 'bg-[#F55343]',
      destaq: ' o último ano',
    },
    {
      title: 'Frequência',
      porcentagem: '+52.48%',
      total: '234',
      status: 'up',
      icon: ChartLineUp,
      color: 'bg-[#5fe2c2]',
      destaq: ' o último culto',
    },
  ]

  return (
    <div className="mx-auto mt-4 flex w-full items-center justify-between gap-4 p-2">
      {statusIbb.map((stat) => (
        <div
          key={stat.title}
          className="flex-warp w-full cursor-pointer flex-col rounded-lg bg-white p-4 shadow-md hover:bg-white/95"
        >
          <div className="flex w-full items-center justify-between">
            <div className="mb-0 font-sans text-sm font-semibold uppercase leading-normal">
              {stat.title}
            </div>
            <div className={`rounded-full ${stat.color} p-2`}>
              <stat.icon width={24} height={24} color="#fff" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-semibold">{stat.total}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-bold leading-normal text-emerald-500">
              {stat.porcentagem}
            </span>
            <span className="ml-2 text-sm font-bold leading-normal text-gray-500">
              desde {stat.destaq}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
