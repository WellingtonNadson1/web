import type { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Senha', type: 'password' },
        name: {
          label: 'Nome',
          type: 'text',
          placeholder: 'Seu Nome de Usuário',
        },
      },
      async authorize(credentials, req): Promise<any> {
        const user = {
          email: 'admin@admin.com',
          password: '123456',
          name: 'Wellington Nadson',
        }
        return user
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  // secret: process.env.NEXTAUTH_SCRET,
  pages: {
    signIn: '/login',
  },
}
