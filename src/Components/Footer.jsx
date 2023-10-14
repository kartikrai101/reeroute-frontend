import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // setAllLinksToInactive();
    window.scroll(0, 0);
  };

  const handleHowItWorkClick = () => {
    setTimeout(() => {
      const howItWorksSection = document.getElementById("how-it-works");
      if (howItWorksSection) {
        howItWorksSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleDownloadClick = () => {
    setTimeout(() => {
      const downloadSection = document.getElementById("download-section");
      if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <>
      <div className="h-auto lg:min-h-[40%] bg-[#2A4F6D] py-8 lg:py-16 px-10 lg:px-16 w-full flex flex-wrap lg:flex-nowrap flex-row space-y-5 lg:space-x-7 lg:space-y-0 items-start lg:items-center justify-center p-2 pt-16">
        <div className="flex flex-col lg:px-10 justify-end  w-full lg:w-[26%] h-1/2 space-y-5">
          <div className="flex flex-col justify-center items-start w-full space-y-5 lg:space-y-2">
            <NavLink to="/" onClick={handleClick}>
              <img
                src="/Assets/logo.png"
                className="w-[90px] hidden lg:block"
                alt=""
              />
            </NavLink>

            <NavLink to="/" onClick={handleClick}>
              <img
                src="/Assets/logo-mobile.png"
                className="w-[90px] block lg:hidden"
                alt=""
              />
            </NavLink>
            <p className="font-rubik text-xl lg:text-lg text-[#fff]">
              Book Full Truck Load. Kabhi Bhi. Kahin Bhi.
            </p>
          </div>
        </div>

        <div className="pt-10 lg:mt-0 flex flex-col justify-start  w-1/2 lg:w-[25%] h-1/2 space-y-3">
          <Link
            to="/aboutUs"
            className="font-rubik text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            About Us
          </Link>
          <Link
            to="/"
            className="font-rubik text-base text-white cursor-pointer"
            onClick={handleHowItWorkClick}
          >
            How it Works
          </Link>
          <Link
            to="/"
            className="font-rubik text-base text-white cursor-pointer"
            onClick={handleDownloadClick}
          >
            Download App
          </Link>
          <Link
            to="/contactUs"
            className="font-rubik text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            Contact Us
          </Link>
        </div>

        <div className="pt-10 lg:pt-0 lg:mt-0 flex flex-col justify-start  w-1/2 lg:w-[25%] h-1/2 space-y-3">
          <Link
            to="/carrers"
            className="font-rubik text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            Careers
          </Link>
          <Link
            to="/terms-and-conditions"
            className="font-rubik text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="font-rubik text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            Privacy Policy
          </Link>
        </div>

        <div className="pt-10 lg:mt-0 flex flex-col justify-start w-full lg:w-[25%] h-1/2 space-y-10 lg:space-y-3">
          <div className="w-full flex justify-start space-x-3 items-center">
            <div className="w-10 h-10 rounded-full bg-[#F79633] cursor-pointer flex justify-center items-center">
              <AiOutlineMail />
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="font-rubik  text-sm text-white">Email</p>
              <a
                href="mailto:info@reeroute.in"
                className="font-rubik  text-sm text-white"
              >
                info@reeroute.in
              </a>
            </div>
          </div>
          <div className="w-full flex justify-start space-x-3 items-center">
            <div className="w-10 h-10 rounded-full bg-[#F79633] cursor-pointer flex justify-center items-center">
              <a href="tel: +91 7300042518" target="_blank">
                <IoCallOutline />
              </a>
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="font-rubik text-sm text-white">Call Us</p>
              <a
                href="tel:+91 7300042518"
                target="_blank"
                className="font-rubik text-sm text-white"
              >
                +91 7300042518
              </a>
            </div>
          </div>
          <div className="w-full flex justify-start space-x-3 items-start">
            <div className="w-10 h-10 rounded-full bg-[#F79633] cursor-pointer flex justify-center items-center px-3">
              <IoLocationOutline />
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="font-rubik text-sm text-white">Address</p>
              <p className="font-rubik text-sm text-white w-[70%]">
                G-17, Ashirwad Complex, Transport Nagar, Jaipur - 302003
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex h-[10%] bg-[#2A4F6D] w-full  flex-col lg:flex-row space-y-3 lg:space-y-0 py-2 justify-center px-12 items-center">
        <p className="text-white font-rubik text-base font-normal text-center">
          Copyright © ReeRoute
        </p>
      </div>
    </>
  );
};

export default Footer;
