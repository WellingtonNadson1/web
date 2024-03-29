'use client'
import ListCelulas, { ICelula } from '@/components/ListCelulas'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useSWR from 'swr'

interface Celula {
  id: string
  nome: string
  lider: {
    id: string
    firstName: string
  }
}

interface FetchError extends Error {
  status?: number
}

interface User {
  id: string
  firstName?: string
}

// interface ILiderData {
//   id: string
// }

// interface ISupervisaoData {
//   id: string
// }

// interface IMember {
//   id: string
//   name: string
// }

interface Inputs {
  cep: string
  cidade: string
  date_inicio: string
  date_multipicar: string
  endereco: string
  estado: string
  lider: {
    id: string
  }
  nome: string
  numero: string
  supervisao: {
    id: string
  }
  membros?: User[]
}

export interface SupervisaoData {
  id: string
  nome: string
  celulas: Celula[]
  User: User[]
}

export default function Celulas() {
  const hostname = 'server-lac-nine.vercel.app'
  const URLSupervisoes = `https://${hostname}/supervisoes`
  const URLCelulas = `https://${hostname}/celulas`

  const { data: session } = useSession()
  const [isLoadingSubmitForm, setIsLoadingSubmitForm] = useState(false)
  const { register, handleSubmit, setValue } = useForm<Inputs>()

  const handleLiderChange = (selectedLiderId: string) => {
    // Update the form value for lider.id using setValue
    setValue('lider.id', selectedLiderId)
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.lider = { id: data.lider.id }
    data.supervisao = { id: data.supervisao.id }
    const memberArray = data.membros?.map((membro) => {
      return { id: membro }
    }) as User[] | undefined
    data.membros = memberArray

    const formatDatatoISO8601 = (dataString: string) => {
      const dataObj = new Date(dataString)
      return dataObj.toISOString()
    }

    data.date_inicio = formatDatatoISO8601(data.date_inicio)
    data.date_multipicar = formatDatatoISO8601(data.date_multipicar)

    console.log('Lider: ', data.lider)
    console.log('Data: ', data)
    console.log('Data Membros New: ', memberArray)

    setIsLoadingSubmitForm(true)
    const URL = `https://${hostname}/celulas`
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.user.token}`,
      },
      body: JSON.stringify({
        data,
      }),
    })
    setIsLoadingSubmitForm(false)
  }

  const [supervisaoSelecionada, setSupervisaoSelecionada] = useState<string>()

  async function fetchWithToken(url: string, token: string) {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const error: FetchError = new Error('Failed to fetch data with token.')
        error.status = response.status
        throw error
      }

      const data = await response.json()
      return data
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error while fetching data with token:', error.message)
        throw error
      } else {
        console.error('Unknown error occurred:', error)
        throw new Error('Unknown error occurred.')
      }
    }
  }

  const {
    data: supervisoes,
    error,
    isValidating,
    isLoading,
  } = useSWR<SupervisaoData[]>(
    [URLSupervisoes, `${session?.user.token}`],
    ([url, token]: [string, string]) => fetchWithToken(url, token),
  )

  const { data: celulas } = useSWR<ICelula[]>(
    [URLCelulas, `${session?.user.token}`],
    ([url, token]: [string, string]) => fetchWithToken(url, token),
  )

  if (isValidating) {
    console.log('Is Validating', isValidating)
  }

  if (error)
    return (
      <div className="mx-auto w-full px-2 py-2">
        <div className="mx-auto w-full">
          <div>failed to load</div>
        </div>
      </div>
    )

  if (isLoading)
    return (
      <div className="mx-auto w-full px-2 py-2">
        <div className="mx-auto flex w-full items-center gap-2">
          <div className="text-white">carregando...</div>
        </div>
      </div>
    )

  if (!isLoading) {
    console.log('Seguem as Supervisões do Cadastro', supervisoes)
  }

  const handleSupervisaoSelecionada = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSupervisaoSelecionada(event.target.value)
  }

  const usersFiltrados = supervisoes?.find(
    (supervisao) => supervisao.id === supervisaoSelecionada,
  )?.User

  return (
    <>
      {/* Cadastrar Nova Célula */}
      <div className="relative mx-auto w-full px-2 py-2">
        <div className="flex justify-between">
          <div className="relative mx-auto px-2 py-7">
            <div className="mx-auto rounded-lg bg-white p-6">
              {/* Incio do Forms */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-sm uppercase leading-normal text-gray-400">
                    Cadastro de Célula
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                    <div className="sm:col-span-4">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="membros"
                          className="block text-sm font-medium leading-6 text-slate-700"
                        >
                          Membros
                        </label>
                        <div className="mt-3">
                          <select
                            {...register('membros')}
                            multiple={true}
                            id="membros"
                            name="membros"
                            className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          >
                            {supervisoes &&
                              usersFiltrados?.map((membro) => (
                                <option key={membro.id} value={membro.id}>
                                  {membro.firstName}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="nome"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Nome da Célula
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('nome')}
                          type="text"
                          name="nome"
                          id="nome"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="date_inicio"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Dt. Início
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('date_inicio')}
                          type="datetime-local"
                          name="date_inicio"
                          id="date_inicio"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="date_multipicar"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Dt. para Multiplicação
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('date_multipicar')}
                          type="datetime-local"
                          name="date_multipicar"
                          id="date_multipicar"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  {/* INFORMAÇÕES DO REINO */}
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="supervisao.id"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Supervisão
                      </label>
                      <div className="mt-3">
                        <select
                          {...register('supervisao.id')}
                          id="supervisao.id"
                          name="supervisao.id"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          onChange={handleSupervisaoSelecionada}
                        >
                          {supervisoes &&
                            supervisoes?.map((supervisao) => (
                              <option key={supervisao.id} value={supervisao.id}>
                                {supervisao.nome}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="lider.id"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Líder
                      </label>
                      <div className="mt-3">
                        <select
                          {...register('lider.id')}
                          id="lider.id"
                          name="lider.id"
                          onChange={(e) => handleLiderChange(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        >
                          {supervisoes &&
                            usersFiltrados?.map((lider) => (
                              <option key={lider.id} value={lider.id}>
                                {lider.firstName}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Informações para Localização */}
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <hr className="mx-0 my-4 h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-30" />
                      <h2 className="mt-8 text-sm uppercase leading-normal text-gray-400">
                        Endereço da Célula
                      </h2>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="cep"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Cep
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('cep')}
                          type="text"
                          name="cep"
                          id="cep"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="cidade"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Cidade
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('cidade')}
                          type="text"
                          name="cidade"
                          id="cidade"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="estado"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Estado
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('estado')}
                          type="text"
                          name="estado"
                          id="estado"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-5">
                      <label
                        htmlFor="endereco"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Endereço
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('endereco')}
                          type="text"
                          name="endereco"
                          id="endereco"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="numero"
                        className="block text-sm font-medium leading-6 text-slate-700"
                      >
                        Nº
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('numero')}
                          type="text"
                          name="numero"
                          id="numero"
                          className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Botões para submeter Forms */}
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="px-3 py-2 text-sm font-semibold text-slate-700 hover:rounded-md hover:bg-red-500 hover:px-3 hover:py-2 hover:text-white"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={isLoadingSubmitForm}
                      className="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                      {isLoadingSubmitForm ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full px-2 py-2">
        {isLoading ? (
          <pre>Loading...</pre>
        ) : (
          celulas && <ListCelulas data={celulas} />
        )}
      </div>
    </>
  )
}
