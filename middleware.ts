import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { parse } from 'cookie';
import { checkServerSession } from './lib/api/serverApi';

const privateRoutes = ['/profile', '/notes'];
const authRoutes = ['/sign-in', '/sign-up'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
  const isPrivateRoute = privateRoutes.some((route) => pathname.startsWith(route));

  if (!accessToken && isPrivateRoute) {
    if (refreshToken) {
      try {
        const data = await checkServerSession(); 
        const setCookieHeader = data.headers['set-cookie'];

        if (setCookieHeader) {
          const response = NextResponse.next();
          response.headers.set('set-cookie', Array.isArray(setCookieHeader) ? setCookieHeader.join(', ') : setCookieHeader);
          return response;
        }
      } catch (error) {
        console.error('Middleware session refresh failed', error);
      }
    }

    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/notes/:path*', '/sign-in', '/sign-up'],
};