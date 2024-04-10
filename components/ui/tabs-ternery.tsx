"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/components/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  // const [active, setActive] = useState<Tab>(propTabs[0]);
  const [active, setActive] = useState("personal");
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  // const moveSelectedTabToTop = (idx: number) => {
  //   const newTabs = [...propTabs];
  //   const selectedTab = newTabs.splice(idx, 1);
  //   newTabs.unshift(selectedTab[0]);
  //   setTabs(newTabs);
  //   setActive(newTabs[0]);
  // };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div className="flex flex-col md:border  md:mx-0 mx-auto px-[6px] py-[5px] rounded-full md:flex-row items-center justify-start   max-w-full h-full w-max">
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
            onClick={() => {
              // moveSelectedTabToTop(idx);
              setActive(tab.value);
            }}
          >
            {active === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  `absolute inset-0 bg-primary dark:bg-primary/80  rounded-full `,
                  activeTabClassName
                )}
              />
            )}

            <span
              className={`relative block ${
                active !== tab.value
                  ? "text-black dark:text-white"
                  : "text-white dark:text-white"
              } `}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        // key={active.value}
        // hovering={hovering}
        // className={cn("mt-14 md:mt-0 bg-red-600", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  active,
}: {
  className?: string;
  // key?: string;
  tabs: Tab[];
  active: String;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative  w-full h-full mt-0 ">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0,
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className={`${active !== tab.value ? "hidden" : "flex"}`}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
