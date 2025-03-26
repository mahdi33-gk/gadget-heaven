import React from "react";
import BannerImg from "/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="gap-y-4 bg-primary h-[550px] text-white">
        <h1 className="pt-3 text-5xl font-bold text-center">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-center mt-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center mt-6  pb-14">
          <button className="btn bg-white rounded-full text-primary font-bold px-6 py-2">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center">
        <img
          src={BannerImg}
          alt="Banner"
          className=" border-2 px-2 py-2 w-[900px]  h-[500px] rounded-lg"
        />
      </div>
      </div>
      
    </div>
  );
};

export default Banner;
