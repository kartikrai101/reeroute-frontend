import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
//
const SecondStep = ({
  setShowSecondStep,
  fromCity,
  toCity,
  setShowSuccessMessage,
  setShowFailMessage,
  materialWeight,
  setMaterialWeight,
  emptyMaterialWeightField,
  vehicleType,
  setVehicleType,
  emptyVehicleTypeField,
  truckLength,
  setTruckLength,
  emptyTruckLengthField,
  truckHeight,
  setTruckHeight,
  emptyTruckHeightField,
  handleSubmit,
  isKg,
  setIsKg,
}) => {
  //   const handleSubmit = () => {
  //     setShowSecondStep(false);
  //     setShowSuccessMessage(true);
  //     // setShowFailMessage(true);
  //   };
  const [toCityShort, setToCityShort] = useState("");
  const [origin, setOrigin] = useState("");

  // useEffect(() => {
  //   setToCityShort(toCity.substring(0, 19) + "...");
  //   if(fromCity.length > 25){
  //     setOrigin(fromCity.substring(0, 25) + "...");
  //   }else{
  //     setOrigin(fromCity);
  //   }
  // }, []);

 
  useEffect(() => {
    // setToCityShort(toCity.substring(0, 19) + "...");
    // if(fromCity.length > 25){
    //   setOrigin(fromCity.substring(0, 25) + "...");
    // }else{
    //   setOrigin(fromCity);
    // }
    if( window.innerWidth <=1100){
      setToCityShort(toCity.substring(0, 10) + "...");
      setOrigin(fromCity.substring(0, 10) + "...");
    }else{
      setToCityShort(toCity.substring(0, 25) + "...");
      setOrigin(fromCity.substring(0, 25) + "...");
    }
  }, []);

  return (
    <div className="flex flex-col items-center space-y-5 ">
      <div className="flex items-center w-full space-x-9 ">
        <AiOutlineArrowLeft
          className="w-8 text-[#2A4F6D] cursor-pointer"
          onClick={() => setShowSecondStep(false)}
        />
        <h3 className="font-rubik font-medium md:text-1xl xl:text-2xl">Book Your Truck!</h3>
      </div>
      <div className="w-full flex flex-col items-start justify-center space-y-5">
        <div className="flex items-center space-x-2">
          <p className="text-[#00000099] font-rubik text-base font-normal">
            Origin:{" "}
            
          </p>
          <span className="text-[#2A4F6D] font-rubik text-base md:text-sm xl:text-base font-medium">
            {origin}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-[#00000099] font-rubik text-base font-normal">
            Destination:{" "}
          </p>
          <span className="text-[#2A4F6D] font-rubik text-base md:text-sm xl:text-base font-medium">
            {toCityShort}
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full space-y-2">
        <label for="vehicleType" className="font-rubik font-normal text-sm">
          Vehicle Type
        </label>
        <select
          id="vehicleType"
          type="text"
          placeholder="0"
          className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="" disabled hidden>
            Select Vehicle Type
          </option>
          <option value="Open Truck">Open Truck</option>
          <option value="Container">Container</option>
          <option value="Small Pickup Truck">Small Pickup Truck</option>
        </select>
        {emptyVehicleTypeField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
      </div>

      <div className="flex flex-col w-full space-y-2">
        <label for="materialWeight" className="font-rubik font-normal text-sm">
          Material Weight
        </label>
        <div className="relative w-full">
          <input
            id="materialWeight"
            type="number"
            placeholder="0"
            className="outline-none border border-[#00000033] py-2 px-1 rounded-md w-full"
            value={materialWeight}
            onChange={(e) => setMaterialWeight(e.target.value)}
          />
          <div className="absolute right-[1%] bottom-[8%]  flex items-center border border-[#00000033] rounded-md">
            <div
              className={`${
                isKg ? "bg-[#FFB629]" : "bg-white"
              } px-3  py-2 rounded-md cursor-pointer`}
              onClick={() => setIsKg(true)}
            >
              <p className="font-rubik font-normal text-xs">KGs</p>
            </div>
            <div
              className={`${
                !isKg ? "bg-[#FFB629]" : "bg-white"
              } px-3 py-2 rounded-md cursor-pointer`}
              onClick={() => setIsKg(false)}
            >
              <p className="font-rubik font-normal text-xs">Tons</p>
            </div>
          </div>
        </div>
        {emptyMaterialWeightField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col w-2/5 space-y-2">
          <label for="truckLength" className="font-rubik font-normal text-sm">
            Truck Length
          </label>
          <select
            id="truckLength"
            className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
            value={truckLength}
            onChange={(e) => setTruckLength(e.target.value)}
          >
            <option value="" disabled hidden>
              0
            </option>
            {
              vehicleType === "Open Truck" ? (
                <>
                  <option value="14ft">14ft</option>
                  <option value="17ft">17ft</option>
                  <option value="19ft">19ft</option>
                  <option value="20ft">20ft</option>
                  <option value="22ft">22ft</option>
                  <option value="24ft">24ft</option>
                  <option value="32ft SXL">32ft SXL</option>
                  <option value="32ft MXL">32ft MXL</option>
                </>
              ) : vehicleType === "Container" ? (
                <>
                  <option value="14ft">14ft</option>
                  <option value="17ft">17ft</option>
                  <option value="19ft">19ft</option>
                  <option value="20ft">20ft</option>
                  <option value="22ft">22ft</option>
                  <option value="24ft">24ft</option>
                  <option value="32ft SLX">32ft SLX</option>
                  <option value="32ft MLX">32ft MLX</option>
                </>
              ) : (
                <>
                  <option value="8ft">8ft</option>
                </>
              )
            }
          </select>
          {emptyTruckLengthField && (
            <p className="font-normal text-[#EA1414] font-rubik text-xs">
              This field is required!
            </p>
          )}
        </div>
        <div className="flex flex-col w-2/5 space-y-2">
          <label for="truckHeight" className="font-rubik font-normal text-sm">
            Truck Height
          </label>
          <select
            id="truckHeight"
            className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
            value={truckHeight}
            onChange={(e) => setTruckHeight(e.target.value)}
          >
            <option value="" disabled hidden>
              0
            </option>
            {
              vehicleType === "Open Truck" ? (
                <>
                  <option value="5 Ft">5ft</option>
                  <option value="6 Ft">6ft</option>
                  <option value="7 Ft">7ft</option>
                  <option value="8 Ft">8ft</option>
                  <option value="9 Ft">9ft</option>
                  <option value="9.5 Ft">9.5ft</option>
                  <option value="10 Ft">10ft</option>
                  <option value="10 Ft+">10ft+</option>
                </>
              ) : vehicleType === "Container" ? (
                <>
                  <option value="5 Ft">5ft</option>
                  <option value="6 Ft">6ft</option>
                  <option value="7 Ft">7ft</option>
                  <option value="8 Ft">8ft</option>
                  <option value="9 Ft">9ft</option>
                  <option value="9.5 Ft">9.5ft</option>
                  <option value="10 Ft">10ft</option>
                  <option value="10 Ft+">10ft+</option>
                </>
              ) : (
                <>
                  <option value="1 Ft">Fixed</option>
                </>
              )
            }
          </select>
          {emptyTruckHeightField && (
            <p className="font-normal text-[#EA1414] font-rubik text-xs">
              This field is required!
            </p>
          )}
        </div>
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

export default SecondStep;
