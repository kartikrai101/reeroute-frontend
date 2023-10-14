import React, { useState } from "react";
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
import AutocompleteInput from "./Components/AutocompleteInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from 'react-phone-number-input'

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  const handleClick = () => {
    // setAllLinksToInactive();
    window.scroll(0, 0);
  };

  const handleSubmit = async () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
    setEmptyField(false);
    setValidEmail(true);
    setValidPhone(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{10}$/;

    if (
      name.length == 0 ||
      email.length == 0 ||
      phoneNumber.length == 0 ||
      city.length == 0 ||
      message.length == 0
    ) {
      setEmptyField(true);
      return;
    }

    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setValidEmail(false);
    }
    const isValidPhone = phoneNumberRegex.test(phoneNumber);

    if (!isValidPhone) {
      setValidPhone(false);
    }

    if (!isValidEmail || !isValidPhone) return;

    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/email/contactUs`, {
        name,
        email,
        phoneNumber,
        city,
        message,
      })
      .then((res) => {
        setShowSuccessMessage(true);
        setIsLoading(false);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setCity("");
        setMessage("");
      })
      .catch((error) => {
        setShowFailMessage(true);
        setIsLoading(false);
      });
  };

  const handleSuccess = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  const handleFailure = () => {
    setShowFailMessage(false);
    setShowSuccessMessage(false);
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="relative h-1/2vh">
          <img
            src={`/Assets/ContactUsBackground.png`}
            className="w-full h-full object-cover inset-0 hidden lg:block"
            alt=""
          />
          <img
            src={`/Assets/joinUsBannerMobile.png`}
            className="w-full h-full object-cover inset-0 lg:hidden"
            alt=""
          />
          <div className={`absolute inset-0 bg-black opacity-80 `}></div>
          <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
            <div className="flex flex-col w-full px-4 lg:px-0 lg:w-[70%] space-y-3">
              <p className="font-rubik font-bold w-1/2 lg:w-auto text-3xl sm:text-4xl md:text-6xl text-white">
                Contact Us
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
            <>
              <div className="lg:border lg:border-[#000000CC] rounded-lg lg:py-16 lg:px-10 flex flex-col items-start w-[90%] lg:w-1/2 space-y-8">
                <div className="flex flex-col w-full items-start space-y-2">
                  <h3 className="font-rubik font-semibold text-2xl lg:text-4xl text-[#2A4F6D] lg:text-[#2A4F6D]">
                    Get in touch with us
                  </h3>
                  <p className="font-rubik text-lg text-[#666C89] lg:text-[#666C89]">
                    Choose ReeRoute as your logistics partner and experience
                    seamless operations, improved efficiency, and cost-effective
                    solutions for your supply chain.
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
                    placeholder="Your Name*"
                    className="w-full lg:w-[45%] outline-none px-4 py-2 border border-[#2A4F6D] lg:border-[#00000033] placeholder:text-[#2A4F6D] lg:placeholder:text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className={`w-full lg:w-[45%] outline-none px-4 py-2 border ${
                      validEmail
                        ? "border-[#2A4F6D] lg:border-[#00000033]"
                        : "border-red-600"
                    }  placeholder:text-[#2A4F6D] lg:placeholder:text-black`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-8 lg:space-y-0">
                  <input
                    type="text"
                    placeholder="Phone Number*"
                    className={`w-full lg:w-[45%]  outline-none px-4 py-2 border ${
                      validPhone
                        ? "border-[#2A4F6D] lg:border-[#00000033]"
                        : "border-red-600"
                    }  placeholder:text-[#2A4F6D] lg:placeholder:text-black`}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <div className="w-full lg:w-[45%]">
                    <AutocompleteInput
                      setCity={setCity}
                      placeholder={"City*"}
                      additionalChange={true}
                      contact = {true}
                      className="placeholder:text-[#2A4F6D] lg:placeholder:text-black"
                    />
                  </div>
                </div>

                <textarea
                  rows="9"
                  placeholder="Your Message"
                  className="outline-none px-4 py-2 border border-[#2A4F6D] lg:border-[#00000033] resize-none placeholder:text-[#2A4F6D] lg:placeholder:text-black w-full"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <div className="flex flex-col w-full justify-center items-center space-y-4">
                  <button
                    className="w-full  bg-[#f79633] py-3 font-rubik text-lg font-semibold text-white"
                    onClick={handleSubmit}
                  >
                    Submit Message
                    {isLoading ? (
                      <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-30 text-white z-50">
                        <CircularProgress
                          color="inherit"
                          size="2rem"
                          className="self-center"
                        />
                      </div>
                    ) : null}
                  </button>
                  {emptyField && (
                    <p className="font-rubik font-normal text-sm text-red-500">
                      Fill all the required fields
                    </p>
                  )}
                  {(!validEmail || !validPhone) && (
                    <p className="font-rubik font-normal text-sm text-red-500">
                      Fill all the fields correctly
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
