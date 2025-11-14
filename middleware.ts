import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const privateRoutes = ['/profile', '/notes'];
const authRoutes = ['/sign-in', '/sign-up'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const isPrivateRoute = privateRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.includes(pathname);

  if (!accessToken) {
    if (refreshToken && isPrivateRoute) {
      try {
        const response = await fetch(new URL('/api/auth/session', request.url), {
          headers: {
            'Cookie': `refreshToken=${refreshToken}`,
          },
        });
        
        if (response.ok) {
          const newHeaders = new Headers(response.headers);
          const nextResponse = NextResponse.next({ request: { headers: newHeaders } });
          const setCookie = response.headers.get('set-cookie');
          if (setCookie) {
            nextResponse.headers.set('set-cookie', setCookie);
          }
          return nextResponse;
        }
      } catch (e) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
      }
    }
    
    if (isPrivateRoute) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }

  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};