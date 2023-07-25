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
        },
        password: { label: 'Senha', type: 'password' },
      },
      // Implementando autenticação com API propria
      async authorize(credentials, req): Promise<any> {
        const hostname = 'server-lac-nine.vercel.app'
        const URL = `https://${hostname}/login`
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })
        const user = await response.json()

        if (user && response.ok) {
          console.log('User the Auth return: ', user)
          return user
        }
        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // secret: process.env.NEXTAUTH_SCRET,
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
}
