import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-3xl font-bold">Sign Up Page</p>
      <p
        className="cursor-pointer"
        onClick={() => {
          navigate("/auth/login");
        }}
      >
        Already Have an account then Login.
      </p>
    </div>
  );
};

export default SignUpPage;
