import React from "react";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28  bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex gap-x-8 justify-between">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Marchel Lumimpah</h1>
            <p className="subtitel max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what i engege in profesionally.{" "}
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={`/contact`}>
                <Button className="gap-x-2 text-white">
                  Contact Me <Send size={18} />{" "}
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                download CV <Download size={18} />{" "}
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles={`flex gap-x-6 mx-auto xl:mx-0`}
              iconsStyles={`text-foreground text-[22px] hover:text-primary transition-all`}
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* bedge 1 */}
            <Badge
              containerStyles={`absolute top-[24%] -left-[5rem]`}
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experience"
            />
            {/* bedge 2 */}
            <Badge
              containerStyles={`absolute top-[55%] -right-8`}
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText={`k`}
              badgeText="Happy Clients"
            />
            {/* bedge 3 */}
            <Badge
              containerStyles={`absolute top-[80%] -left-[1rem]`}
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText={`k`}
              badgeText="Finished Projects"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles={`bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom `}
              imgSrc={`/hero/developer.png`}
            />
          </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
