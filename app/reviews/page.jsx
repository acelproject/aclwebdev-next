"use client"

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ReviewsPage = () => {
  const [isLoading,setIsLoading]=useState(false)
  const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const res = {
          name: e.target.name.value,
          job: e.target.job.value,
          // avatar:e.target.avatar.value,
          review: e.target.review.value,
        };
        if (!res.name) {
          alert("wisata kosong");
          return;
        }
        if (!res.job) {
          alert("Lokasi kosong");
          return;
        }
        if (!res.review) {
          alert("pengelola kosong");
          return;
        }
        if (!res.avatar) {
          alert("pengelola kosong");
          return;
        }

        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body:JSON.stringify(res)
          });
    
          if (response.ok) {
            // window.location.reload()
            setIsLoading(false) 
            router.push("/")
          }else{
            throw new Error("Something went wrong")
          }
        } catch (error) {
          alert(error)
          return
        }
      };
  return (
    <div className='py-24 w-6/12 mx-auto'>
        <h1 className='text-2xl'>Add Reviews</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='block mb-2' htmlFor='name'>Name</label>
                <Input name="name" />
            </div>
            <div className='mb-4'>
                <label className='block mb-2' htmlFor='wisata'>Job</label>
                <Input name="job" />
            </div>
            {/* <div className='mb-4'>
                <label className='block mb-2' htmlFor='lokasi'>img</label>
                <Input name="avatar" />
            </div> */}
            <div className='mb-4'>
                <label className='block mb-2' htmlFor='lokasi'>Review</label>
                <Textarea name="review" />
            </div>
            <div className='mt-10'>
              <button className="bg-primary p-2 rounded-md text-white" type='submit'>
                {isLoading ? (
                  <div className="flex gap-2 items-center">
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
  )
}

export default ReviewsPage