import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    desc: "Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor quo sint illum consequuntur velit perspiciatis fugit nulla eaque tempore?",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    desc: "Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor quo sint illum consequuntur velit perspiciatis fugit nulla eaque tempore?",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "app Development",
    desc: "Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor quo sint illum consequuntur velit perspiciatis fugit nulla eaque tempore?",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 md:pt-10 pt-16 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-4 text-center mx-auto">
          My Projects
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 md:py-16 py-10 justify-center gap-y-20 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, i) => {
            return (
              <Card
                key={i}
                className="w-full max-w-[424px] h-[350px] flex flex-col dark:bg-secondary pt-14 pb-7 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[70px] md:-top-[70px]">
                  <div className="w-[140px] h-[80px] rounded-xl bg-white py-5 dark:bg-secondary flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center ">
                  <CardTitle className="my-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.desc}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <FaExternalLinkAlt />
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
