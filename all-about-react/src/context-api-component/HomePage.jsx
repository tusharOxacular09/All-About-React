import React, { useState } from "react";
import SideNav from "./SideNav";
import Main from "./Main";
import Footer from "./Footer";
import { userContext } from "../context/context";

const HomePage = () => {
  const [userEmail, setUserEmail] = useState("subodh@gmail.com");
  const [userName, setUserName] = useState("subodh sahu");

  const userdetails = {
     email: userEmail,
     name: userName,
     setEmail: setUserEmail
  }

  return (
    <userContext.Provider value={userdetails}>
      <div className="flex items-center h-screen">
        <div className="w-2/12 bg-green-100 h-full">
          <SideNav />
        </div>
        <div className="w-10/12 h-full">
          <div className="h-4/6 bg-yellow-100">
            <Main />
          </div>
          <div className="h-2/6 bg-gray-300">
            <Footer />
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
};

export default HomePage;