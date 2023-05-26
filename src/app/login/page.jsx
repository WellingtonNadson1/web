import Image from 'next/image'
export default function Login() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F5F7F9]">
      {/* Login Container */}
      <div className="flex max-w-3xl items-center rounded-2xl bg-white p-6 shadow-lg">
        {/* form */}
        <div className="px-6 py-1.5 md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900">Seja Bem-vindo!</h2>
          <p className="mt-2 text-sm text-gray-900">
            Para logar, entre com seus dados.
          </p>

          <div className="mt-8 md:mx-auto md:w-full md:max-w-sm">
            <form className="space-y-5" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Digite seu e-mail"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#014874] sm:text-sm sm:leading-7"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Senha
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Digite sua senha"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#014874] sm:text-sm sm:leading-7"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-x-3">
                  <div className="relative flex">
                    <div className="flex h-6 items-center">
                      <input
                        id="lembrar"
                        name="lembrar"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-[#014874] focus:ring-[#014874]"
                      />
                    </div>
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="lembrar"
                      className="font-medium text-gray-900"
                    >
                      Lembrar
                    </label>
                  </div>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#014874] hover:text-[#1D70B6]"
                  >
                    Esqueceu a Senha?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#014874] px-3 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm duration-100 hover:bg-[#1D70B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#014874]"
                >
                  Entrar
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Não tem uma conta?{' '}
              <a
                href="#"
                className="font-semibold leading-6 text-[#014874] hover:text-[#1D70B6]"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>

        {/* image */}
        <div className="hidden w-1/2 items-center justify-center px-14 md:block">
          <Image
            src="/images/Logo-IBB-Name.svg"
            width={500}
            height={500}
            alt="Logo IBB"
          />
        </div>
      </div>
    </section>
  )
}
