import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
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

  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (isPrivateRoute && !accessToken && refreshToken) {
    try {
      const result = await checkServerSession();
      const setCookieHeader = result.headers['set-cookie'];

      if (setCookieHeader) {
        const redirect = NextResponse.redirect(request.url);

        if (Array.isArray(setCookieHeader)) {
          setCookieHeader.forEach((cookieStr) => {
            redirect.headers.append('set-cookie', cookieStr);
          });
        } else {
          redirect.headers.set('set-cookie', setCookieHeader);
        }

        return redirect;
      }
    } catch (error) {}
  }

  if (isPrivateRoute && !accessToken && !refreshToken) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/notes/:path*', '/sign-in', '/sign-up'],
};
