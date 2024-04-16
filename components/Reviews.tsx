import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {  Send } from "lucide-react";

// import swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";

// image
import noAvatar from "@/public/noavatar.png"

// const reviewData = [
//   {
//     avatar: "/reviews/avatar-1.png",
//     name: "Marchel Lumimpah",
//     job: "Chef",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum tenetur quidem ad sed perspiciatis!",
//   },
//   {
//     avatar: "/reviews/avatar-2.png",
//     name: "Andreas Suge",
//     job: "Game Dev",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum tenetur quidem ad sed perspiciatis!",
//   },
//   {
//     avatar: "/reviews/avatar-3.png",
//     name: "Priska Pantow",
//     job: "Interior Designer",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum tenetur quidem ad sed perspiciatis!",
//   },
//   {
//     avatar: "/reviews/avatar-4.png",
//     name: "Ishak Lumimpah",
//     job: "UI/UX Designer",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum tenetur quidem ad sed perspiciatis!",
//   },
//   {
//     avatar: "/reviews/avatar-5.png",
//     name: "Natan Suge",
//     job: "Desain Grafis",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum tenetur quidem ad sed perspiciatis!",
//   },
//   {
//     avatar: "/reviews/avatar-6.png",
//     name: "John Smith",
//     job: "Video Editor",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum tenetur quidem ad sed perspiciatis!",
//   },
// ];
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Reviews = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/reviews`,
    fetcher
  );
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-max "
        >
          {data?.data.map((person: any, i: any) => {
            return (
              <SwiperSlide key={i}>
                <Card className="bg-white dark:bg-secondary/40 p-8 min-h-max">
                  <CardHeader>
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={noAvatar}
                        alt={person.name}
                        width={70}
                        height={70}
                        priority
                        className="rounded-full"
                      ></Image>
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <div>{person.job}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center mt-12">
          <Link href={`/reviews`} className="flex gap-x-3 items-center px-6 py-4 text-lg dark:bg-secondary dark:text-slate-300 dark:hover:bg-primary dark:hover:text-white text-slate-700 hover:bg-primary bg-slate-200 font-normal transition-all duration-200 rounded-full hover:text-white border-none shadow-lg">
            Create review
            <Send size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
