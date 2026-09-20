'use client';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from '@/components/ScrollToTop';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StickyQuoteBtn from '@/components/StickyQuoteBtn';

export default function AppShell({ children }) {
  const pathname = usePathname();
  const showFooter = pathname !== '/contact';
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      {children}
      {showFooter && <SiteFooter />}
      <StickyQuoteBtn />
      <Analytics />
    </>
  );
}
