"use client";

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconMegaphone, IconShare } from "./icons";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Connect", href: "/connect" }
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-sm lg:hidden">
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-[90px] h-[360px] rounded-[160px] bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.75),rgba(249,115,22,0.65)_45%,transparent_70%)] blur-3xl transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
      <div className="flex min-h-[520px] flex-col justify-end">
        {open ? (
          <div className="mb-24 flex justify-center">
            <div className="pointer-events-auto w-[82%] rounded-3xl border border-white/40 bg-white/[0.12] p-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-lg shadow-[0_25px_60px_rgba(236,72,153,0.35)]">
              <div className="grid grid-cols-2 gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl border py-3 text-center transition ${
                      pathname === item.href
                        ? 'border-pink-400 bg-pink-500/20'
                        : 'border-white/30 bg-white/[0.08] hover:border-white/50 hover:bg-white/[0.16]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        <div className="relative flex items-end justify-center">
          <div className="pointer-events-none absolute -top-8 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-white/50 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          <div className="pointer-events-auto flex w-full items-center justify-between border border-pink-500/20 bg-black/80 px-6 py-5 backdrop-blur-xl shadow-[0_-20px_40px_rgba(10,10,10,0.6)]" style={{ borderRadius: '8px 8px 0 0' }}>
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 text-white shadow-[0_12px_30px_rgba(236,72,153,0.45)] transition active:scale-95"
              aria-label="Share"
            >
              <IconShare />
            </button>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-12 min-w-[110px] items-center justify-center rounded-2xl border border-white/45 bg-white/[0.08] text-xs font-semibold uppercase tracking-[0.3em] text-white/90 shadow-[0_12px_30px_rgba(255,255,255,0.18)] transition hover:border-white/65 hover:bg-white/[0.18] active:scale-95"
            >
              Menu
            </button>
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 text-white shadow-[0_12px_30px_rgba(236,72,153,0.45)] transition active:scale-95"
              aria-label="Announcements"
            >
              <IconMegaphone />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
