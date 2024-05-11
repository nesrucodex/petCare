"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./logo";

type Props = {};

const ROUTES = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

const Header = (props: Props) => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between border-b border-b-white/10  h-14 ">
      <Logo />
      <nav>
        <ul className="flex items-center gap-3 text-xs md:gap-5">
          {ROUTES.map((route) => (
            <li
              key={route.path}
              className={cn("rounded-sm px-3 py-1 text-white/80", {
                "bg-black/10": pathname === route.path,
              })}
            >
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
