import Header from '@/components/Header'
import ListCelulas from '@/components/ListCelulas'

export default function Celulas() {
  return (
    <div className="relative z-10 mx-auto w-full px-2 py-2">
      <div className="relative mx-auto w-full">
        <Header titlePage="Células" />
      </div>

      {/* Presenca */}
      <ListCelulas />
    </div>
  )
}
