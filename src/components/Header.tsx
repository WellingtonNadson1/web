import { authOptions } from '@/app/api/auth/[...nextauth]/auth'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

type TitlePage = {
  titlePage: string
}

export default async function Header(props: TitlePage) {
  const toDay = format(new Date(), 'PP', { locale: pt })

  const session = await getServerSession(authOptions)
  console.log('Session Header: ', JSON.stringify(session))

  return (
    <>
      <nav className="relative z-10 mx-2 mt-3 flex items-center justify-between rounded-full bg-white p-1 shadow-none">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between">
          {/* Titile Page */}
          <h1 className="px-3 text-xl font-semibold leading-relaxed text-gray-800">
            {props.titlePage}
          </h1>
        </div>
        <div className="flex w-1/2 items-center justify-end gap-2 sm:w-1/2 sm:gap-8">
          <div>
            <h2 className="hidden text-xs text-gray-700 sm:block">
              Shalom,{' '}
              <span className="font-bold">{session?.user?.firstName}</span>
            </h2>
            <p className="hidden text-xs text-gray-700 sm:block">{toDay}</p>
          </div>
          {session?.user?.photoPerfil ? (
            <div className="h-10 w-10 rounded-full bg-gray-50">
              <Image
                src={session.user.photoPerfil}
                width={58}
                height={58}
                alt="Wellington"
                className={`cursor-pointer rounded-full shadow`}
              />
            </div>
          ) : (
            <div className="h-10 w-10 rounded-full bg-gray-50">fail</div>
          )}
        </div>
      </nav>
    </>
  )
}
