import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [produts, setProducts] = useState([]);
  useEffect(() => {
    fetch("/datas.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="text-black mt-80 pb-8 w-10/12 mx-auto">
      <h2 className="font-bold text-4xl text-center pb-5">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 ">
        <div className="h-fit col-span-1  flex flex-col bg-white border-mainBorder border-2 shadow-sm rounded-lg">
          <ul className="list-none text-[10px] md:text-xl text-textCl ">
            <li className="hover:bg-primary hover:text-white bg-anotherBg px-5 py-1 my-3 mx-4 rounded-full">All</li>
            <li className="hover:bg-primary hover:text-white bg-anotherBg px-5 py-1 my-3 mx-4 rounded-full">Laptops</li>
            <li className="hover:bg-primary hover:text-white bg-anotherBg px-5 py-1 my-3 mx-4 rounded-full">Phones</li>
            <li className="hover:bg-primary hover:text-white bg-anotherBg px-5 py-1 my-3 mx-4 rounded-full">Accessories</li>
            <li className="hover:bg-primary hover:text-white bg-anotherBg px-5 py-1 my-3 mx-4 rounded-full">MacBook</li>
            <li className="hover:bg-primary hover:text-white bg-anotherBg px-5 py-1 my-3 mx-4 rounded-full">Smart Watches</li>
            <li className="hover:bg-primary hover:text-white bg-anotherBg px-5 py-1 my-3 mx-4 rounded-full">Iphone</li>
          </ul>
        </div>
        <div className="md:col-span-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {produts.map((product) => (
              <Product product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
