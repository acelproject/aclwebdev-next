import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      {/* <Image src={`/dots/logo.svg`} width={54} height={54} priority alt="logo" /> */}
      <div className="text-3xl dark:text-slate-200 font-bold text-slate-800">
        aclweb<span className="text-primary">Dev.</span>
      </div>
    </Link>
  );
};
