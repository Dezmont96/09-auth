import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const privateRoutes = ['/profile', '/notes'];
const authRoutes = ['/sign-in', '/sign-up'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const cookieStore = await cookies(); 
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const isPrivateRoute = privateRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.includes(pathname);
  
  if (!accessToken && isPrivateRoute) {
    if (refreshToken) {
      try {
        const response = await fetch(new URL('/api/auth/session', request.url), {
          headers: {
            'Cookie': `refreshToken=${refreshToken}`,
          },
        });
        
        if (response.ok) {
          const newHeaders = new Headers(request.headers);
          const setCookieHeader = response.headers.get('set-cookie');

          if (setCookieHeader) {
            newHeaders.set('Cookie', setCookieHeader);
          }
          
          const nextResponse = NextResponse.next({
            request: {
              headers: newHeaders,
            },
          });
          
          if (setCookieHeader) {
            nextResponse.headers.set('set-cookie', setCookieHeader);
          }

          return nextResponse;
        }
      } catch (e) {
        console.error('Session refresh failed in middleware:', e);
      }
    }
    
    const redirectUrl = new URL('/sign-in', request.url);
    redirectUrl.searchParams.set('redirectedFrom', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/notes/:path*', '/sign-in', '/sign-up'],
};