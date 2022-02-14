import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
import { NextApiRequest } from 'next'
import { NextURL } from 'next/dist/server/web/next-url'

interface NextRequest extends NextApiRequest {
  nextUrl: NextURL
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Token exist if user is logged in
  const token = await getToken({ req, secret: `${process.env.JWT_SECRET}` })

  if (pathname.includes('/login') && token) {
    console.log('2')
    return NextResponse.redirect('/')
  }

  // 1 É uma requisicao para next-auth session & provider fetching
  // 2 Ou se tem token
  if (pathname.includes('/api/auth') || token) {
    console.log('1')

    return NextResponse.next()
  }

  // Redirecionar para login se nao tiver token e proteger rota
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login')
  }
}
