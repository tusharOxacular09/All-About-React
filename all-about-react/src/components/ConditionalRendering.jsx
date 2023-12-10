import React from "react";

const ConditionalRendering = () => {
  // if-else
  //   let num = 11;
  //   if (num % 2 == 0) {
  //     return <p>Even Number</p>;
  //   } else {
  //     return <p>Odd Number</p>;
  //   }

  // Ternary
  //   let n = 475;
  //   return <div>{n > 50 ? <p>Greater</p> : <p>Smaller</p>}</div>;

  // Logical AND or &&
  let num = 90;
  return (
    <>
      {num === 90 && (
        <div>
          <p>Hii</p>
          <p>My Name is {num}.</p>
        </div>
      )}
    </>
  );
};

export default ConditionalRendering;
