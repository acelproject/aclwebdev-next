import Image from "next/image";
import React from "react";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} overflow-hidden`}>
      <Image
        src={imgSrc}
        fill
        priority
        alt=""
        className="object-cover rounded-b-[100%]"
      />
    </div>
  );
};

export default DevImg;
