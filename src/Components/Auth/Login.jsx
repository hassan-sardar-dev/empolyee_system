import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const notify = (e) => {
    e.preventDefault();
    toast.success("Login successful!");
    setEmail("")
    setPassword("")
  
    
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  return (
    <>
      <Toaster />
      <div className="flex h-screen w-full   items-center justify-center">
        <div className="border-2 rounded-xl border-green-600 p-20">
          <form
            onSubmit={(e) => {
              notify(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter Your Email"
              className="text-white border-2 mb-5 outline-none bg-transparent text-xl py-3 px-5 rounded-full border-green-600 placeholder:text-gray-300"
            />
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Enter Your Password"
              className="text-white border-2 outline-none bg-transparent text-xl py-3 px-5 rounded-full border-green-600 placeholder:text-gray-300"
            />
            <button
              type="submit"
              className="text-white mt-5 border-2 outline-none text-xl py-2 px-6 rounded-full bg-green-600 border-green-600"
            >
              Login
            </button>
          </form>
          <div className="mt-4">
            <p className="text-center underline mt-4 text-gray-300">
              Already have an account?{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
