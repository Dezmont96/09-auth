import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const privateRoutes = ['/profile', '/notes'];
const authRoutes = ['/sign-in', '/sign-up'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));
  const isPrivateRoute = privateRoutes.some(route => pathname.startsWith(route));

  if (!accessToken && isPrivateRoute) {
    if (refreshToken) {
      try {
        const response = await fetch(new URL('/api/auth/session', request.url), {
          headers: {
            'Cookie': `refreshToken=${refreshToken}`,
          },
        });
        
        if (response.ok) {
          const nextResponse = NextResponse.next();
          const setCookieHeaders = response.headers.getSetCookie();

          setCookieHeaders.forEach((cookie) => {
            nextResponse.headers.append('Set-Cookie', cookie);
          });
          
          return nextResponse;
        }
      } catch (e) {
        console.error('Session refresh failed in middleware:', e);
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