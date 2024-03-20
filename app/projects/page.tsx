"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Projects = () => {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, fetcher);

  const projects = {
    data: data?.data,
  };

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //   }
  //   // else {
  //   //   if (session !== undefined && session?.user.role !== "admin") {
  //   //     router.push("/");
  //   //   }
  //   // }
  // }, [router, status, session?.user.role, session]);

  return (
    <div className="pt-20 md:flex-row flex-col flex justify-center items-center">
      {projects.data?.length &&
        projects.data?.map((item:any, i:any) => (
          <Link href={`market/detail/${item.id}`} key={i}>
            <div>nama: {item.name}</div>
            <div className="text-3xl">Harga: {item.desc}</div>
          </Link>
        ))}
    </div>
  );
};

export default Projects;
