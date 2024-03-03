"use client";

import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYpos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYpos);
  });
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent "
      } sticky w-full top-0 z-30 transition-all ${
        pathname === "/" && "bg-[#fef9f5]"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Logo />
          <div className="flex gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
