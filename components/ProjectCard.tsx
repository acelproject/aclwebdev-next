import React from "react";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  project: any;
};
const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0 ">
        {/* Image */}
        <div className="relative w-full h-[300px]  flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat">
          <Image
            src={project.img}
            className="absolute bottom-0 shadow-2xl"
            alt={project.name}
            width={247}
            height={250}
            priority
          />
          {/* btn link */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <FaGithub className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1 font-semibold text-lg">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.desc}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
