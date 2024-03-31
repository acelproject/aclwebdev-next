import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <section className="mb-12 xl:mb-36 pt-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-4 text-center mx-auto">
          My Projects
        </h2>
        {/* grid items */}
        <div>grid</div>
      </div>
    </section>
  );
};

export default Services;
