"use client";

import React from "react";

const page = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
  };
  return (
    <div className="flex justify-center items-center bg-blue-500 h-[100vh] ">
      <div>
        <h1>Login</h1>
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
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
