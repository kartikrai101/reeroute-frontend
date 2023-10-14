import React from "react";

const HowItWorksSection = ({ isTrucker }) => {
  return (
    <div
      className="flex flex-col justify-center py-8 px-2 pl-4 lg:px-16 space-y-5"
      id="how-it-works"
    >
      <h3 className="font-rubik font-semibold text-2xl lg:text-5xl text-[#2A4F6D]">
        How ReeRoute Works?
      </h3>
      <p className="font-rubik text-lg lg:text-[18px] text-[#666C89] w-full lg:w-5/5">
        With ReeRoute, get return loads easily with timely advance payment for better efficiency
      </p>
      <div className="flex justify-center items-center py-10 w-full">
        <img
          src={`/Assets/how-it-works-${isTrucker ? "trucker" : "shipper"}.png`}
          className="hidden lg:block w-[90%]"
        />
        <img
          src={`/Assets/how-it-works-${
            isTrucker ? "trucker" : "shipper"
          }-mobile.png`}
          className="lg:hidden w-full"
        />
      </div>
    </div>
  );
};

export default HowItWorksSection;
