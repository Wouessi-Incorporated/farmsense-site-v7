import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Only redirect from root
  if (pathname === '/') {
    const acceptLang = req.headers.get('accept-language') || '';
    const primary = acceptLang.split(',')[0] || '';
    const lower = primary.toLowerCase();
    const locale = lower.startsWith('fr') ? 'fr' : 'en';
    const url = new URL(`/${locale}`, req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};