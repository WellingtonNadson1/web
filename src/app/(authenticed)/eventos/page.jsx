import Calendar from '@/components/Calendar'
import Header from '@/components/Header'

export default function Eventos() {
  return (
    <div className="w-full">
      <div className="relative mx-auto w-full px-2 py-2">
        <Header titlePage="Eventos" />
      </div>
      <div className="relative mx-auto px-2 py-2">
        <Calendar />
      </div>
    </div>
  )
}
