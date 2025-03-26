import React from "react";

const Product = ({ product }) => {
  const { product_title, product_image, price } = product;
  return (
    <div>
      <div className="card bg-white border-mainBorder border-2 rounded-lg shadow-sm">
        <figure className="px-5 pt-4">
          <img
            src={product_image}
            alt="Shoes"
            className="rounded-xl object-cover h-[250px] w-[282.67px]"
          />
        </figure>
        <div className="flex flex-col gap-y-2 px-3 py-2">
          <h2 className="card-title line-clamp-1 font-bold">{product_title}</h2>
          <p>Price: {price}k</p>
          <div className="card-actions pb-3">
            <button className="btn text-primary rounded-full  border-primary border-2">View detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
