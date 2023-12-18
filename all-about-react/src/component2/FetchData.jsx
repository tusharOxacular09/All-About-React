import React, { useState } from "react";
import { useEffect } from "react";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  async function GetData() {
    await fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }

  // Type-1: Renders Everytime
  //   useEffect(() => {
  //     console.log(products);
  //     GetData();
  //   });

  // Type-2: Runs on first render
  //   useEffect(() => {
  //     console.log(products);
  //     GetData();
  //   }, []);

  // Type-3: Runs on the updation of specific state.
  useEffect(() => {
    console.log(products);
    GetData();
  }, [products]);
  // Implemented In Login Page

  return <div></div>;
};

export default FetchData;
