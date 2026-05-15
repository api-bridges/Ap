import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('live31_session')
  const { pathname } = request.nextUrl

  const isDashboard = pathname.startsWith('/dashboard')
  const isLogin = pathname === '/login'

  if (isDashboard && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (session && isLogin) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
