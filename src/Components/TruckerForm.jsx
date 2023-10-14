import React, { useState, useEffect } from "react";
import SuccessMessage from "./FormMessage/SuccessMessage";
import FailMessage from "./FormMessage/FailMessage";
import axios from "axios";
import { BASE_URL } from "../Constants";
import { CircularProgress } from "@material-ui/core";
import MapComponent from "./MapComponent";
import AutocompleteInput from "./AutocompleteInput";
import intlTelInput from 'intl-tel-input';
import ReactIntlTelInput from 'react-intl-tel-input-v2';
import 'intl-tel-input/build/css/intlTelInput.css';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from 'react-phone-number-input'


const TruckerForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [numberOfTrucks, setNumberOfTrucks] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [emptyMobileNumberField, setEmptyMobileNumberField] = useState(false);
  const [emptyNumberOfTrucksField, setEmptyNumberOfTrucksField] = useState(false);
  const [emptyCityField, setEmpltyCityField] = useState(false);
  const [emptyNameField, setEmpltyNameField] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validNumberOfTrucks, setValidNumberOfTrucks] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  const handleSubmit = async () => {
    setEmpltyCityField(false);
    setEmpltyNameField(false);
    setEmptyMobileNumberField(false);
    setEmptyNumberOfTrucksField(false);
    setValidNumberOfTrucks(true);
    setValidPhone(true);

    const phoneNumberRegex = /^\d{10}$/;

    if (mobileNumber.length === 10) {
      setEmptyMobileNumberField(false);
    }

    if (numberOfTrucks.length === 0) {
      setEmptyNumberOfTrucksField(true);
    }

    if (city.length == 0) {
      setEmpltyCityField(true);
    }

    if(name.length == 0){
      setEmpltyNameField(true);
    }

    if (
      mobileNumber.length == 0 ||
      numberOfTrucks.length == 0 ||
      city.length == 0
    )
      return;

    const isValidPhone = phoneNumberRegex.test(mobileNumber);

    if (!isValidPhone) {
      setValidPhone(false);
      return;
    }

    setIsLoading(true);

    await axios
      .post(`${BASE_URL}/email/trucker`, {
        mobileNumber,
        numberOfTrucks,
        city,
      })
      .then((res) => {
        setShowSuccessMessage(true);
        setIsLoading(false);
        setMobileNumber("");
        setNumberOfTrucks("");
        setCity("");
        setName("");
      })
      .catch((error) => {
        setShowFailMessage(true);
        setIsLoading(false);
      });
  };

  const handleSuccessSubmit = () => {
    setShowSuccessMessage(false);
  };

  const handleFailSubmit = () => {
    setShowFailMessage(false);
  };

  return (
    <div className="bg-white rounded-lg p-5 w-[80%] lg:w-[30%] relative">
      {showSuccessMessage ? (
        <SuccessMessage setOpen={handleSuccessSubmit} />
      ) : showFailMessage ? (
        <FailMessage setOpen={handleFailSubmit} />
      ) : (
        <div className="flex flex-col  items-center space-y-5">
          <h3 className="font-rubik font-medium text-2xl">Onboard Your Trucks!</h3>

          <div className="flex flex-col w-full space-y-2">
            <label for="city" className="font-rubik font-normal text-sm">
              Your Name
            </label>
            <input className="border border-[#00000033] rounded-md outline-none py-2 px-1  w-full" placeholder="Enter your name" setName={setName} />
            {emptyNameField && (
              <p className="font-normal text-[#EA1414] font-rubik text-xs">
                This field is required!
              </p>
            )}
          </div>


          <div className="flex flex-col w-full space-y-2">
            <label
              for="mobileNumber"
              className="font-rubik font-normal text-sm"
            >
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="text"
              placeholder="Enter Mobile No."
              className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            {emptyMobileNumberField && (
              <p className="font-normal text-[#EA1414] font-rubik text-xs">
                This field is required!
              </p>
            )}
            {!validPhone && (
              <p className="font-normal text-[#EA1414] font-rubik text-xs">
                Please fill correct moble number!
              </p>
            )}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label
              for="truckNumbers"
              className="font-rubik font-normal text-sm"
            >
              Number of Trucks
            </label>
            <input
              id="truckNumbers"
              type="number"
              placeholder="Enter number of trucks"
              className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
              value={numberOfTrucks}
              onChange={(e) => setNumberOfTrucks(e.target.value)}
            />
            {emptyNumberOfTrucksField && (
              <p className="font-normal text-[#EA1414] font-rubik text-xs">
                This field is required!
              </p>
            )}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label for="city" className="font-rubik font-normal text-sm">
              Your City
            </label>
            <AutocompleteInput placeholder="Enter your city" setCity={setCity} />
            {emptyCityField && (
              <p className="font-normal text-[#EA1414] font-rubik text-xs">
                This field is required!
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
      )}
      {isLoading ? (
        <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-30 text-white z-50">
          <CircularProgress
            color="inherit"
            size="7rem"
            className="self-center"
          />
        </div>
      ) : null}
    </div>
  );
};

export default TruckerForm;
