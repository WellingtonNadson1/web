import MainSide from '@/components/MainSide'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <>
      <div className="mx-auto w-full px-2 py-2">
        <div>{session?.user.firstName}</div>
        <MainSide />
      </div>
    </>
  )
}
