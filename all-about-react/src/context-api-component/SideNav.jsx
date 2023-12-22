import React from "react";
import { useContext } from "react";
import { userContext } from "../context/context";

const SideNav = () => {
  const userObject = useContext(userContext);
  return (
    <div>
      <p>{userObject.name}</p>
      <p>{userObject.email}</p>
    </div>
  );
};

export default SideNav;
