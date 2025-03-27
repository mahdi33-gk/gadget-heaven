import { list } from "postcss";
import { IoMdListBox } from "react-icons/io";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { RiStarHalfFill } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";

const ProductDetail = () => {
  const { productId } = useParams();
  const data = useLoaderData();

  const product = data.find((product) => product.product_id === productId);
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    rating,
    availability,
  } = product;
  return (
    <div>
      <div className="bg-primary h-96 ">
        <div className="py-10">
          <h1 className="text-4xl text-center font-bold text-white">
            Product Details
          </h1>
          <p className="text-center text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-sm w-10/12 mx-auto">
          <figure>
            <img src={product_image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{product_title}</h2>
            <h3 className="text-xl font-semibold">Price: {price}k</h3>
            <div>
              <button class="btn btn-xs bg-btnBg text-btnCl border-btnCl rounded-full">
                {availability} {true ? "Available" : "StockOut"}
              </button>
            </div>
            <p>{description}</p>
            <p>
              <span className="font-bold">Specification:</span>
              {specification.map((item) => (
                <li>{item}</li>
              ))}
            </p>
            <p className="font-bold flex items-center gap-2">
              Rating <IoMdListBox></IoMdListBox>
            </p>
            <div className="">
              <div className=" text-yellow-500 text-2xl">
                <p className="flex">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarHalfFill />{" "}
                  <button className="btn btn-xs rounded-full ml-5">
                    {rating}
                  </button>
                </p>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn text-white font-bold rounded-full bg-primary">
                Add To Card <PiShoppingCart />
              </button>{" "}
              <button class="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="size-[1.2em]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
