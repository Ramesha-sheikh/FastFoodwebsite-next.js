'use client'; // This is required for Next.js to enable client-side rendering

import React, { useState } from 'react';
import Image from 'next/image';

const Fastfoodinfo = () => {
  // State to manage the active accordion item
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Function to handle the accordion toggle
  const handleAccordionToggle = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div className='w-full bg-black h-auto flex flex-col px-14 py-8'>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-center text-slate-50'>
          {`🍔 Savor the Flavor with Our Signature Burgers 🍟`}
        </h1>
        <div className='flex flex-col lg:flex-row md:flex-row mt-16'>
          <div className='lg:w-[50%] sm:w-full bg-pink-300'>
            <div id="accordion">
              {/* Accordion item 1 */}
              <h2 id="accordion-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black bg-gray-100 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionToggle(1)}
                >
                  <span>{`🍔Our Signature Burgers 🍟`}</span>
                  <i
                    className={`fas ${activeAccordion === 1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ transition: 'transform 0.3s ease' }}
                  ></i>
                </button>
              </h2>
              <div
                id="accordion-body-1"
                className={activeAccordion === 1 ? 'p-5 border border-b-0 border-gray-200 ' : 'hidden'}
              >
                <p className="mb-2 text-black">
                 {` Indulge in a mouthwatering experience like never before. At [FAST FOOD], we craft each burger with the finest ingredients, ensuring every bite is a burst of flavor. Whether you're a fan of classic cheeseburgers or bold, gourmet creations, we've got something to satisfy every craving.`}
                </p>
              </div>

              {/* Accordion item 2 */}
              <h2 id="accordion-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0  gap-3"
                  onClick={() => handleAccordionToggle(2)}
                >
                  <span>{`Why Choose Us?`}</span>
                  <i
                    className={`fas ${activeAccordion === 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ transition: 'transform 0.3s ease' }}
                  ></i>
                </button>
              </h2>
              <div
                id="accordion-body-2"
                className={activeAccordion === 2 ? 'p-5 border border-b-0 border-gray-200 dark:border-gray-700' : 'hidden'}
              >
                <p className="mb-2 text-black">
                 {` Fresh Ingredients: We use only the freshest produce and high-quality meats to make every burger a delectable delight.`}
                </p>
                <p className="text-black">
                  Check out the{' '}
                  <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                    {`Crafted to Perfection: Each burger is handmade to your exact preferences, ensuring a taste that's simply irresistible.`}
                  </a>{' '}
                  {`Innovative Flavors: From spicy to sweet, we offer a unique selection of burgers that push the boundaries of flavor.`}
                </p>
              </div>

              {/* Accordion item 3 */}
              <h2 id="accordion-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 focus:ring-4 focus:ring-black dark:focus:ring-gray-800 0 gap-3"
                  onClick={() => handleAccordionToggle(3)}
                >
                  <span className='text-black'>{`🍴 What’s on the Menu?`}</span>
                  <i
                    className={`fas ${activeAccordion === 3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ transition: 'transform 0.3s ease' }}
                  ></i>
                </button>
              </h2>
              <div
                id="accordion-body-3"
                className={activeAccordion === 3 ? 'p-5 border border-t-0 border-gray-200 dark:border-gray-700' : 'hidden'}
              >
                <p className="mb-2 text-black">
                  {`Classic Cheeseburger: A timeless favorite with melted cheese and all the fixings.`}
                </p>
                <p className="mb-2 text-black">
                 {`Spicy BBQ Chicken Burger: A fiery blend of flavors with a smoky BBQ kick.`}
                </p>
                <p className="mb-2 text-black">{`Veggie Delight: For our plant-based customers, a delicious veggie patty loaded with fresh ingredients.`}</p>
                <ul className="ps-5 text-black list-disc dark:text-gray-400">
                  <li>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                      {`🍔 Order Now and treat yourself to the ultimate burger experience!`}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Burger Image */}
          <div className='lg:w-[50%] sm:w-full flex justify-center items-center'>
            <Image
              src='/bur.png'
              alt='burger picture'
              width={600}
              height={600}
              className="max-w-full h-auto" // ensures responsive image scaling
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fastfoodinfo;
