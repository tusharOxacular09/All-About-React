import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // e - Event Object
  const [init, setInit] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    age: "",
  });

  const navigate = useNavigate();

  const handelChange = (key, value) => {
    // setUserDetails({ ...userDetails, [key]: value });
    setUserDetails((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const checkUser = () => {
    if (
      userDetails.email === "" ||
      userDetails.password === "" ||
      userDetails.age === ""
    ) {
      setInit(false);
    } else {
      setInit(true);
    }
  };

  useEffect(() => {
    checkUser();
  }, [userDetails]);

  return (
    <div>
      <p>Login Form</p>
      <input
        name="email"
        onChange={(e) => handelChange(e.target.name, e.target.value)}
        className="border border-blue-500 py-2 px-4 block mt-4"
        type="email"
        placeholder="Enter Email"
      />
      <input
        name="password"
        onChange={(e) => handelChange(e.target.name, e.target.value)}
        className="border border-blue-500 py-2 px-4 mt-4 block"
        type="password"
        placeholder="Enter Password"
      />
      <input
        name="age"
        onChange={(e) => handelChange(e.target.name, e.target.value)}
        className="border border-blue-500 py-2 px-4 mt-4 block"
        type="text"
        placeholder="Enter Age"
      />
      {init ? (
        <button
          onClick={() => {
            setShowUserDetails(true);
            console.log(userDetails);
          }}
          className="border bg-red-500 py-2 px-4 mt-4 text-white hover:bg-red-600 rounded-lg"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={() => {
            setShowUserDetails(true);
            console.log(userDetails);
          }}
          className="border bg-red-300 py-2 px-4 mt-4 text-white rounded-lg"
          disabled
        >
          Submit
        </button>
      )}
      <p className="cursor-pointer" onClick={() => {navigate("/auth/signup")}}>
        New Use then Sign Up.
      </p>
      {showUserDetails && (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>Password: {userDetails.password}</p>
          <p>Age: {userDetails.age}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
