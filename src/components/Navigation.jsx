import React from "react";
import { useState } from 'react'

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileView = () => {
    console.log(isMobile);
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar p-4 relative">
      <div className="md:container mx-auto">
        <div className="flex items-center justify-between md:mx-40">
          <a href="#" className="text-4xl font-bold logo">
            Dokan.
          </a>
          <button
            className="lg:hidden text-white focus:outline-none"
            id="mobile-menu-button"
            onClick={handleMobileView}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="hidden lg:flex lg:items-center lg:gap-20 nav-links">
            <a href="#"> Home</a>
            <a href="#">Shop</a>
            <a href="#" className="btn-shop">
              <i className="fa-solid fa-bag-shopping"></i>
            </a>
          </div>
          <div
            className={
              isMobile
                ? "lg:hidden flex p-2 absolute flex-col w-full justify-center items-center gap-2 mobile-menu"
                : "lg:hidden flex p-2 absolute flex-col w-full justify-center items-center gap-2 no-mobile-menu"
            }
          >
            <a href="#"> Home</a>
            <a href="#">Shop</a>
            <a href="#" className="btn-shop">
              <i className="fa-solid fa-bag-shopping"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
