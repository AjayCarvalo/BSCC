'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Topbar from '@/components/topbar';
import Bottombar from '@/components/bottombar';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Topbar />}
      {!isAdmin && <Navbar />}

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {!isAdmin && <Footer />}
      {!isAdmin && <Bottombar />}
    </>
  );
}
