import Sidebar from '../../components/Sidebar'

export default function NovoMembro() {
  return (
    <div>
      <div className="absolute top-0 min-h-[18.75rem] w-screen bg-[#1D70B6]/90"></div>
      <div className="flex h-full bg-slate-100">
        <Sidebar />
        <div className="relative mx-auto w-full px-6 py-4">
          <div className="mx-auto w-full rounded-lg bg-white p-8">
            {/* Incio do Forms */}
            <form action="/dashboard" method="post">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-sm uppercase leading-normal text-gray-400">
                  Informações Pessoais
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Primeiro Nome
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Sobrenome
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
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
                      htmlFor="data-nascimento"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Dt. Nasc.
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="data-nascimento"
                        id="data-nascimento"
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
                        id="sexo"
                        name="sexo"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>M</option>
                        <option>F</option>
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
                        id="escolaridade"
                        name="escolaridade"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>Sem Escolaridade</option>
                        <option>Fundamental Incompleto</option>
                        <option>Fundamental Completo</option>
                        <option>Médio Incompleto</option>
                        <option>Médio Completo</option>
                        <option>Superio Incompleto</option>
                        <option>Superio Completo</option>
                        <option>Pós Graduado</option>
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
                        id="profissao"
                        name="profissao"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

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
                        id="batizado"
                        name="batizado"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>Sim</option>
                        <option>Não</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="data-batismo"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Dt. Batismo
                    </label>
                    <div className="mt-2">
                      <input
                        id="data-batismo"
                        name="data-batismo"
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
                        id="is-discipulado"
                        name="is-discipulado"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>Sim</option>
                        <option>Não</option>
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
                        id="supervisao"
                        name="supervisao"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>Vermelha</option>
                        <option>Azul</option>
                        <option>Verde</option>
                        <option>Amarela</option>
                        <option>Laranja</option>
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
                        id="celula"
                        name="celula"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>Betel</option>
                        <option>Kadosh</option>
                        <option>Rute</option>
                        <option>Confins da Terra</option>
                        <option>Kadosh</option>
                      </select>
                    </div>
                  </div>

                  {/* Escolas Realizadas */}
                  <div className="mt-2 sm:col-span-6">
                    <fieldset>
                      <legend className="block text-sm font-medium leading-6 text-slate-700">
                        Escolas Feitas
                      </legend>
                      <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-x-8">
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="principios"
                              name="principios"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="principios"
                              className="font-medium text-slate-700"
                            >
                              Princípios
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="fundamentos"
                              name="fundamentos"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="fundamentos"
                              className="font-medium text-slate-700"
                            >
                              Fundamentos
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="disicipulos"
                              name="disicipulos"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="disicipulos"
                              className="font-medium text-slate-700"
                            >
                              Discípulos
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="oracao"
                              name="oracao"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="oracao"
                              className="font-medium text-slate-700"
                            >
                              Oração
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  {/* Econtros Realizados */}
                  <div className="mt-2 sm:col-span-6">
                    <fieldset>
                      <legend className="block text-sm font-medium leading-6 text-slate-700">
                        Encontros Realizados
                      </legend>
                      <div className="mt-4 flex flex-wrap items-center justify-normal gap-x-8">
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="econtro-deus"
                              name="econtro-deus"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="econtro-deus"
                              className="font-medium text-slate-700"
                            >
                              Encontro com Deus
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="edd"
                              name="edd"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="edd"
                              className="font-medium text-slate-700"
                            >
                              Econtro de Disc. c/ Deus
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  {/* INFORMAÇÕES CONJUGAIS */}
                  <div className="sm:col-span-6">
                    <hr className="mx-0 my-4 h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-30" />
                    <h2 className="mt-8 text-sm uppercase leading-normal text-gray-400">
                      Informações Conjugais
                    </h2>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="estado-civil"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Estado Civil
                    </label>
                    <div className="mt-2">
                      <select
                        id="estado-civil"
                        name="estado-civil"
                        autoComplete="estado-civil-name"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>Casado(a)</option>
                        <option>Solteiro(a)</option>
                        <option>Viúvo(a)</option>
                        <option>Divórciado(a)</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="conjuge-name"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Nome Conjuge
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="conjuge-name"
                        id="conjuge-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="data-casamento"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Data/Casamento
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="data-casamento"
                        id="data-casamento"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="tem-filho"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Tem Filho?
                    </label>
                    <div className="mt-2">
                      <select
                        id="tem-filho"
                        name="tem-filho"
                        autoComplete="estado-civil-name"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>Sim</option>
                        <option>Não</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="qntd-filho"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Qntd. Filho(s)
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="qntd-filho"
                        id="qntd-filho"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* Informações para Visita */}
                  <div className="sm:col-span-6">
                    <hr className="mx-0 my-4 h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-30" />
                    <h2 className="mt-8 text-sm uppercase leading-normal text-gray-400">
                      Endereço para Visita/Contato
                    </h2>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Cep
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Cidade
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Estado
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-5">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Endereço
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="number-house"
                      className="block text-sm font-medium leading-6 text-slate-700"
                    >
                      Nº
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="number-house"
                        id="number-house"
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
