"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const { push } = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: e.target.username.value,
        password: e.target.password.value,
        callbackUrl: "/projects",
      });
      if (!res?.error) {
        push("/projects");
      } else {
        console.log(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center bg-blue-500 h-[100vh] ">
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={(e) => handleLogin(e)}>
          <div>
            <label htmlFor="username">User name</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="password">User name</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
