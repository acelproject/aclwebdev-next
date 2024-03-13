"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Projects = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else {
      if (session !== undefined && session?.user.role !== "admin") {
        router.push("/");
      }
    }
  }, [router, status, session?.user.role, session]);

  return <div className="pt-20">Projects</div>;
};

export default Projects;
