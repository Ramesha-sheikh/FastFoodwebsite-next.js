import React from "react";
import Carddetail from '@/component/Detailcard'

type Card = {
  imageurl: string;
  heading: string;
  button: string;
};

const Product = () => {
  const Dealcardss: Card[] = [
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
    {
      imageurl: "/cheez roll.jpg",
      heading: "Kabab",
      button: "Order Now",
    },
    {
      imageurl: "/fish.jpg",
      heading: " Fish Kabab",
      button: "Order Now",
    },
    {
      imageurl: "/pizza2.jpg",
      heading: "Chezzy Pizza",
      button: "Order Now",
    },
    {
      imageurl: "/freis.jpg",
      heading: "Cheezy freis",
      button: "Order Now",
    },
    {
      imageurl: "/roll.png",
      heading: "Beaf Roll",
      button: "Order Now",
    },
    {
      imageurl: "/food.jpg",
      heading: "cheezy bolls",
      button: "Order Now",
    },
    {
      imageurl: "/food1.jpg",
      heading: "Kabab",
      button: "Order Now",
    },
    {
      imageurl: "/food2.jpg",
      heading: "  Chicken Biryani ",
      button: "Order Now",
    },
    {
      imageurl: "/food3.jpg",
      heading: " seekh roll Kabab",
      button: "Order Now",
    },
    {
      imageurl: "/food4.jpg",
      heading: "  Seekh Kabab",
      button: "Order Now",
    },
    {
      imageurl: "/food5.jpg",
      heading: "Cream Boti",
      button: "Order Now",
    },
    {
      imageurl: "/food6.jpg",
      heading: " Cheez creamy Fries",
      button: "Order Now",
    },
  ];

  return (
    <div>
     

      <div className=" flex flex-col md:flex-row lg:flex-row justify-center  bg-black py-10 flex-wrap gap-6 w-full  md:flex-wrap lg:flex-wrap">
        {Dealcardss.map((card, index) => (
          <Carddetail
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

export default Product;
