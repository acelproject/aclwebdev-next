"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
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

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    // else {
    //   if (session !== undefined && session?.user.role !== "admin") {
    //     router.push("/");
    //   }
    // }
  }, [router, status, session?.user.role, session]);

  return (
    <div className="pt-20 flex justify-center items-center">
      {myData?.data?.map((item, i) => (
        <div key={i}>{item.nama}</div>
      ))}
    </div>
  );
};

export default Projects;
