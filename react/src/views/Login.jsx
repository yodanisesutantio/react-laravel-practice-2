import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <div className="w-[30%] bg-[#181818] py-6 px-12 shadow-[3px_3px_25px] shadow-emerald-950/40">
        <form
          action=""
          onSubmit={onSubmit}
          className="flex flex-col gap-4 items-center justify-center rounded-2xl overflow-hidden"
        >
          <h1 className="text-3xl text-center font-bold tracking-tighter mb-6">
            Log into your account
          </h1>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-slate-300/30 bg-slate-300/5 text-slate-300 placeholder:text-slate-300/30 py-3 px-4 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-slate-300/30 bg-slate-300/5 text-slate-300 placeholder:text-slate-300/30 py-3 px-4 rounded-lg"
          />
          <button className="w-full mt-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-[#181818] font-bold tracking-tighter text-lg rounded-lg duration-300">
            Login
          </button>

          <p className="text-slate-100">
            Not Registered?{" "}
            <Link
              to="/signup"
              className="text-emerald-500 underline hover:no-underline"
            >
              Create an Account!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
