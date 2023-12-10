import React, { useState } from "react";

const LoginPage = () => {
  // e - Event Object
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    age: "",
  });

  const handelChange = (key, value) => {
    // setUserDetails({ ...userDetails, [key]: value });
    setUserDetails((prev) => {
      return { ...prev, [key]: value };
    });
  };

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
      <button
        onClick={() => {
          setShowUserDetails(true);
          console.log(userDetails);
        }}
        className="border bg-red-500 py-2 px-4 mt-4 text-white hover:bg-red-600 rounded-lg"
      >
        Submit
      </button>

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
