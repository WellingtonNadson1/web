'use client'
// import Header from '@/components/Header'
import { ICelula } from '@/components/ListCelulas'
import StatsCardSupervision from '@/components/StatsCardSupervision'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

interface IUser {
  id: string
  firstName: string
}

interface ISupervisor {
  id: string
  firstName: string
}

export interface ISupervisaoData {
  id: string
  nome: string
  cor: string
  supervisor: ISupervisor
  nivel: string
  User: IUser[]
  celulas: ICelula[]
}

export default function Supervisao({
  params: { supervisaoId },
}: {
  params: { supervisaoId: string }
}) {
  console.log('Id da Supervisao aqui', supervisaoId)
  const { data: session } = useSession()

  const hostname = 'server-lac-nine.vercel.app'
  const URL = `https://${hostname}/supervisoes/${supervisaoId}`

  function fetchWithToken(url: string, token: string) {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data
      })
  }

  const {
    data: supervisao,
    error,
    isValidating,
    isLoading,
  } = useSWR<ISupervisaoData>(
    [URL, `${session?.user.token}`],
    ([url, token]: [string, string]) => fetchWithToken(url, token),
  )

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (isValidating) {
    console.log('Is Validating', isValidating)
  }

  return (
    <div className="mx-auto w-full px-2 py-2">
      <div className="mx-auto w-full">
        {/* <Header titlePage={`${!error}` && `Supervisão ${supervisao.nome}`} /> */}
      </div>
      <StatsCardSupervision supervisao={supervisao} />
    </div>
  )
}
