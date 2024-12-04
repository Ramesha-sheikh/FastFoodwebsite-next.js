import Hero from "@/component/Hero";
import React from "react";
import Ourmennu from "@/component/Ourmennu";

type Card = {
  imageurl: string;
  heading: string;
  button: string;
};

const Home = () => {
  const cards: Card[] = [
    {
      imageurl: "/tika.jpg",
      heading: " Chicken Tikka",
      button: "Order Now",
    },
    {
      imageurl: "/pizza.jpg",
      heading: "Tika",
      button: "Order Now",
    },
    {
      imageurl: "/kabab2.jpg",
      heading: "Kabab",
      button: "Order Now",
    },
   
  ];

  return (
    <div>
      <div>
        <Hero />
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row justify-center  bg-black py-10 flex-wrap gap-6 w-full border-yellow-600  md:flex-wrap lg:flex-nowrap">
        {cards.map((card, index) => (
          <Ourmennu 
            key={index}
            imageurl={card.imageurl}
            heading={card.heading}
            button={card.button}
          /> 
        ))}
      </div>
    </div>
  );
};

export default Home;
