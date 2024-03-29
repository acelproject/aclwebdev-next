import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import ImgDev from "./about/ImgDev";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Marchel Lumimpah",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 851 5882 9251",
  },
  {
    icon: <MailIcon size={20} />,
    text: "aclprcjt@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Lahir di Palu, 11 Maret 2000",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Lulus dari STMIK Adhi Guna Palu pada 03 Oktober 2023",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Alamat Jln.Trans Sulawesi,Desa Matako, Kec.Tojo barat, Kab.Tojo una-una",
  },
];

const qualificationData = [
  {
    nama: "education",
    data: [
      {
        sekolah: "SMA Negri 2 POSO",
        jurusan: "IPA",
        tahun: "2015 - 2018",
      },
      {
        sekolah: "STMIK Adhi Guna Palu",
        jurusan: "Sistem Informasi (S1)",
        tahun: "2018 - 2023",
      },
    ],
  },
  {
    nama: "pengalaman",
    data: [
      {
        company: "Rumah Sakit Anutapura",
        posisi: "Fullstack Web Developer",
        tahun: "2020 - 2021",
      },
      {
        company: "Kantor Desa Matako",
        posisi: "Fullstack Web Developer",
        tahun: "2023 - 2024",
      },
    ],
  },
];

const skillData = [
  {
    nama: "skills",
    data: [
      {
        teknologi: "HTML, CSS",
        peran: "Fullstack Web Developer",
        bahasa: "Javascript, Typescript,PHP",
        database: "MySql,MongoDB",
        framework:
          "React js, Next js, Laravel, TailwindCSS, Bootstrap, Shadcn UI, Material UI",
      },
    ],
  },
  {
    nama: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

export const About = () => {
  const getData = (arr: any, tittle: any) => {
    return arr.find((item: any) => item.nama === tittle);
  };
  const { theme } = useTheme();
  // console.log(getData(qualificationData, "education"));
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title  mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <ImgDev />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qual">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* personal */}
              <TabsContent value="personal">Personal</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
