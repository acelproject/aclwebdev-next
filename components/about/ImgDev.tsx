import Image from "next/image";
import React from "react";
import img from "@/public/about/dev-2.png";

const ImgDev = () => {
  return (
    <div className="overflow-hidden bg-about_svg rounded-full w-[500px] h-[500px]">
      <Image src={img} alt="" />
    </div>
  );
};

export default ImgDev;
