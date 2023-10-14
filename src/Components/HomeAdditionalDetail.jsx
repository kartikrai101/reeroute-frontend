import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  IoCallOutline,
  IoLocationOutline,
  IoStopCircle,
} from "react-icons/io5";
import FAQsection from "./HomePageComponents/FAQsection";
import BottomBannerSection from "./HomePageComponents/BottomBannerSection";
import UserReviewSections from "./HomePageComponents/UserReviewSections";
import HowItWorksSection from "./HomePageComponents/HowItWorksSection";

const HomeAdditionalDetail = ({ isTrucker }) => {
  return (
    <>
      <div className="lg:w-[100%] lg:px-[90px] w-full py-14 flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-around">
        <div className="w-full md:hidden flex items-center px-4">
          <ul className="space-y-4">
            <li className="font-rubik  text-lg text-[#2A4F6D] flex space-x-3 w-full items-start">
              <img src="/Assets/list-icon.png" className="w-3 h-3 mt-2" />
              {
                isTrucker ? (<p>Pan-India loads available</p>) : (<p>Pan-India operations</p>)
              }
            </li>
            <li className="font-rubik  text-lg text-[#2A4F6D] flex space-x-3 w-full items-start">
              <img src="/Assets/list-icon.png" className="w-3 h-3 mt-2" />
              <p>{`${
                isTrucker
                  ? "Associated with 3,000+ transporters"
                  : "Associated with 10,000+ truck owners"
              }`}</p>
            </li>
            <li className="font-rubik text-lg text-[#2A4F6D] flex space-x-3 w-full items-center">
              <img src="/Assets/list-icon.png" className="w-3 h-3" />
              {
                isTrucker ? <p>Guaranteed timely payments</p> : <p>Dedicated account manager for every booking</p>
              }
            </li>
          </ul>
        </div>
        <div className="flex w-full lg:w-auto justify-center lg:justify-between space-x-1 items-center py-4 lg:py-0 px-3 lg:px-0">
          <div className="w-[33%] flex flex-row justify-end lg:w-auto">
            <p className="pr-4 lg:w-auto font-rubik font-semibold text-3xl text-[#2A4F6D]">
              10,000+
            </p>
          </div>
          <div className=" flex flex-row justify-center lg:w-auto">
            <div className="w-4 h-4 bg-[#f99d5e]"></div>
          </div>
          <div className="w-[33%] flex flex-row justify-start lg:w-auto">
            <p className="pl-4 lg:pl-2 lg:w-auto font-rubik font-normal text-base text-[#2A4F6D]">
              Truck Owners
            </p>
          </div>
        </div>
        
        <div className="flex w-full lg:w-auto justify-center lg:justify-between space-x-1 items-center py-4 lg:py-0 px-3 lg:px-0">
          <div className="w-[33%] flex flex-row justify-end lg:w-auto">
            <p className="pr-4 lg:w-auto font-rubik font-semibold text-3xl text-[#2A4F6D]">
              25,000+
            </p>
          </div>
          <div className=" flex flex-row justify-center lg:w-auto">
            <div className="w-4 h-4  bg-[#f99d5e]"></div>
          </div>
          <div className="w-[33%] flex flex-row justify-start lg:w-auto">
            <p className="pl-4 lg:pl-2 lg:w-auto font-rubik font-normal text-base text-[#2A4F6D]">
              Successful Bookings
            </p>
          </div>
        </div>

        <div className="flex w-full lg:w-auto justify-center lg:justify-between space-x-1 items-center py-4 lg:py-0 px-3 lg:px-0">
          <div className="w-[33%] flex flex-row justify-end lg:w-auto">
            <p className="pr-4 lg:w-auto font-rubik font-semibold text-3xl text-[#2A4F6D]">
              3,000+
            </p>
          </div>
          <div className=" flex flex-row justify-center lg:w-auto">
            <div className="w-4 h-4  bg-[#f99d5e]"></div>
          </div>
          <div className="w-[33%] flex flex-row justify-start lg:w-auto">
            <p className="pl-4 lg:pl-2 lg:w-auto font-rubik font-normal text-base text-[#2A4F6D]">
              Satisfied Clients
            </p>
          </div>
        </div>

        <div className="flex w-full lg:w-auto justify-center lg:justify-between space-x-1 items-center py-4 lg:py-0 px-3 lg:px-0">
          <div className="w-[33%] flex flex-row justify-end lg:w-auto">
            <p className="pr-4 lg:w-auto font-rubik font-semibold text-3xl text-[#2A4F6D]">
              70+
            </p>
          </div>
          <div className=" flex flex-row justify-center lg:w-auto">
            <div className="w-4 h-4  bg-[#f99d5e]"></div>
          </div>
          <div className="w-[33%] flex flex-row justify-start lg:w-auto">
            <p className="pl-4 lg:pl-2 lg:w-auto font-rubik font-normal text-base text-[#2A4F6D]">
              Cities Covered
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row sapce-y-6 lg:space-y-0 bg-[#F4F4F4] items-center py-10"
        id="download-section"
      >
        {
          isTrucker ? (
            <img src="/Assets/mobiles-trucker.png" className="w-full lg:w-1/2" />
          ) : (
            <img src="/Assets/mobiles-shipper.png" className="w-full lg:w-1/2" />
          )
        }

        {isTrucker ? (
          <div className="flex flex-col-reverse lg:flex-col w-full lg:w-1/2 space-y-8">
            <div className="mt-8 lg:mt-0 px-3 pl-5 lg:pl-0 lg:px-0 flex flex-col w-full lg:w-[70%] space-y-9">
              <div className="flex flex-col">
                <p className="font-rubik text-2xl text-[#2A4F6D]">
                  Choose Your Own Load
                </p>
                <p className="font-rubik font-normal text-lg text-[#666C89]">
                  Take control of your workload with our interactive "Choose
                  Your Own Load" feature. Select the type of load and city based
                  on real-time truck availability.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-rubik text-2xl text-[#2A4F6D]">
                  Timely Payments
                </p>
                <p className="font-rubik font-normal text-lg text-[#666C89]">
                  Experience the power of interactive payments. With ReeRoute,
                  get advance payment in 2 hours after loading and balance
                  within 24 hours upon proof of delivery.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-rubik text-2xl text-[#2A4F6D]">
                  Manage Bookings Seamlessly
                </p>
                <p className="font-rubik font-normal text-lg text-[#666C89]">
                  Seamlessly manage your bookings and payment details with our
                  interactive platform. Say goodbye to paperwork and scattered
                  information.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-center lg:text-left lg:font-rubik font-medium text-2xl text-[#2A4F6D]">
                {`Download ${isTrucker ? "Trucker" : "Shipper"} App`}
              </p>
              <div className="flex justify-center lg:justify-start flex-row space-x-2 w-full items-center">
                <img src="/Assets/google.png" className="w-32" />
                <img src="/Assets/apple.png" className="w-32" />
              </div>
              <p className="text-center lg:text-left text-[#000000E6] italic font-rubik text-lg">
                Coming Soon...
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse lg:flex-col w-full lg:w-1/2 space-y-8">
            <div className="mt-8 lg:mt-0 px-3 pl-5 lg:pl-0 lg:px-0 flex flex-col w-full lg:w-[70%] space-y-9">
              <div className="flex flex-col">
                <p className="font-rubik text-2xl text-[#2A4F6D]">
                  Verified Truck Owners
                </p>
                <p className="font-rubik text-lg text-[#666C89]">
                  At ReeRoute, we ensure the authenticity of our truck owners
                  through a meticulous verification process. Rest assured, your
                  transportation needs are in safe hands.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-rubik text-2xl text-[#2A4F6D]">
                  Best Price
                </p>
                <p className="font-rubik font-normal text-lg text-[#666C89]">
                  We believe in providing reliable truck transportation services
                  without breaking the bank. With ReeRoute, you get the best
                  price for your logistics needs.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-rubik text-2xl text-[#2A4F6D]">
                  Customer Centricity
                </p>
                <p className="font-rubik font-normal text-lg text-[#666C89]">
                  Your satisfaction is our top priority. Our dedicated team is
                  here to provide exceptional customer support at every stage of
                  your trip.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-center lg:text-left lg:font-rubik font-bold font-medium text-[#2A4F6D] text-2xl">
                {`Download ${isTrucker ? "Trucker" : "Shipper"} App`}
              </p>
              <div className="flex justify-center lg:justify-start flex-row space-x-2 w-full items-center">
                <img src="/Assets/google.png" className="w-32" />
                <img src="/Assets/apple.png" className="w-32" />
              </div>
              <p className="text-center lg:text-left italic text-[#000000E6] font-rubik text-lg">
                Coming Soon...
              </p>
            </div>
          </div>
        )}
      </div>

      <HowItWorksSection isTrucker={isTrucker} />

      <UserReviewSections isTrucker={isTrucker} />

      <FAQsection isTrucker={isTrucker} />

      {/* <BottomBannerSection /> */}
    </>
  );
};

export default HomeAdditionalDetail;
