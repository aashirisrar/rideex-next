import Image from "next/image";
import content from "@/public/content-1.jpg";

const LandingContent = () => {
  return (
    <div className="h-[34rem] bg-[#F4F4F4] text-black px-16">
      <div className="pt-24 pb-10">
        <h4 className="text-center text-4xl">
          Carpooling Made Easy <br /> Share Rides, Save Money, Reduce Emissions
        </h4>
      </div>
      <div className="flex col-span-2 gap-[32rem] justify-center">
        <div className="w-96">
          <div className="mb-8 ">
            Welcome to RideEx, where we're committed to revolutionizing your
            daily commute. With RideEx , you're not just getting from A to B;
            you're becoming part of a larger movement towards a greener, more
            sustainable future in transportation. Join us today and make your
            commute count.
          </div>
          <div>
            <div>✔ AI Auto Matching</div>
            <div>✔ Flexible Recurring Rates</div>
            <div>✔ Choose/Offer You Own Fare</div>
          </div>
        </div>
        <div className="w-[320px] h-[280px] rounded-[50px] bg-blue-900 overflow-hidden relative">
          <Image
            className="rounded-3xl"
            layout="fill"
            objectFit="cover"
            src={content}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
