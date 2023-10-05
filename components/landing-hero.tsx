import Image from "next/image";
import React from "react";
import hero from "@/public/hero.jpg";

const LandingHero = () => {
  return (
    <div className="h-[26.5rem] py-16 px-16 bg-[#218A94]">
      <div className="flex col-span-2 gap-96 justify-center">
        <div className="w-96">
          <div className="text-[#F4CE14] text-4xl font-semibold mb-4 mt-2">
            Share the Ride,
            <br /> Share the Planet
          </div>
          <div className="mb-8">
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
        <div className="w-[459px] h-[427px] rounded-[50px] bg-blue-900 overflow-hidden relative">
          <Image
            className="rounded-3xl"
            layout="fill"
            objectFit="cover"
            src={hero}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
