import React from "react";
import AutocompleteInput from "../AutocompleteInput";

const FirstStep = ({
  fromCity,
  toCity,
  setFromCity,
  setToCity,
  emptyFromCityField,
  emptyToCityField,
  setShowSecondStep,
  handleSubmit,
}) => {

  return (
    <div className="flex flex-col items-center space-y-10 ">
      <h3 className="font-rubik font-medium text-2xl">Book Your Truck!</h3>
      <div className="flex flex-col w-full space-y-2">
        <label for="fromCity" className="font-rubik font-normal text-sm">
          Origin (From)
        </label>
        <AutocompleteInput
          setCity={setFromCity}
          placeholder={"Enter origin city/location"}
        />
        {emptyFromCityField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label for="toCity" className="font-rubik font-normal text-sm">
          Destination (To)
        </label>
        <AutocompleteInput
          setCity={setToCity}
          placeholder={"Enter destination city/location"}
        />
        {emptyToCityField && (
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
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
