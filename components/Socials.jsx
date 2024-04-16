"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
  RiTiktokFill,
  RiInstagramFill,
} from "react-icons/ri";
import React from "react";
import Link from "next/link";

const icons = [
  {
    path: "https://www.instagram.com/aclwebdev?igsh=MTJ4emw2cm0xNHk0NA==",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.tiktok.com/@aclwebdev?_t=8lZobmk6RRX&_r=1",
    name: <RiTiktokFill />,
  },
  {
    path: "https://github.com/acelproject",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/marchel-lumimpah-790b71294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100072345947560",
    name: <RiFacebookFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, i) => (
        <Link href={icon.path} key={i} target="_blank">
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
