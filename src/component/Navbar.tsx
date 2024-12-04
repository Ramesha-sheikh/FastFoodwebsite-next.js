'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="top-0  w-full bg-black border-b-2 border-pink-500 lg:relative z-50 py-0">
        <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button>
              <div className="flex items-center space-x-2">
                <Image
                  src="/image.png"
                  alt="logo"
                  width={80} // Adjusted the logo size
                  height={80} // Adjusted the logo size
                  className="rounded-full animate-spin-slow "
                />
              </div>
            </button>

            {/* Navbar Links for large screens and above */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-8 text-base font-bold text-pink-500">
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link href="/" className="text-pink-500 hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link href="/about" className="text-pink-500 hover:text-white">
                    About
                  </Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link href="/products" className="text-pink-500 hover:text-white">
                    Deals
                  </Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link href="/contact" className="text-pink-500 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Signup and Login buttons for large screens and above */}
            <div className="hidden lg:flex lg:items-center gap-x-2">
              <button className="flex items-center text-pink-500 hover:text-white dark:text-white justify-center px-5 py-2 font-semibold hover:border-2 border-pink-500 rounded-md">
                Sign up
              </button>
              <button className="flex items-center justify-center rounded-md bg-pink-500 text-white px-5 py-2 font-semibold hover:border-2 border-pink-500 hover:bg-transparent hover:text-pink-500 transition duration-200">
                Login
              </button>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden flex items-center justify-between w-full">
              {/* Logo on the left */}
              <button className="focus:outline-none">
                {/* <Image
                  src="/image.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-full "
                /> */}
              </button>

              {/* Hamburger Icon on the right */}
              <button
                className="focus:outline-none text-slate-200 dark:text-white"
                onClick={toggleMobileMenu}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="text-2xl text-pink-500 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-80 p-5">
              <div className="flex justify-between items-center mb-6">
                  <Image
                  src="/image.png"
                  alt="logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                {/* Close button */}
                <button
                  className="focus:outline-none text-slate-200 dark:text-white"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="text-2xl text-pink-500 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                {/* Mobile logo */}
              
              </div>

              {/* Mobile Links */}
              <ul className="space-y-4 text-center text-pink-500">
                <li>
                  <Link href="/" className="text-pink-500 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-pink-500 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-pink-500 hover:text-white">
                    Deals
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-pink-500 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Mobile Buttons */}
              <div className="mt-6 text-center flex flex-col items-center space-y-4">
                <button className="flex items-center text-pink-500 hover:text-white dark:text-white justify-center px-5 py-2 font-semibold hover:border-2 border-pink-500 rounded-md">
                  Sign up
                </button>
                <button className="flex items-center justify-center rounded-md bg-pink-500 text-white px-5 py-2 font-semibold hover:border-2 border-pink-500 hover:bg-transparent hover:text-pink-500 transition duration-200">
                  Login
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
