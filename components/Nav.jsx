import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// next hooks
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

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
  const { status } = useSession();
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
      {status === "authenticated" ? (
        <button className="bg-primary" onClick={() => signOut()}>
          Logout
        </button>
      ) : (
        <button className="bg-primary" onClick={() => signIn()}>
          Login
        </button>
      )}
    </nav>
  );
};
