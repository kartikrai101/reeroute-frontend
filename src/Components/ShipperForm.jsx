import React, { useState } from "react";
import SuccessMessage from "./FormMessage/SuccessMessage";
import FailMessage from "./FormMessage/FailMessage";
import FirstStep from "./ShipperFormPages/FirstStep";
import SecondStep from "./ShipperFormPages/SecondStep";
import axios from "axios";
import { BASE_URL } from "../Constants";
import { CircularProgress } from "@material-ui/core";
import ThirdStep from "./ShipperFormPages/ThirdStep";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from 'react-phone-number-input'


const ShipperForm = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [emptyFromCityField, setEmptyFromCityField] = useState(false);
  const [emptyToCityField, setEmptyToCityField] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [showSecondStep, setShowSecondStep] = useState(false);
  const [showThirdStep, setShowThirdStep] = useState(false);

  const [materialWeight, setMaterialWeight] = useState("");
  const [emptyMaterialWeightField, setEmptyMaterialWeightField] =
    useState(false);
  const [vehicleType, setVehicleType] = useState("Container");
  const [emptyVehicleTypeField, setEmpltyVehicleTypeField] = useState(false);
  const [truckLength, setTruckLength] = useState("");
  const [emptyTruckLengthField, setEmptyTruckLengthField] = useState(false);
  const [truckHeight, setTruckHeight] = useState("");
  const [emptyTruckHeightField, setEmptyTruckHeightField] = useState(false);
  const [isKg, setIsKg] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [company, setCompany] = useState("");
  const [emptyCompanyField, setEmptyCompanyField] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emptyPhoneNumberField, setEmptyPhoneNumberField] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);

  const handleFirstStepSubmit = () => {
    setEmptyFromCityField(false);
    setEmptyToCityField(false);

    if (fromCity.length == 0) {
      setEmptyFromCityField(true);
    }

    if (toCity.length == 0) {
      setEmptyToCityField(true);
    }

    if (fromCity.length == 0 || toCity.length == 0) return;

    setShowSecondStep(true);

    // setFromCity("");
    // setToCity("");
    // setShowSuccessMessage(true);

    // setShowFailMessage(true);
  };

  const handleSecondStepSubmit = async () => {
    setEmptyMaterialWeightField(false);
    setEmpltyVehicleTypeField(false);
    setEmptyTruckLengthField(false);
    setEmptyTruckHeightField(false);

    if (materialWeight.length == 0) {
      setEmptyMaterialWeightField(true);
    }

    if (vehicleType.length == 0) {
      setEmpltyVehicleTypeField(true);
    }

    if (truckLength.length == 0) {
      setEmptyTruckLengthField(true);
    }

    if (truckHeight.length == 0) {
      setEmptyTruckHeightField(true);
    }

    if (
      materialWeight.length == 0 ||
      vehicleType.length == 0 ||
      truckLength.length == 0 ||
      truckHeight.length == 0
    )
      return;

    // setShowSecondStep(false);
    setShowThirdStep(true);
    // setShowSecondStep(true);
    // setIsLoading(true);
    // await axios
    //   .post(`${BASE_URL}/email/shipper`, {
    //     fromCity,
    //     toCity,
    //     materialWeight,
    //     isKg,
    //     vehicleType,
    //     truckLength,
    //     truckHeight,
    //   })
    //   .then((res) => {
    //     setShowSuccessMessage(true);
    //     setShowSecondStep(false);
    //     setIsLoading(false);
    //     setFromCity("");
    //     setToCity("");
    //     setMaterialWeight("");
    //     setVehicleType("");
    //     setTruckLength("");
    //     setTruckHeight("");
    //     setIsKg(true);
    //   })
    //   .catch((error) => {
    //     setShowFailMessage(true);
    //     setIsLoading(false);
    //   });

    // setShowSuccessMessage(true);

    // setFromCity("");
    // setToCity("");
    // setShowSuccessMessage(true);

    // setShowFailMessage(true);
  };

  const handleThirdStepSubmit = async () => {
    setEmptyCompanyField(false);
    setEmptyPhoneNumberField(false);
    setValidPhoneNumber(true);

    if (company.length == 0) setEmptyCompanyField(true);

    if (phoneNumber.length == 0) setEmptyPhoneNumberField(true);

    if (company.length == 0 || phoneNumber.length == 0) return;

    const phoneNumberRegex = /^\d{10}$/;

    const isValidPhone = phoneNumberRegex.test(phoneNumber);

    if (!isValidPhone) {
      setValidPhoneNumber(false);
      return;
    }

    console.log('truckLength',truckLength);
    console.log('truckHeight',truckHeight);
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/email/shipper`, {
        fromCity,
        toCity,
        materialWeight,
        isKg,
        vehicleType,
        truckLength,
        truckHeight,
        company,
        phoneNumber,
      })
      .then((res) => {
        setShowSuccessMessage(true);
        setShowSecondStep(false);
        setShowThirdStep(false);
        setIsLoading(false);
        setFromCity("");
        setToCity("");
        setMaterialWeight("");
        setVehicleType("");
        setTruckLength("");
        setTruckHeight("");
        setIsKg(true);
        setCompany("");
        setPhoneNumber("");
      })
      .catch((error) => {
        setShowFailMessage(true);
        setIsLoading(false);
      });
  };

  const handleSuccessClose = () => {
    setShowSuccessMessage(false);
    setShowSecondStep(false);
  };

  const handleFailClose = () => {
    setShowFailMessage(false);
    setShowSecondStep(true);
  };

  return (
    <div className="bg-white rounded-lg p-5 w-[80%] lg:w-[30%]  relative">
      {showSuccessMessage ? (
        <SuccessMessage setOpen={handleSuccessClose} />
      ) : showFailMessage ? (
        <FailMessage setOpen={handleFailClose} />
      ) : showThirdStep ? (
        <ThirdStep
          setShowThirdStep={setShowThirdStep}
          fromCity={fromCity}
          toCity={toCity}
          company={company}
          setCompany={setCompany}
          emptyCompanyField={emptyCompanyField}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          emptyPhoneNumberField={emptyPhoneNumberField}
          handleSubmit={handleThirdStepSubmit}
          validMobileNumber={validPhoneNumber}
        />
      ) : showSecondStep ? (
        <SecondStep
          setShowSecondStep={setShowSecondStep}
          fromCity={fromCity}
          toCity={toCity}
          setShowSuccessMessage={setShowSuccessMessage}
          setShowFailMessage={setShowFailMessage}
          materialWeight={materialWeight}
          setMaterialWeight={setMaterialWeight}
          emptyMaterialWeightField={emptyMaterialWeightField}
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          emptyVehicleTypeField={emptyVehicleTypeField}
          truckLength={truckLength}
          setTruckLength={setTruckLength}
          emptyTruckLengthField={emptyTruckLengthField}
          truckHeight={truckHeight}
          setTruckHeight={setTruckHeight}
          emptyTruckHeightField={emptyTruckHeightField}
          handleSubmit={handleSecondStepSubmit}
          isKg={isKg}
          setIsKg={setIsKg}
        />
      ) : (
        <FirstStep
          fromCity={fromCity}
          toCity={toCity}
          emptyFromCityField={emptyFromCityField}
          emptyToCityField={emptyToCityField}
          setShowSecondStep={setShowSecondStep}
          setFromCity={setFromCity}
          setToCity={setToCity}
          handleSubmit={handleFirstStepSubmit}
        />
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

export default ShipperForm;
