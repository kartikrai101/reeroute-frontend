import React from "react";
import GoogleAutocomplete from "react-google-autocomplete";

const AutocompleteInput = ({
  contact,
  setCity,
  placeholder = "",
  additionalChange = false,
}) => {
  const options = {
    types: ["(regions)"],
    componentRestrictions: { country: "IN" },
  };

  const handlePlaceSelected = (place) => {
    setCity(place.formatted_address);
  };

  const API_KEY = "AIzaSyAbgSWBi_qaOWO8YWL8lNSwk8JPIz8Nb9w";

  return (
    <GoogleAutocomplete
      apiKey={API_KEY}
      onPlaceSelected={handlePlaceSelected}
      className={`outline-none py-2 px-1  w-full ${
        additionalChange
          ? `border border-[#2A4F6D] lg:border-[#00000033] placeholder:text-[#2A4F6D] lg:placeholder:text-black"`
          : "border border-[#00000033] rounded-md"
      } ${contact ? "pl-[1rem] placeholder:text-[#2A4F6D] lg:placeholder:text-black" : ""}`}
      placeholder={placeholder}
      options={options}
    />
  );
};

export default AutocompleteInput;
