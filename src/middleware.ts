import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: import('next/server').NextRequest) {
    return intlMiddleware(request);
}

export const config = {
    matcher: ['/', '/(fr|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
