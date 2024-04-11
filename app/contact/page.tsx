"use client";
import React from "react";

import { MailIcon, PhoneCall, HomeIcon } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        {/* text & ilustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, libero nostrum? Necessitatibus minus vel nam.
            </p>
          </div>
          {/* ilustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat mt-16"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className=" items-center flex gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>aclprcjt@gmail.com</div>
            </div>
            {/* address */}
            <div className=" items-center flex gap-x-8">
              <div>
                <HomeIcon size={18} className="text-primary" />
              </div>
              <div>
                Jln. Trans Sulawesi, Desa Matako, Tojo Barat, Sulawesi Tengah
              </div>
            </div>
            {/* phone */}
            <div className=" items-center flex gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+628 5258 8292 51</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
