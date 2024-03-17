"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    if (res.status === 200) {
      e.target.reset()
      router.push("/login");
      setLoading(false);
    } else {
      setError(`${res.status} Email Allredy Exists`);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-green-400">
      <div>
        {error !== "" && <h1 className="bg-red-500 text-white">{error}</h1>}
        <h1>Register</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username">User name</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button className="bg-primary p-2 rounded-md text-white">
              {loading ? (
                <div className="flex gap-2 items-center">
                  <div className="animate-spin h-5 w-5 bg-transparent border-[4px] rounded-full border-slate-400 border-l-slate-100"></div>
                  <div>Loading...</div>
                </div>
              ) : (
                <div>register</div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
