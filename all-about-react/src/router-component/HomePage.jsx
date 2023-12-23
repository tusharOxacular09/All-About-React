import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState({
    name: "subodh",
    age: 21,
  });
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full px-40">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem velit quae
        quo enim saepe quia temporibus culpa, vitae, ducimus, dignissimos beatae
        alias illum sequi iusto laudantium. Dolor veritatis incidunt nulla?
      </p>

      <div className="mt-10">
        <a
          href="/about"
          className="border bg-red-500 py-2 px-4 mt-4 text-white hover:bg-red-600 rounded-lg mr-20"
        >
          Navigate to About
        </a>
        <Link
          to={"/docs"}
          className="border bg-green-500 py-2 px-4 mt-4 text-white hover:bg-green-600 rounded-lg"
        >
          Navigate to Docs
        </Link>
      </div>

      <div className="mt-8">
        <button
          onClick={() => {
            navigate("/docs", { state: data });
          }}
          className="border bg-blue-500 py-2 px-4 mt-4 text-white hover:bg-blue-600 rounded-lg"
        >
          Pass Data to Docs
        </button>
      </div>
    </div>
  );
};

export default HomePage;
