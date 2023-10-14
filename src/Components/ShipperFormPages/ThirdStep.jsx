import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from 'react-phone-number-input'

const ThirdStep = ({
  setShowThirdStep,
  fromCity,
  toCity,
  company,
  setCompany,
  emptyCompanyField,
  PhoneNumber,
  setPhoneNumber,
  emptyPhoneNumberField,
  handleSubmit,
  validMobileNumber,
}) => {
  return (
    <div className="flex flex-col items-center space-y-5 ">
      <div className="flex items-center w-full space-x-9">
        <AiOutlineArrowLeft
          className="w-8 text-[#2A4F6D] cursor-pointer"
          onClick={() => setShowThirdStep(false)}
        />
        <h3 className="font-rubik font-medium text-2xl">Book Your Truck!</h3>
      </div>

      <div className="flex flex-col w-full space-y-2">
        <label for="company" className="font-rubik font-normal text-sm">
          Company Name
        </label>
        <input
          id="company"
          type="text"
          placeholder="Enter your company name"
          className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        {emptyCompanyField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
      </div>

      <div className="flex flex-col w-full space-y-2">
        <label for="PhoneNumber" className="font-rubik font-normal text-sm">
          Mobile Number
        </label>
          <input
              id="mobileNumber"
              type="number"
              placeholder="Enter Mobile No."
              className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
          />
        
        {emptyPhoneNumberField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
        {!validMobileNumber && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            Please fill correct Mobile Number!
          </p>
        )}
      </div>

      <div className="w-full ">
        <button
          className="w-full  bg-[#f79633] py-3 font-rubik text-lg font-semibold text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ThirdStep;
