import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-full">
      <div className="mt-10 w-1/2 h-full">
        <button
          onClick={() => {
            navigate("/auth/login");
          }}
          className="border bg-red-500 py-2 px-4 mt-4 text-white hover:bg-red-600 rounded-lg mr-8"
        >
          Login
        </button>
        <Link
          to={"/auth/signup"}
          className="border bg-green-500 py-2 px-4 mt-4 text-white hover:bg-green-600 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
      <div className="w-1/2 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
