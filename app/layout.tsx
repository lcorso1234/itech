import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import DesktopMenu from "@/components/DesktopMenu";
import MobileMenu from "@/components/MobileMenu";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Itech",
  description: "Next.js + Tailwind CSS starter for the Itech project."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="relative min-h-screen pb-36 lg:pb-28">
          <Preloader />
          {children}
          <DesktopMenu />
          <MobileMenu />
        </div>
      </body>
    </html>
  );
}
