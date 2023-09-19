import Image from "next/image";
import React from "react";
import keyfeature1 from "@/public/key-feature-1.jpg";
import keyfeature2 from "@/public/key-feature-2.jpg";
import keyfeature3 from "@/public/key-feature-3.jpg";
import keyfeature4 from "@/public/key-feature-4.jpg";
import keyfeature5 from "@/public/key-feature-5.jpg";

const KeyFeatures = () => {
  return (
    <div className="h-[68rem] bg-white text-black">
      <div className="pt-20 pb-10 flex col-span-2 justify-between p-28">
        <h4 className="text-4xl">Why RideEx?</h4>
        <button className="bg-[#F4CE14] text-black font-bold rounded-lg p-3">
          Get Started
        </button>
      </div>
      {/* First Row */}
      <div className="flex col-span-3 gap-10 justify-center text-sm">
        <div className="w-[261px] h-[388px] rounded-xl bg-[#EDEFEE] overflow-hidden">
          <Image src={keyfeature1} alt="woman-driving" />
          <div className="p-5">
            <div className="font-bold pb-2 ">Affordable and Efficient</div>
            <div>
              RideEx makes carpooling effortless. Share the cost of your daily
              commute and watch your savings grow. Say goodbye to parking
              hassles and the stress of driving alone.
            </div>
            <div className="pt-3 font-bold ">Start Saving</div>
          </div>
        </div>
        <div className="w-[261px] h-[388px] rounded-xl bg-[#EDEFEE] overflow-hidden">
          <Image src={keyfeature2} alt="forest" />
          <div className="p-5">
            <div className="font-bold pb-2 ">Reduce Your Carbon Footprint</div>
            <div>
              Every shared ride with EcoRide contributes to a greener planet.
              Reduce emissions and help combat climate change one ride at a
              time.
              <br />
              <br />
            </div>
            <div className="pt-3 font-bold ">Reduce Your Footprint </div>
          </div>
        </div>
        <div className="w-[261px] h-[388px] rounded-xl bg-[#EDEFEE] overflow-hidden">
          <Image src={keyfeature3} alt="people-in-sunset" />
          <div className="p-5">
            <div className="font-bold pb-2 ">Community-driven</div>
            <div>
              Connect with fellow travelers, make new friends, and build a
              stronger sense of community. Carpooling is not just about sharing
              a ride; it's about sharing experiences.
            </div>
            <div className="pt-3 font-bold ">Join Our Community</div>
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="flex col-span-2 gap-10 justify-center text-sm mt-12">
        <div className="w-[261px] h-[388px] rounded-xl bg-[#EDEFEE] ">
          <div className="w-[261px] h-[174px] rounded-t-xl overflow-hidden relative">
            <Image
              src={keyfeature4}
              layout="fill"
              objectFit="cover"
              alt="phone-in-hand"
            />
          </div>
          <div className="p-5">
            <div className="font-bold pb-2 ">Flexible Scheduling</div>
            <div>
              Choose your ride times, routes, and fellow carpoolers that fit
              your schedule. We give you the power to customize your commute.
              <br />
              <br />
            </div>
            <div className="pt-3 font-bold ">Begin Carpooling Now</div>
          </div>
        </div>
        <div className="w-[261px] h-[388px] rounded-xl bg-[#EDEFEE] overflow-hidden">
          <Image src={keyfeature5} alt="woman-driving-in-car" />
          <div className="p-5">
            <div className="font-bold pb-2 ">Safe and Secure</div>
            <div>
              Rest easy knowing that we prioritize safety. Our platform includes
              user ratings, background checks, and 24/7 support to ensure your
              peace of mind.
              <br />
            </div>
            <div className="pt-3 font-bold">Find Your Ride</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
