"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Projects = () => {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  const [myData, setMyData] = useState([{}]);

  console.log(myData);

  // const { data, error } = useSWR("http://localhost:3000/api/products", fetcher);
  useEffect(() => {
    fetch("http://localhost:3000/api/products", {
      cache: "no-store",
      // next: {
      //   // revalidate: 10
      //   tags: ["products"],
      // },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("gagal memuat data");
        }

        return res.json();
      })
      .then((data) => {
        return setMyData(data);
      });
  }, []);

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
      {myData?.data?.map((item, i) => (
        <Link href={`market/detail/${item.id}`} key={i}>
          {/* <Image src={item.img} alt="" width={300} height={200} priority /> */}
          <div>nama: {item.name}</div>
          <div className="text-3xl">Harga: {item.desc}</div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
