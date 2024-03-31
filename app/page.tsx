"use client";
import { useRouter } from "next/navigation";
import Hero from "../components/Hero";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { About } from "../components/About";
import Services from "@/components/Services";

export default function Home() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //   } else {
  //     if (session !== undefined && session?.user.role !== "admin") {
  //       router.push("/login");
  //     }
  //   }
  // }, [router, status, session?.user.role, session]);
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
