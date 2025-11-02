'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-400/20 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-8">
        <Link href="/" className="font-mono text-xl font-bold uppercase tracking-wider">
          <span className="text-cyan-400">i</span>
          <span className="text-pink-400">Tech</span>
        </Link>

        <div className="flex gap-8 font-mono text-sm uppercase tracking-wider">
          <Link
            href="/"
            className={`transition-colors hover:text-cyan-400 ${
              isActive('/') ? 'text-cyan-400' : 'text-slate-400'
            }`}
          >
            [Home]
          </Link>
          <Link
            href="/about"
            className={`transition-colors hover:text-pink-400 ${
              isActive('/about') ? 'text-pink-400' : 'text-slate-400'
            }`}
          >
            [About]
          </Link>
          <Link
            href="/work"
            className={`transition-colors hover:text-green-400 ${
              isActive('/work') ? 'text-green-400' : 'text-slate-400'
            }`}
          >
            [Work]
          </Link>
          <Link
            href="/connect"
            className={`transition-colors hover:text-cyan-400 ${
              isActive('/connect') ? 'text-cyan-400' : 'text-slate-400'
            }`}
          >
            [Connect]
          </Link>
        </div>
      </div>
    </nav>
  );
}
