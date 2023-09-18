import { Box } from "lucide-react";
import React from "react";

const LandingNavbar = () => {
  return (
    <nav>
      <ul className="flex gap-3 h-28 justify-center bg-white text-black items-center">
        <Box></Box>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Book</li>
        <li>Order</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default LandingNavbar;
