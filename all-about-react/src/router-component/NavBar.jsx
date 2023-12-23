import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-evenly h-20 px-40 bg-blue-500 text-white font-medium">
      <p onClick={() => navigate('/')} className="cursor-pointer hover:scale-110 duration-150">Home</p>
      <p onClick={() => navigate('/about')} className="cursor-pointer hover:scale-110 duration-150">About</p>
      <p onClick={() => navigate('/auth')} className="cursor-pointer hover:scale-110 duration-150">Authentication</p>
      <p onClick={() => navigate('/docs')} className="cursor-pointer hover:scale-110 duration-150">Docs</p>
    </nav>
  );
};

export default NavBar;
