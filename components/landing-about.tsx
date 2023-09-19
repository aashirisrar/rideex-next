import React from "react";
import about from "@/public/about-1.jpg";
import Image from "next/image";

const LandingAbout = () => {
  return (
    <div className="h-[26rem] pt-20 px-16 bg-[#218A94]">
      <div className="flex col-span-2 gap-24 justify-center">
        <div className="w-96">
          <div className="text-[#F4CE14] text-4xl font-semibold mb-8 mt-6">
            RideEx
          </div>
          <div className="mb-8 ">Join the Movement Today</div>
          <div className="mb-8 ">
            Ready to start your journey towards sustainable commuting? Join
            RideEx and be part of the solution. Together, we can make a real
            impact on our environment while enjoying the benefits of
            cost-effective, hassle-free transportation.
          </div>
        </div>
        <div className="w-[325px] h-[300px] rounded-[50px] bg-blue-900 overflow-hidden relative">
          <Image
            className="rounded-3xl"
            layout="fill"
            objectFit="cover"
            src={about}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
