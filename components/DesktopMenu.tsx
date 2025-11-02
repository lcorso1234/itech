'use client';

import type { FC, ReactNode } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  IconBookmark,
  IconChat,
  IconMegaphone,
  IconShare
} from "./icons";

const labelClasses =
  "flex h-12 items-center rounded-[14px] border border-pink-500/50 px-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition-colors duration-200 hover:border-pink-400 hover:text-white";

const activeClasses =
  "bg-gradient-to-r from-fuchsia-500 via-pink-500 to-fuchsia-500 text-zinc-950 border-transparent shadow-[0_0_20px_rgba(236,72,153,0.35)]";

type PillProps = {
  active?: boolean;
  children: ReactNode;
  href: string;
};

const Pill: FC<PillProps> = ({ active, children, href }) => {
  return (
    <Link
      href={href}
      className={`${labelClasses} ${active ? activeClasses : ""}`}
    >
      {children}
    </Link>
  );
};

const iconButtonClasses =
  "flex h-12 w-12 items-center justify-center rounded-[14px] border border-pink-500/50 bg-zinc-900 text-pink-400 shadow-inner shadow-black/40 transition hover:border-pink-400 hover:text-pink-200";

const iconAccentClasses =
  "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-500 text-white";

type IconButtonProps = {
  accent?: boolean;
  children: ReactNode;
  label: string;
};

const IconButton: FC<IconButtonProps> = ({ accent, children, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      className={`${iconButtonClasses} ${accent ? iconAccentClasses : ""}`}
    >
      {children}
    </button>
  );
};

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Connect", href: "/connect" }
];

const DesktopMenu: FC = () => {
  const pathname = usePathname();
  
  return (
    <nav
      aria-label="Primary"
      className="pointer-events-auto fixed bottom-[18px] left-1/2 z-40 hidden -translate-x-1/2 rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-600 p-[1.5px] shadow-[0_0_40px_rgba(232,121,249,0.35)] lg:flex"
      style={{ borderRadius: '8px' }}
    >
      <div className="flex items-center gap-2 bg-black/80 px-3 py-2 backdrop-blur-xl border border-pink-500/20" style={{ borderRadius: '8px' }}>
        <IconButton label="Collections" accent>
          <IconBookmark />
        </IconButton>
        {menuItems.map((item) => (
          <Pill key={item.label} href={item.href} active={pathname === item.href}>
            {item.label}
          </Pill>
        ))}
        <div className="ml-3 flex items-center gap-2 pl-2">
          <IconButton label="Share" accent>
            <IconShare />
          </IconButton>
          <IconButton label="Announcements" accent>
            <IconMegaphone />
          </IconButton>
          <IconButton label="Messages" accent>
            <IconChat />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
