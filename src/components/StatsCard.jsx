import { Confetti } from '@phosphor-icons/react'

export default function StatsCard() {
  const statusIbb = [
    {
      title: 'Conversões/Mês',
      porcentagem: '+32.48%',
      total: '234',
      status: 'up',
      icon: Confetti,
    },
    {
      title: 'Conversões/Mês',
      porcentagem: '+32.48%',
      total: '234',
      status: 'up',
      icon: Confetti,
    },
    {
      title: 'Conversões/Mês',
      porcentagem: '+32.48%',
      total: '234',
      status: 'up',
      icon: Confetti,
    },
  ]

  return (
    <div className="mt-2 flex items-center  justify-between gap-4">
      {statusIbb.map((stat) => (
        <div key={stat.title} className="flex  gap-4">
          <div className="flex rounded-lg bg-gray-100 p-4 shadow-md">
            <div className="flex items-center">
              <div className="rounded-lg p-2">
                <stat.icon width={24} height={24} />
              </div>
              <span className="text-xs font-medium">{stat.porcentagem}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
