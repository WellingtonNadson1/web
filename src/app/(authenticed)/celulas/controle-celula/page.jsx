import Calendar from '@/components/Calendar'
import ControlePresenca from '@/components/ControlePresenca'
import Header from '@/components/Header'
import LicoesCelula from '@/components/LicoesCelula'

export default function ControleCelula() {
  return (
    <div className="relative mx-auto w-full px-2 py-2">
      <div className="relative mx-auto w-full px-2 py-2">
        <Header titlePage="Cont. de Célula" />
      </div>
      <div className="relative mx-auto mb-2 w-full">
        <Calendar />
      </div>
      <div className="relative mx-auto mb-2 w-full">
        <LicoesCelula />
      </div>
      <div className="relative mx-auto mb-2 w-full">
        <ControlePresenca />
      </div>
    </div>
  )
}
