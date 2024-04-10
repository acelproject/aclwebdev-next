"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs-ternery";

import materialUiLogo from "@/public/about/marterialui.png";
import shadcnUiLogo from "@/public/about/shadcn.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaLaravel,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { RiJavascriptFill } from "react-icons/ri";

export function TabsDemo() {
  const tabs = [
    {
      title: "Personal Info",
      value: "personal",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl p-10 font-bold text-slate-700 dark:text-white dark:bg-secondary bg-white border shadow-md">
          <p className="mb-4">
            kualitas layanan tak tertandingi selama lebih dari 3 tahun
          </p>
          <DummyContent
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex sit accusamus iusto quod qui laboriosam id dolor commodi rerum?"
            value="personal"
          />
        </div>
      ),
    },
    {
      title: "Qualification Info",
      value: "qual",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl p-10 font-bold text-slate-700 dark:text-white dark:bg-secondary bg-white border shadow-md">
          <p className="mb-4">My Awesome Journey</p>
          <DummyContent
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius similique beatae. Expedita eaque facere laudantium, repudiandae consequatur iure illo? konten 2"
            value="qual"
          />
        </div>
      ),
    },
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl p-10 font-bold text-slate-700 dark:text-white dark:bg-secondary bg-white border shadow-md">
          <p className="mb-4">Tools I use everyday</p>
          <DummyContent
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti ratione quasi quas, commodi quos."
            value=""
          />
        </div>
      ),
    },
  ];

  return (
    <div className="[perspective:1000px] relative flex flex-col gap-5 md:gap-10 max-w-5xl mx-auto w-full  items-start justify-start ">
      <Tabs
        tabs={tabs}
        activeTabClassName="text-white"
        tabClassName="text-white"
      />
    </div>
  );
}

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
        nama: "HTML , CSS",
        img1: <FaHtml5 className="text-4xl text-orange-500" />,
        img2: <FaCss3Alt className="text-4xl text-blue-500" />,
      },
      {
        nama: "Javascript, Typescript , PHP",
        img1: <RiJavascriptFill className="text-4xl text-yellow-500" />,
        img2: <BiLogoTypescript className="text-4xl text-blue-500" />,
        img3: <FaPhp className="text-4xl text-purple-700" />,
      },
      {
        nama: "MySql , MongoDB",
        img1: <SiMysql className="text-4xl text-sky-800" />,
        img2: <BiLogoMongodb className="text-4xl text-green-600" />,
      },
      {
        nama: "React js, Next js, Laravel, TailwindCSS, Bootstrap, Shadcn UI, Material UI",
        img1: <FaReact className="text-4xl text-blue-400" />,
        img2: <TbBrandNextjs className="text-4xl text-black" />,
        img3: <FaLaravel className="text-4xl text-orange-600" />,
        img4: <SiTailwindcss className="text-4xl text-sky-400" />,
        img5: <FaBootstrap className="text-4xl text-purple-500" />,
        img6: (
          <Image
            src={shadcnUiLogo}
            alt="shadcn"
            width={30}
            height={30}
            className="text-2xl"
          />
        ),
        img7: (
          <Image
            src={materialUiLogo}
            alt="material ui"
            width={30}
            height={30}
          />
        ),
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

const DummyContent = ({ text, value }: { text: string; value: string }) => {
  const getData = (arr: any, tittle: any) => {
    return arr.find((item: any) => item.nama === tittle);
  };
  return (
    <>
      <p className=" max-w-xl mx-auto xl:mx-0 dark:text-slate-300 text-muted-foreground text-lg font-normal mb-8">
        {text}
      </p>
      {value === "personal" && (
        <div>
          <div className="grid xl:grid-cols-2 gap-4 mb-4">
            {infoData.map((item, idx) => (
              <>
                <div
                  key={idx}
                  className="font-normal text-sm flex items-center gap-x-4 xl:mx-0 "
                >
                  <div className="text-primary">{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              </>
            ))}
          </div>
          {/* language */}
          <div className="text-sm font-normal  flex flex-col gap-y-2">
            <div className="text-primary">Languages</div>
            <div className="border-b dark:border-slate-700 border-border"></div>
            <div>Indonesia, English</div>
          </div>
        </div>
      )}
      {value === "qual" && (
        <div className="grid md:grid-cols-2 gap-y-8 -mt-4">
          {/* experience */}
          <div>
            <div className="flex gap-x-2 items-center text-[22px] text-primary my-5">
              <Briefcase />
              <div className="capitalize font-medium">
                {getData(qualificationData, "pengalaman").nama}
              </div>
            </div>
            {/* List */}
            <div className="flex flex-col gap-y-8">
              {getData(qualificationData, "pengalaman").data.map(
                (item: any, i: any) => {
                  const { company, posisi, tahun } = item;
                  return (
                    <div
                      key={i}
                      className="text-sm font-normal flex gap-x-8 group "
                    >
                      <div className="h-[84px] w-[1px] dark:bg-slate-700 bg-border relative ml-2 ">
                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <div className="font-semibold text-xl leading-none">
                          {company}
                        </div>
                        <div className="text-lg leading-none text-muted-foreground mb-4">
                          {posisi}
                        </div>
                        <div className="text-base font-medium ">{tahun}</div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* Education */}
          <div>
            <div className="flex gap-x-2 items-center text-[22px] text-primary my-5">
              <GraduationCap />
              <div className="capitalize font-medium">
                {getData(qualificationData, "education").nama}
              </div>
            </div>
            {/* List */}
            <div className="flex flex-col gap-y-8">
              {getData(qualificationData, "education").data.map(
                (item: any, i: any) => {
                  const { sekolah, jurusan, tahun } = item;
                  return (
                    <div
                      key={i}
                      className="text-sm font-normal flex gap-x-8 group "
                    >
                      <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <div className="font-semibold text-xl leading-none">
                          {sekolah}
                        </div>
                        <div className="text-lg leading-none text-muted-foreground mb-4">
                          {jurusan}
                        </div>
                        <div className="text-base font-medium ">{tahun}</div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
      {value === "" && (
        <div className="flex flex-col gap-y-6">
          <div className="text-sm font-normal flex flex-col gap-y-2">
            <h4 className="text-primary text-xl font-semibold ">
              Fullstack Tools Skills
            </h4>
            <div className="border-b dark:border-slate-700 border-border"></div>
            {/* Skill list */}
            <div className="flex flex-col gap-y-6">
              {getData(skillData, "skills").data.map((item: any, i: any) => {
                const { nama, img1, img2, img3, img4, img5, img6, img7 } = item;
                return (
                  <div
                    className="w-12/12 text-[16px] xl:text-left  xl:mx-0"
                    key={i}
                  >
                    <div className="font-normal">
                      <div className="flex gap-x-2 items-start">
                        <div className=" rounded-full p-1 bg-primary mt-2"></div>
                        <div className="flex flex-col gap-y-2">
                          <div className="text-[17px] text-muted-foreground">
                            {nama}{" "}
                          </div>
                          <div className="flex gap-x-2 items-center">
                            <div>{img1}</div>
                            <div>{img2}</div>
                            <div>{img3}</div>
                            <div>{img4}</div>
                            <div>{img5}</div>
                            <div>{img6}</div>
                            <div>{img7}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
