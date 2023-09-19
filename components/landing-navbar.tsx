import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

const LandingNavbar = () => {
  return (
    <nav>
      <ul className="flex px-8 p-4 justify-between bg-white text-black items-center text-xl">
        <div>
          <Image width="194" src={logo} alt="logo" />
        </div>
        <div className="flex gap-10 p-4 bg-white text-black font-bold items-center">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Book</li>
          <li>Order</li>
          <li>Login</li>
        </div>
      </ul>
    </nav>
  );
};

export default LandingNavbar;
