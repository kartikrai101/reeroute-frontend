import React, { useState, useRef } from "react";
import "./index.css";
import Footer from "./Components/Footer";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "./Constants";
import SuccessMessage from "./Components/FormMessage/SuccessMessage";
import { CircularProgress } from "@material-ui/core";
import FailMessage from "./Components/FormMessage/FailMessage";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from 'react-phone-number-input'
import { Audio, ColorRing } from 'react-loader-spinner';

const Careers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [validPhone, setValidPhone] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {};

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    setEmptyField(false);
    setShowSuccessMessage(false);
    setShowFailMessage(false);
    setValidEmail(true);
    setValidPhone(true);

    const phoneNumberRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.length == 0 ||
      email.length == 0 ||
      mobileNumber.length == 0 ||
      department.length == 0 
    ) {
      setEmptyField(true);
      return;
    }

    const isValidPhone = phoneNumberRegex.test(mobileNumber);

    if (!isValidPhone) {
      setValidPhone(false);
    }

    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setValidEmail(false);
    }

    if (!isValidEmail || !isValidPhone) return;

    setIsLoading(true);

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Accept: "application/json",
      },
    };

    const formData1 = new FormData();

    if(selectedFile == null){
      formData1.append('name', name);
      formData1.append('email', email);
      formData1.append('department', department);
      formData1.append('mobileNumber',mobileNumber);
    } else{
      formData1.append('selectedFile', selectedFile);
      formData1.append('name', name);
      formData1.append('email', email);
      formData1.append('department', department);
      formData1.append('mobileNumber',mobileNumber);

    }
    

    const { data } = await axios.post(`${BASE_URL}/email/carrer`, formData1, config);
    
    // console.log(data.message);
    if(data.message === "message sent successfully"){
      setShowFailMessage(false);
      setName("");
      setEmail("");
      setMobileNumber("");
      setDepartment("");
      setSelectedFile(null);
      setIsLoading(false);
    }
  };

  const handleSuccess = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  const handleFailure = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileClick = () => {
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      window.open(fileURL, "_blank");
    }
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="relative h-1/2vh">
          <img
            src={`/Assets/ContactUsBackground.png`}
            className="w-full h-full object-cover inset-0 hidden lg:block"
          />
          <img
            src={`/Assets/joinUsBannerMobile.png`}
            className="w-full h-full object-cover inset-0 lg:hidden"
          />
          <div className={`absolute inset-0 bg-black opacity-80 `}></div>
          <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
            <div className="flex flex-col w-full px-4 lg:px-0 lg:w-[85%] space-y-3">
              <p className="font-rubik font-bold  lg:w-auto text-3xl sm:text-4xl md:text-6xl text-white">
                Join Our Team
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-screen py-16 flex justify-center">
          {showSuccessMessage ? (
            <SuccessMessage setOpen={handleSuccess} />
          ) : showFailMessage ? (
            <FailMessage setOpen={handleFailure} />
          ) : (
            <div className="lg:border lg:border-[#000000CC] rounded-lg lg:py-16 lg:px-10 flex flex-col items-start w-[90%] lg:w-1/2 space-y-8">
              <div className="flex flex-col w-full items-start space-y-2">
                <h3 className="font-rubik font-semibold text-2xl lg:text-4xl text-[#2A4F6D] lg:text-[#2A4F6D]">
                  Join Our Team
                </h3>
                <p className="font-rubik text-lg text-[#666C89] lg:text-[#666C89] lg:text-lg">
                  Unlock your potential and build a fulfilling career in the
                  dynamic world of logistics!
                </p>
              </div>

              <div className="flex flex-col lg:flex-row w-full items-start lg:items-around justify-center lg:justify-around space-y-5 lg:space-y-0">
                <div className="flex flex-row lg:flex-col items-center space-x-5 lg:space-x-0 lg:justify-start space-y-2">
                  <a href="mailto: info@reeroute.in" target="_blank">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center">
                      <img src="/Assets/email-careers.png" className="" />
                    </div>
                  </a>
                  <div>
                  <div>
                    <div><p className="lg:hidden font-semibold font-rubik text-black">Email</p></div>
                    <a href="mailto: info@reeroute.in" target="_blank"><div><p className="font-rubik text-black">info@reeroute.in</p></div></a>
                  </div>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col items-center space-x-5 lg:space-x-0 lg:justify-start space-y-2">
                  <a href="tel: +91 7300042518" target="_blank">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center">
                      <img src="/Assets/phone-careers.png" className="" />
                    </div>
                  </a>
                  <a href="tel: +91 7300042518" target="_blank">
                    <div>
                      <div><p className="lg:hidden font-rubik font-semibold text-black">Contact</p></div>
                      <div><p className="font-rubik text-black">+91 7300042518</p></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-8 lg:space-y-0">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full lg:w-[45%] outline-none px-4 py-2 border border-[#2A4F6D] lg:border-[#00000033] placeholder:text-[#2A4F6D] lg:placeholder:text-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Id*"
                  className={`w-full lg:w-[45%] outline-none px-4 py-2 border ${
                    validEmail
                      ? " border-[#2A4F6D] lg:border-[#00000033] "
                      : "border-red-600"
                  } placeholder:text-[#2A4F6D]  lg:placeholder:text-black`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-8 lg:space-y-0">
                <input
                  type="text"
                  placeholder="Mobile Number*"
                  className={`w-full lg:w-[45%] outline-none px-4 py-2 border ${
                    validPhone
                      ? "border-[#2A4F6D] lg:border-[#00000033]"
                      : "border-red-600"
                  }  placeholder:text-[#2A4F6D] lg:placeholder:text-black`}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <select
                  className="w-full lg:w-[45%] outline-none px-4 py-2 border border-[#2A4F6D] lg:border-[#00000033] text-[#2A4F6D] lg:text-black"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="" hidden disabled selected>
                    Department*
                  </option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Operations">Operations</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-8 lg:space-y-0">
                {selectedFile ? (
                  <div className="flex flex-col items-center space-y-3">
                    <label className="border border-[#00000033] rounded-md px-6 py-3 font-rubik text-base font-semibold text-[#23212A] w-fit">
                      Uploaded
                    </label>
                    {selectedFile && (
                      <p
                        onClick={handleFileClick}
                        className="hover:underline cursor-pointer"
                      >
                        Selected File: {selectedFile.name}
                      </p>
                    )}
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="resume-upload"
                      className="border border-[#00000033] rounded-md px-6 py-3 font-rubik text-base font-semibold text-[#23212A]"
                    >
                      Upload Resume
                    </label>
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf"
                      name="selectedFile"
                      ref={fileInputRef}
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </>
                )}
              </div>

              <div className="flex flex-col w-full items-center space-y-4 justify-center">
                {
                  isLoading ? null : (
                    <button
                    className="w-full  bg-[#f79633] py-3 font-rubik text-lg font-semibold text-white"
                    onClick={handleSubmit}
                  >Submit</button>
                  )
                }
                  {isLoading ? (
                    <div className="z-50">
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={['#f79633', '#f79633', '#f79633', '#f79633', '#f79633', '#f79633']}
                    />
                    </div>
                  ) : null}
                {emptyField && (
                  <p className="font-rubik font-normal text-sm text-red-500">
                    Please fill all the fields appropriately
                  </p>
                )}
                {(!validEmail || !validPhone) && (
                  <p className="font-rubik font-normal text-sm text-red-500">
                    Fill all the fields correctly
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
