'use client'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useSWR from 'swr'

interface Inputs {
  firstName: string
  lastName: string
  cpf: string
  dateNasc: Date
  sexo: string
  email: string
  telefone: string
  escolaridade: string
  profissao: string
  batizado: string
  dateBatizado: Date
  isDiscipulado: string
  discipulador: string
  supervisao: string
  celula: string
  escolaPrincipios?: string
  escolaFundamentos?: string
  escolaDisicipulos?: string
  escolaOracao?: string
  encontroDeus?: string
  encontroDD?: string
  estadoCivil?: string
  nomeConjuge?: string
  dateCasamento?: Date
  hasFilho?: string
  quantidadeFilho?: number
  cep: string
  cidade: string
  estado: string
  endereco: string
  numberHouse: string
}

interface Celula {
  id: string
  nome: string
}

export interface SupervisaoData {
  id: string
  nome: string
  celulas: Celula[]
}

export default function NovoMembro() {
  const hostname = 'server-lac-nine.vercel.app'
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const URL = `https://${hostname}/users`
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const URL = `http://${hostname}/supervisoes`
  const { data: supervisoes, isLoading } = useSWR<SupervisaoData[]>(
    URL,
    fetcher,
  )
  console.log('Seguem as Supervisões do Cadastro', supervisoes)

  const [supervisaoSelecionada, setSupervisaoSelecionada] = useState<string>()

  const handleSupervisaoSelecionada = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSupervisaoSelecionada(event.target.value)
  }

  const celulasFiltradas = supervisoes?.find(
    (supervisao) => supervisao.id === supervisaoSelecionada,
  )?.celulas

  return (
    <div className="relative mx-auto w-full px-2 py-2">
      <Header titlePage="Novo Membro" />
      <div className="flex justify-between">
        <div className="relative mx-auto px-2 py-7">
          <div className="mx-auto rounded-lg bg-white p-6">
            {/* Incio do Forms */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="/dashboard"
              method="post"
            >
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-sm uppercase leading-normal text-gray-400">
                  Informações Pessoais
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Primeiro Nome
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('firstName')}
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Sobrenome
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('lastName')}
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="cpf"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      CPF
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('cpf')}
                        type="text"
                        name="cpf"
                        id="cpf"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="dateNasc"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Dt. Nasc.
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('dateNasc')}
                        type="date"
                        name="dateNasc"
                        id="dateNasc"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="sexo"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Sexo
                    </label>
                    <div className="mt-2">
                      <select
                        {...register('sexo')}
                        id="sexo"
                        name="sexo"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option value={'M'}>M</option>
                        <option value={'F'}>F</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Endereço de Email
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('email')}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Telefone
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('telefone')}
                        id="telefone"
                        name="telefone"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="escolaridade"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Escolaridade
                    </label>
                    <div className="mt-3">
                      <select
                        {...register('escolaridade')}
                        id="escolaridade"
                        name="escolaridade"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option value={'Sem Escolaridade'}>
                          Sem Escolaridade
                        </option>
                        <option value={'Fundamental Incompleto'}>
                          Fundamental Incompleto
                        </option>
                        <option value={'Fundamental Completo'}>
                          Fundamental Completo
                        </option>
                        <option value={'Médio Incompleto'}>
                          Médio Incompleto
                        </option>
                        <option value={'Médio Completo'}>Médio Completo</option>
                        <option value={'Superio Incompleto'}>
                          Superio Incompleto
                        </option>
                        <option value={'Superio Completo'}>
                          Superio Completo
                        </option>
                        <option value={'Pós Graduado'}>Pós Graduado</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="profissao"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Profissão
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('profissao')}
                        id="profissao"
                        name="profissao"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                {/* INFORMAÇÕES DO REINO */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <hr className="mx-0 my-4 h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-30" />
                    <h2 className="mt-8 text-sm uppercase leading-normal text-gray-400">
                      Informações do Reino
                    </h2>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="batizado"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Batizado
                    </label>
                    <div className="mt-3">
                      <select
                        {...register('batizado')}
                        id="batizado"
                        name="batizado"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option value={'Sim'}>Sim</option>
                        <option value={'Nao'}>Não</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="dateBatizado"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Dt. Batismo
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('dateBatizado')}
                        id="dateBatizado"
                        name="dateBatizado"
                        type="date"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="is-discipulado"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Discipulado
                    </label>
                    <div className="mt-3">
                      <select
                        {...register('isDiscipulado')}
                        id="is-discipulado"
                        name="is-discipulado"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option value={'Sim'}>Sim</option>
                        <option value={'Nao'}>Não</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="discipulador"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Discipulador
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('discipulador')}
                        id="discipulador"
                        name="discipulador"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="supervisao"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Supervisão
                    </label>
                    <div className="mt-3">
                      <select
                        {...register('supervisao')}
                        id="supervisao"
                        name="supervisao"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        onChange={handleSupervisaoSelecionada}
                      >
                        {!isLoading &&
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
                      htmlFor="celula"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Célula
                    </label>
                    <div className="mt-3">
                      <select
                        {...register('celula')}
                        id="celula"
                        name="celula"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        {!isLoading &&
                          celulasFiltradas?.map((celula) => (
                            <option key={celula.id} value={'Betel'}>
                              {celula.nome}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Escolas Realizadas */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="mt-2 sm:col-span-6">
                    <fieldset>
                      <legend className="block text-sm font-medium leading-6 text-slate-700">
                        Escolas Feitas
                      </legend>
                      <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-x-8">
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              {...register('escolaPrincipios')}
                              id="escolaPrincipios"
                              name="escolaPrincipios"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="escolaPrincipios"
                              className="font-medium text-slate-700"
                            >
                              Princípios
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              {...register('escolaFundamentos')}
                              id="escolaFundamentos"
                              name="escolaFundamentos"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="escolaFundamentos"
                              className="font-medium text-slate-700"
                            >
                              Fundamentos
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              {...register('escolaDisicipulos')}
                              id="escolaDisicipulos"
                              name="escolaDisicipulos"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="escolaDisicipulos"
                              className="font-medium text-slate-700"
                            >
                              Discípulos
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              {...register('escolaOracao')}
                              id="escolaOracao"
                              name="escolaOracao"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="escolaOracao"
                              className="font-medium text-slate-700"
                            >
                              Oração
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                {/* Econtros Realizados */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="mt-2 sm:col-span-6">
                    <fieldset>
                      <legend className="block text-sm font-medium leading-6 text-slate-700">
                        Encontros Realizados
                      </legend>
                      <div className="mt-4 flex flex-wrap items-center justify-normal gap-x-8">
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              {...register('encontroDeus')}
                              id="encontroDeus"
                              name="encontroDeus"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="encontroDeus"
                              className="font-medium text-slate-700"
                            >
                              Encontro com Deus
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              {...register('encontroDD')}
                              id="encontroDD"
                              name="encontroDD"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="encontroDD"
                              className="font-medium text-slate-700"
                            >
                              Econtro de Disc. c/ Deus
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                {/* INFORMAÇÕES CONJUGAIS */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <hr className="mx-0 my-4 h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-30" />
                    <h2 className="mt-8 text-sm uppercase leading-normal text-gray-400">
                      Informações Conjugais
                    </h2>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="estadoCivil"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Estado Civil
                    </label>
                    <div className="mt-2">
                      <select
                        {...register('estadoCivil')}
                        id="estadoCivil"
                        name="estadoCivil"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option value={'Casado'}>Casado(a)</option>
                        <option value={'Solteiro'}>Solteiro(a)</option>
                        <option value={'Viuvo'}>Viúvo(a)</option>
                        <option value={'Divorciado'}>Divórciado(a)</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="nomeConjuge"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Nome Conjuge
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('nomeConjuge')}
                        type="text"
                        name="nomeConjuge"
                        id="nomeConjuge"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="dateCasamento"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Data/Casamento
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('dateCasamento')}
                        type="date"
                        name="dateCasamento"
                        id="dateCasamento"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="hasFilho"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Tem Filho?
                    </label>
                    <div className="mt-2">
                      <select
                        {...register('hasFilho')}
                        id="hasFilho"
                        name="hasFilho"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option value={'Sim'}>Sim</option>
                        <option value={'Nao'}>Não</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="quantidadeFilho"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Qntd. Filho(s)
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('quantidadeFilho')}
                        type="text"
                        name="quantidadeFilho"
                        id="quantidadeFilho"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                {/* Informações para Visita */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <hr className="mx-0 my-4 h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-30" />
                    <h2 className="mt-8 text-sm uppercase leading-normal text-gray-400">
                      Endereço para Visita/Contato
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
                      htmlFor="numberHouse"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Nº
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('estado')}
                        type="text"
                        name="numberHouse"
                        id="numberHouse"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
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
                  className="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
