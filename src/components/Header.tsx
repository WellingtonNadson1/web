import { authOptions } from '@/app/api/auth/[...nextauth]/auth'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { getServerSession } from 'next-auth'
// import { signIn } from 'next-auth/react'
// import Image from 'next/image'

type HeaderProps = {
  titlePage: string
}

export default async function Header(props: HeaderProps) {
  const toDay = format(new Date(), 'PP', { locale: pt })

  // const { data: session, status } = useSession()

  const session = await getServerSession(authOptions)
  console.log('Header Session Page: ', session)
  console.log('Header Status Page: ')

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
          {/* {session?.user ? ( */}
          <>
            <div>
              <h2 className="hidden text-xs text-gray-700 sm:block">
                Shalom,{' '}
                <span className="font-bold">{session?.user.firstName}</span>
              </h2>
              <p className="hidden text-xs text-gray-700 sm:block">{toDay}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-50">
              {/* <Image
                  src={session.user.image}
                  width={58}
                  height={58}
                  alt="Wellington"
                  className={`cursor-pointer rounded-full shadow`}
                /> */}
            </div>
          </>
          {/* ) : (
            <button className="text-red-400" onClick={() => signIn()}>
              {' '}
              Sign In
            </button>
          )} */}
        </div>
      </nav>
    </>
  )
}
