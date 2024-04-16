"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ReviewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = {
      name: e.target.name.value,
      job: e.target.job.value,
      // avatar:e.target.avatar.value,
      review: e.target.review.value,
    };
    if (!res.name) {
      alert("Name Empety!");
      return;
    }
    if (!res.job) {
      alert("Job Name Empety!");
      return;
    }
    if (!res.review) {
      alert("Review Name Empety!");
      return;
    }
    // if (!res.avatar) {
    //   alert("pengelola kosong");
    //   return;
    // }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reviews`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(res),
        }
      );

      if (response.ok) {
        // window.location.reload()
        setIsLoading(false);
        router.push("/");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      alert(error);
      setIsLoading(false);
      return;
    }
  };
  return (
    <div className="py-28 md:w-6/12 w-10/12 mx-auto">
      <h1 className="text-2xl text-center">Add Reviews</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4 mt-10">
        <div className="mb-4">
          <Input name="name" placeholder="Name"/>
        </div>
        <div className="mb-4">

          <Input name="job"  placeholder="Job"/>
        </div>
        {/* <div className='mb-4'>
                <label className='block mb-2' htmlFor='lokasi'>img</label>
                <Input name="avatar" />
            </div> */}
        <div className="mb-4">
          <Textarea name="review"  placeholder="Review" />
        </div>
        </div>
        <div className="mt-10 w-full flex justify-center">
          <button
            className="bg-primary px-4 py-3 mx-auto rounded-full text-white"
            type="submit"
          >
            {isLoading ? (
              <div className="flex gap-2 items-center ">
                <div className="animate-spin h-5 w-5 bg-transparent border-[4px] rounded-full border-slate-400 border-l-slate-100"></div>
                <div>Loading...</div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewsPage;
