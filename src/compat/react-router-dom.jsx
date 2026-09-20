'use client';
// Compatibility shim: lets the existing components keep importing from
// 'react-router-dom' while routing is actually handled by Next.js.
// Aliased to the bare specifier 'react-router-dom' in next.config.mjs.
import { useRouter, usePathname, useParams as useNextParams } from 'next/navigation';
import NextLink from 'next/link';
import { useEffect } from 'react';

export function useNavigate() {
  const router = useRouter();
  return (to, opts) => {
    if (typeof to === 'number') {
      // react-router supported navigate(-1); Next uses router.back()
      if (to < 0) router.back();
      else router.forward();
      return;
    }
    if (opts && opts.replace) router.replace(to);
    else router.push(to);
  };
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname, search: '', hash: '', state: null, key: 'default' };
}

export function useParams() {
  return useNextParams() || {};
}

export function Navigate({ to, replace }) {
  const router = useRouter();
  useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [to, replace, router]);
  return null;
}

export function Link({ to, children, ...rest }) {
  return (
    <NextLink href={to} {...rest}>
      {children}
    </NextLink>
  );
}

// No-op passthroughs so any stray router-container imports don't break.
export const BrowserRouter = ({ children }) => children;
export const Routes = ({ children }) => children;
export const Route = () => null;
export const Outlet = ({ children }) => children ?? null;
