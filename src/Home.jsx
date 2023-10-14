import React, { useState, useEffect } from "react";
import "./index.css";
import TruckerForm from "./Components/TruckerForm";
import HomeAdditionalDetail from "./Components/HomeAdditionalDetail";
import ShipperForm from "./Components/ShipperForm";
import Footer from "./Components/Footer";

const Home = ({ isTrucker }) => {
  const [activeBackground, setActiveBackground] = useState("");
  const [firstCircle, setFirstCircle] = useState("/Assets/filled-circle.png");
  const [secondCircle, setSecondCircle] = useState("/Assets/empty-circle.png");
  const [thirdCircle, setThirdCircle] = useState("/Assets/empty-circle.png");

  useEffect(() => {
    if (isTrucker) setActiveBackground("/Assets/shipper-main-image.jpg");
    else setActiveBackground("/Assets/shipper-main-image.jpg");
  }, [isTrucker]);

  const handleFirstCircleClick = () => {
    if (isTrucker) setActiveBackground("/Assets/background-trucker.png");
    else setActiveBackground("/Assets/background-shipper.png");
    setFirstCircle("/Assets/filled-circle.png");
    setSecondCircle("/Assets/empty-circle.png");
    setThirdCircle("/Assets/empty-circle.png");
  };

  const handleSecondCircleClick = () => {
    setActiveBackground("/Assets/background-2.png");
    setFirstCircle("/Assets/empty-circle.png");
    setSecondCircle("/Assets/filled-circle.png");
    setThirdCircle("/Assets/empty-circle.png");
  };

  const handleThirdCircleClick = () => {
    setActiveBackground("/Assets/background-3.png");
    setFirstCircle("/Assets/empty-circle.png");
    setSecondCircle("/Assets/empty-circle.png");
    setThirdCircle("/Assets/filled-circle.png");
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="relative h-screen">
          <img
            src={activeBackground}
            className="w-full h-full object-cover inset-0"
          />
          <div
            className={`absolute inset-0 bg-black ${
              isTrucker ? "opacity-50" : "opacity-50"
            } `}
          ></div>
          <div className="lg:px-[7rem] absolute inset-0 flex flex-col py-2 space-y-8 lg:space-y-0 lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col w-full px-10 lg:px-0 lg:w-3/5 pt-[5rem] mb-[3rem]">
              {
                isTrucker ? (
                  <>
                  <p className="font-rubik font-bold text-[1.7rem] sm:text-4xl md:text-4xl xl:text-6xl text-white pt-8">
                    Banaye Apne Trucks Ko 
                  </p>
                  <p className="font-rubik font-bold text-[1.7rem] lg:pt-[1rem] sm:text-4xl md:text-4xl xl:text-6xl text-white">
                    #AtmaNirbhar</p>
                  </>
                ) : (
                  <>
                  <p className="font-rubik font-bold text-[1.7rem] sm:text-4xl md:text-4xl xl:text-6xl text-white pt-8">
                    Book Full Truck Load.
                  </p>
                  <p className="font-rubik font-bold lg:pt-[1rem] text-[1.7rem] sm:text-4xl md:text-4xl xl:text-6xl text-white pt">
                    Kabhi Bhi. Kahin Bhi.
                  </p>
                  </>
                )
              }
              <div className="lg:pt-[2rem] w-full">
                <div className="dot-list pl-0 hidden lg:block">
                  <div className="lg:flex items-center">
                    <div className="lg:pt-[1rem]">
                      <img src= "/Assets/star-desktop.png" alt="star" />
                    </div>
                    <div className="font-rubik md:text-1xl xl:text-[1.4rem] lg:pt-[1rem] font-medium text-lg m-0 lg:ml-[10px]">
                      {
                        isTrucker ? ("Pan-India loads available") : ("Pan-India operations")
                      }
                    </div>
                  </div>
                  <div className="lg:flex items-center">
                    <div className="lg:pt-[1rem]">
                      <img src= "/Assets/star-desktop.png" alt="star" />
                    </div>
                    <div className="font-rubik md:text-1xl xl:text-[1.4rem] lg:pt-[1rem] lg:pt-[1rem] font-medium text-lg m-0 lg:ml-[10px]">
                      {`${
                        isTrucker
                          ? "Associated with 3,000+ transporters"
                          : "Associated with 10,000+ truck owners"
                      }`}
                    </div>
                  </div>
                  <div className="lg:flex items-center">
                    <div className="lg:pt-[1rem]" >
                      <img src= "/Assets/star-desktop.png" alt="star" />
                    </div>
                    {/* <div className="font-rubik lg:text-[1.4rem] lg:pt-[1rem] font-medium text-lg m-0 lg:ml-[10px]"> */}
                    <div className="font-rubik md:text-1xl xl:text-[1.4rem] lg:pt-[1rem] font-medium text-lg m-0 lg:ml-[10px]">
                      {isTrucker
                        ? "Guaranteed timely payments"
                        : "Dedicated account manager for every booking"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isTrucker ? <TruckerForm /> : <ShipperForm />}
          </div>
          <HomeAdditionalDetail isTrucker={isTrucker} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
