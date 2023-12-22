import React, { useState, useContext } from "react";
import { userContext } from "../context/context";

const LoginPage = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
    });

    const userData = useContext(userContext);

    const handelChange = (key, value) => {
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

            <button
                onClick={() => {
                    userData.setEmail(userDetails.email)
                }}
                className="border bg-red-500 py-2 px-4 mt-4 text-white hover:bg-red-600 rounded-lg"
            >
                Submit
            </button>
        </div>
    );
};

export default LoginPage;
