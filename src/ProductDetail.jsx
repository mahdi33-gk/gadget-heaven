import { list } from "postcss";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
    availability
  } = product;
  return (
    <div className="bg-primary">
      <div className="py-10">
      <h1 className="text-4xl text-center font-bold text-white">Product Details</h1>
      <p className="text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      <div className="card lg:card-side bg-base-100 shadow-sm w-10/12 mx-auto">
        <figure>
          <img
            src={product_image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{product_title}</h2>
          <h3 className="text-xl font-semibold">Price: {price}k</h3>
          <div>
          <button class="btn btn-xs bg-btnBg text-btnCl border-btnCl rounded-full">{availability} {true?'Available':'StockOut'}</button>
          </div>
          <p>{description}</p>
          <p>Specification:{
            specification.map(item=> <li>{item}</li>)}</p>
            <p className="font-bold">Rating:</p>
          <p>{rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
