import React, { useState } from "react";

const Increment_and_Decrement = () => {
  // State
  // Variable Of React
  const [num, setNum] = useState(500);
  // Increment Function
  const Increment = () => {
    setNum(num + 1);
    console.log(num);
  }
  console.log(num);
  return (
    <div className="border-2 border-blue-500 p-4 rounded-lg m-2 inline-block">
      <p>Increment and Decrement</p>
      <p>Number: {num}</p>
      <button
        onClick={Increment}
        className="cursor-pointer px-5 py-1 bg-blue-500 rounded-md text-white hover:bg-blue-600 mt-2"
      >
        +
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
          console.log(num);
        }}
        className="cursor-pointer px-5 py-1 bg-red-500 rounded-md text-white hover:bg-red-600 mt-2 mx-4"
      >
        -
      </button>
    </div>
  );
};

export default Increment_and_Decrement;
