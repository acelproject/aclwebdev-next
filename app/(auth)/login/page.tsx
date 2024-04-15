"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = ({searchParams}:any) => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e:any) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: e.target.username.value,
        password: e.target.password.value,
        callbackUrl: searchParams.callbackUrl,
      });
      if (!res?.error) {
        e.target.reset();
        setLoading(false);
        push(searchParams.callbackUrl);
      } else {
        setLoading(false);
        if (res.status === 401) {
          setError("User email or password invalid!");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div>
        {error !== "" && <h1 className="bg-red-500 text-white">{error}</h1>}
        <h1 className="">Login</h1>
        <form action="" onSubmit={(e) => handleLogin(e)}>
          <div>
            <label htmlFor="username">User name</label>
            <input type="text" name="username" />
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
                <div>Login</div>
              )}
            </button>
          </div>
          <p>
            Belum punya akun? silahkan daftar{" "}
            <Link href={`/register`} className="underline font-semibold">
              disini
            </Link>
          </p>
          <button
            type="button"
            onClick={() => signIn("google",{callbackUrl:"/",redirect:false})}
            className="underline"
          >
            Masuk dengan Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
