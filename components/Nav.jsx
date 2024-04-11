import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// next hooks
import { usePathname, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

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
        <Link
          href={link.path}
          key={i}
          className={`${linkStyles} flex justify-center`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underLineStyles}  -bottom-1 rounded-sm`}
            />
          )}
          {link.name}
        </Link>
      ))}
      {/* {status === "authenticated" ? (
        <Button
          variant="default"
          size="costume"
          className="gap-x-2 px-4 py-2 relative flex items-center"
          onClick={() => signOut()}
        >
          <span className="relative -top-[1px]">Logout</span>
        </Button>
      ) : (
        <Button
          variant="default"
          size="costume"
          className="gap-x-2 px-4 py-2 relative flex items-center"
          onClick={() => signIn()}
        >
          <span className="relative -top-[1px]">Login</span>
        </Button>
      )} */}
    </nav>
  );
};
