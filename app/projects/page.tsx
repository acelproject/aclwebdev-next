"use client";
import ProjectCard from "@/components/ProjectCard";
// import { useSession } from "next-auth/react";
import { useState } from "react";

// import useSWR from "swr";
const projectsData = [
  {
    img: "/work/1.png",
    category: "next js",
    title: "Website SMP Negri 2 Tojo Barat",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cummaiores!",
    link: "/",
    github: "/",
  },
  {
    img: "/work/2.png",
    category: "next js",
    title: "Website Desa Matako",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    img: "/work/3.png",
    category: "laravel",
    title: "Website RSUD Anutapura Palu",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas !",
    link: "/",
    github: "/",
  },
  {
    img: "/work/4.png",
    category: "react js",
    title: "Toko Online",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. !",
    link: "/",
    github: "/",
  },
  {
    img: "/work/4.png",
    category: "laravel",
    title: "Sistem Perpustakaan",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. !",
    link: "/",
    github: "/",
  },
];

// remove category duplicate
const uniqueCategory = [
  "all projects",
  ...new Set(projectsData.map((item: any) => item.category)),
];

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Projects = () => {
  // const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
  //   fetcher
  // );

  // const projects = {
  //   data: data?.data,
  // };

  const [category, setCategory] = useState(uniqueCategory);

  return (
    // <div className="h-[100vh] md:flex-row flex-col flex justify-center items-center">
    //   {projects.data?.length &&
    //     projects.data?.map((item: any, i: any) => (
    //       <>
    //         <Link href={`market/detail/${item.id}`} key={i}>
    //           <div className="bg-blue-950 rounded-md">
    //             <div>nama: {item.name}</div>
    //             <div className="text-3xl">Harga: {item.desc}</div>
    //           </div>
    //         </Link>
    //         <div>
    //           <Link href={`/projects/rahasia`}>Hanya Admin</Link>
    //         </div>
    //       </>
    //     ))}
    // </div>

    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
      </div>
    </section>
  );
};

export default Projects;
