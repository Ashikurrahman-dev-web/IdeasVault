import { NextResponse } from 'next/server';
import { auth } from './lib/auth'; 

export async function proxy(request) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers 
        });

        const { pathname } = request.nextUrl;

        
if (
  !session &&
  (
    pathname === '/addidea' ||
    pathname === '/myideas' ||
    pathname === '/myinteractions' ||
    pathname.startsWith('/idea/')
  )
) {
  const loginUrl = new URL('/login', request.url);

  loginUrl.searchParams.set('redirect', pathname);

  return NextResponse.redirect(loginUrl);
}

  return NextResponse.next();       
    } catch (e) {
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/addidea',
        '/myideas',
        '/myinteractions',
        '/idea/:path*'
    ],
};