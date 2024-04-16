"use client";

import React from "react";
import { Button } from "./ui/button";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    img: "/work/1.png",
    category: "next js",
    name: "Website SMP Negri 2 Tojo Barat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cummaiores!",
    link: "/",
    github: "/",
  },
  {
    img: "/work/2.png",
    category: "next js",
    name: "Website Desa Matako",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    img: "/work/3.png",
    category: "laravel",
    name: "Website Desa Matako",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas !",
    link: "/",
    github: "/",
  },
  {
    img: "/work/4.png",
    category: "react js",
    name: "Toko Online",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. !",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 mt-12 md:mt-20">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center">
          <h2 className="section-title mb-4 md:text-start text-center md:mx-0 mx-auto ">Latest Projects</h2>
          <p className="subtitle mb-8">
            I've created a few project while i was learning about fullstack website development and all of project i'll explain below.
          </p>
          <Link href={`/projects`}>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 3 projets for the slides */}
            {projectsData.slice(0.3).map((project, i) => {
              return (
                <SwiperSlide key={i}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
