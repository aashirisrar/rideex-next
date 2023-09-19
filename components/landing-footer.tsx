import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

const LandingFooter = () => {
  return (
    <div className="h-[24rem] pt-20 px-16 bg-white text-black font-semibold">
      <div className="flex col-span-4 gap-12 justify-center">
        <div className="mt-16">
          <Image width="194" src={logo} alt="logo" />
        </div>
        <div>
          <div className="my-8">Navigation</div>
          <div>Home</div>
          <div>About</div>
          <div>Menu</div>
        </div>
        <div>
          <div className="my-8">Contact</div>
          <div>Address</div>
          <div>Phone Number</div>
          <div>Email</div>
        </div>
        <div>
          <div className="my-8">Social Media Links</div>
          <div>Twitter</div>
          <div>Facebook</div>
          <div>Instagram</div>
        </div>
      </div>
      <div className="text-center font-normal mt-16">
        Copyright @2023 RideEx. All rights reserved.
      </div>
    </div>
  );
};

export default LandingFooter;
