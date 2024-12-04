import React from "react";
import Image from "next/image";

interface UserCards {
  imageurl: string;
  heading: string;
  button: string;
}

const Carddetail = ({ imageurl, heading, button }: UserCards) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-pink-500 border-4 border-pink-500 rounded-lg w-full h-auto md:w-[48%] lg:w-[30%] py-10 animate-border-color-change">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <Image src={imageurl} alt={heading} width={300} height={300} />
        </div>
        {/* Heading */}
        <p className="text-center pt-6 text-2xl md:text-3xl font-bold text-black">
          {heading}
        </p>
        {/* Button */}
        <div className="flex justify-center items-center mt-4">
          <button className="px-6 py-2 bg-gray-300 text-pink-500 font-bold rounded-md hover:bg-black hover:text-white transition">
            {button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Carddetail;
