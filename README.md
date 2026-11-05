# CROWN Properties

CROWN Properties member portal foundation. The original HTML prototype is preserved at `public/crown-prototype.html`.

## Stack
- Next.js 16 App Router
- React 19
- Supabase Auth with cookie-based SSR using `@supabase/ssr`

## Local setup
1. Install Node.js 20.9 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. In Supabase Dashboard > Project Settings > API Keys, copy the Project URL and the **publishable** key into `.env.local`.
5. Run `npm run dev` and open http://localhost:3000.

Do not put a Supabase secret/service-role key in any `NEXT_PUBLIC_*` variable or browser code. Never commit `.env.local`.

## Authentication
- `/login`: email/password sign-in and email-confirmation signup
- `/auth/callback`: PKCE email confirmation exchange
- `/dashboard`: server-verified protected page using `getClaims()`
- `/auth/signout`: server-side sign-out
- `proxy.js`: refreshes SSR auth cookies

The Supabase project must have Email provider enabled and the site's production URL plus local development URL configured in Auth URL Configuration.

## Current scope
This is the authentication foundation, not a finished financial/task system. Wallet values, payments, package purchases, withdrawals, task rewards and admin actions are intentionally not fabricated or enabled. They require schema-specific server-side workflows, RLS review and payment-provider verification.
