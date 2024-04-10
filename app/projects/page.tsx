"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useSession } from "next-auth/react";
import { useState } from "react";

// import useSWR from "swr";
const projectsData = [
  {
    img: "/work/1.png",
    category: "next js",
    name: "Website SMP Negri 2 Tojo Barat",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cummaiores!",
    link: "/",
    github: "/",
  },
  {
    img: "/work/2.png",
    category: "next js",
    name: "Website Desa Matako",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    img: "/work/3.png",
    category: "laravel",
    name: "Website RSUD Anutapura Palu",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas !",
    link: "/",
    github: "/",
  },
  {
    img: "/work/4.png",
    category: "react js",
    name: "Toko Online",
    value: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. !",
    link: "/",
    github: "/",
  },
  {
    img: "/work/4.png",
    category: "laravel",
    name: "Sistem Perpustakaan",
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

  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");

  console.log(category);

  const filteredProject = projectsData.filter((project: any) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });


 console.log(filteredProject);
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

    <section className="min-h-screen py-28">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category}>
          <TabsList className="w-full grid  h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((cate, i) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(cate)}
                  key={i}
                  value={cate}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {cate}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProject.map((project,i)=>(
              <TabsContent value={category} key={i}>
                <ProjectCard project={project}/>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
