"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Projects = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
    fetcher
  );

  const projects = {
    data: data?.data,
  };

  return (
    <div className="h-[100vh] md:flex-row flex-col flex justify-center items-center">
      {projects.data?.length &&
        projects.data?.map((item: any, i: any) => (
          <>
            <Link href={`market/detail/${item.id}`} key={i}>
              <div className="bg-blue-950 rounded-md">
                <div>nama: {item.name}</div>
                <div className="text-3xl">Harga: {item.desc}</div>
              </div>
            </Link>
            <div>
              <Link href={`/projects/rahasia`}>Hanya Admin</Link>
            </div>
          </>
        ))}
    </div>
  );
};

export default Projects;
