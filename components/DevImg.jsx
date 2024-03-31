import Image from "next/image";
import React from "react";

const DevImg = ({ containerStyles, imgSrc, imgSize }) => {
  return (
    <div className={`${containerStyles} overflow-hidden`}>
      <Image
        src={imgSrc}
        alt=""
        width={505}
        height={505}
        className={`object-cover rounded-b-[100%] ${imgSize}`}
      />
    </div>
  );
};

export default DevImg;
