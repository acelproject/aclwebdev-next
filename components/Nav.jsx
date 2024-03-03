import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// next hooks
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact Me",
  },
];

export const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, i) => (
        <Link href={link.path} key={i} className={`${linkStyles}`}>
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underLineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
