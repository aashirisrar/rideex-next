import Image from "next/image";
import React from "react";
import hero from "@/public/hero.jpg";

const LandingHero = () => {
  return (
    <div className="h-96 p-12 bg-[#218A94]">
      <div className="flex col-span-2">
        <div className="w-96">
          <div className="text-[#F4CE14] text-4xl font-semibold">
            Share the Ride,
            <br /> Share the Planet
          </div>
          <div>
            Are you tired of traffic jams, high fuel costs, and the burden on
            the environment? EcoRide is here to transform your daily commute.
            Join our community of eco-conscious commuters and be part of the
            solution.
          </div>
          <div>
            <button className="bg-[#F4CE14] text-black font-bold rounded-lg p-3">
              Join RideEx
            </button>
          </div>
        </div>
        <div className="w-[439px] h-[467px] p-4 bg-blue-900 overflow-hidden ">
          <Image className="rounded-3xl" src={hero} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
