import React from "react";
import imgDev from "@/public/about/dev-2.png";
import { useTheme } from "next-themes";
import { TabsDemo } from "./TabsDemo";
import DevImg from "./DevImg";



export const About = () => {
  
  const { theme } = useTheme();
  // console.log(getData(qualificationData, "education"));
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title  mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row ">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              imgSrc={imgDev}
              containerStyles={`bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat`}
              imgSize={`w-[505px] h-[505px]`}
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <TabsDemo />
          </div>
        </div>
      </div>
    </section>
  );
};
