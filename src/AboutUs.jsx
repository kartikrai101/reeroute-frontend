import React, { useState } from "react";
import Footer from "./Components/Footer";
import BottomBannerSection from "./Components/HomePageComponents/BottomBannerSection";
import { AiOutlineArrowLeft, AiOutlineArrowRight, BsCircle, BsCircleFill } from "react-icons/ai";
import ExpertProfile from "./Components/ExpertProfile";
import Carousel from './Components/Carousel';

const expert = [
  {
    imageName: "expert-ashish",
    name: `Ashish Dhamija`,
    role: `Founder`,
    isTwitter: false,
    isFacebook: false,
    isInstagram: false,
    isLinkedin: true,
    linkedinURL: "https://www.linkedin.com/in/ashish-dhamija-69957b40/",
  },
  {
    imageName: "expert-sahil",
    name: `Sahil Gulati`,
    role: `Founder`,
    isLinkedin: true,
    isTwitter: false,
    isFacebook: false,
    isInstagram: false,
    linkedinURL: "https://www.linkedin.com/in/sahil-gulati-853ab682/",
  },
  // {
  //   imageName: "expert-siddharth",
  //   name: `Siddharth Nahar`,
  //   role: `Product Manager`,
  //   isLinkedin: true,
  //   isTwitter: false,
  //   isFacebook: false,
  //   isInstagram: false,
  //   linkedinURL: "https://www.linkedin.com/in/siddharthnahar9/",
  // },
];

const images = [
  {
    src: "./Assets/expert-ashish.png",
    index: 0,
    name: "Ashish Dhamija",
    role: "Founder",
    linkedIn: "https://www.linkedin.com/in/ashish-dhamija-69957b40/",
  },
  {
    src: "./Assets/expert-sahil.png",
    index: 1,
    name: "Sahil Gulati",
    role: "Founder",
    linkedIn: "https://www.linkedin.com/in/sahil-gulati-853ab682/",
  },
  // {
  //   src: "./Assets/expert-siddharth.png",
  //   index: 2,
  //   name: "Siddharth Nahar",
  //   role: "Product Manager",
  //   linkedIn: "https://www.linkedin.com/in/siddharthnahar9/",
  // },
];

const AboutUs = () => {
  const [isOurMissionActive, setIsOurMissionActive] = useState(true);
  const [activeExpertProfile, setActiveExpertProfile] = useState(0);

  const handleNext = () => {
    setActiveExpertProfile((prevCount) => (prevCount + 1) % 3);
  };

  const handlePrevious = () => {
    setActiveExpertProfile((prevCount) => (prevCount + 2) % 3);
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="relative h-1/2vh">
          <img
            src={`/Assets/AboutBackground.png`}
            className="w-full h-full object-cover inset-0 hidden lg:block"
          />
          <img
            src={`/Assets/AboutBackgroundMobile.png`}
            className="w-full h-full object-cover inset-0 lg:hidden"
          />
          <div
            className={`absolute inset-0 bg-black opacity-60 lg:opacity-70 `}
          ></div>
          <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
            <div className="flex flex-col w-full px-4 lg:px-0 lg:w-[85%] space-y-3">
              <p className="font-rubik font-bold w-1/2 lg:w-auto text-3xl sm:text-4xl md:text-6xl text-white">
                About ReeRoute
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full bg-[#F4F4F4] py-16 px-3 lg:px-10 items-center space-y-20">
          <div className="w-full flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0">
            <div className="flex flex-col items-start w-full lg:hidden space-y-6 px-5">
              <h3 className="font-rubik font-bold text-4xl text-[#2A4F6D]">
                About ReeRoute
              </h3>
              <p className="font-rubik text-lg text-[#666C89]">
                Welcome to ReeRoute! We specialize in providing reliable and
                trustworthy services for full truck loads. Our primary focus is
                on ensuring transparency in every aspect of our business
                operations. With us, you can book trucks with confidence,
                knowing that your cargo will be handled with utmost care and
                delivered on time.{" "}
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row  items-center justify-center relative">
              <img
                src="/Assets/aboutnew.jpg"
                className="w-[90%] lg:w-[80%]"
              />
            </div>
            <div className="flex flex-col items-start w-full lg:w-1/2 space-y-6 px-5  lg:px-12">
              <h3 className="font-rubik font-bold text-2xl lg:text-5xl text-[#2A4F6D] hidden lg:block">
                About ReeRoute
              </h3>
              <p className="font-rubik text-lg text-[#666C89] hidden lg:block">
                Welcome to ReeRoute! We specialize in providing reliable and
                trustworthy services for full truck loads. Our primary focus is
                on ensuring transparency in every aspect of our business
                operations. With us, you can book trucks with confidence,
                knowing that your cargo will be handled with utmost care and
                delivered on time.{" "}
              </p>
              <div className="flex items-center space-x-5">
                <button
                  className={`py-3 px-5 font-rubik text-lg ${
                    isOurMissionActive
                      ? "bg-[#F79633] text-white"
                      : "bg-[#F4F4F4]"
                  } `}
                  onClick={() => setIsOurMissionActive(true)}
                >
                  Our Mission
                </button>
                <button
                  className={`py-3 px-5 font-rubik text-lg ${
                    !isOurMissionActive
                      ? "bg-[#F79633] text-white"
                      : "bg-[#F4F4F4]"
                  } `}
                  onClick={() => setIsOurMissionActive(false)}
                >
                  Our Vision
                </button>
              </div>
              {isOurMissionActive ? (
                <p className="font-rubik text-lg text-[#666C89]">
                  To provide end-to-end logistics solutions that empower
                  businesses to thrive in today's marketplace. We deliver
                  tailored, reliable, and cost-effective services. We optimize
                  supply chains and foster long-term relationships. Through
                  innovation, expertise, and strategic partnerships, we aim to
                  be the preferred logistics partner driving growth and success
                  for businesses in India.
                </p>
              ) : (
                <p className="font-rubik text-lg text-[#666C89]">
                  To revolutionize India's logistics industry by setting new standards of efficiency, reliability, and customer-centricity, leveraging advanced technologies and sustainable practices, and becoming the leading provider of innovative logistics solutions that empower businesses and contribute to the nation's economic development.
                </p>
              )}
            </div>
          </div>

          <div className="w-[90%] lg:w-5/5 flex flex-col items-start space-y-7">
            <h3 className=" font-rubik text-4xl lg:text-5xl font-semibold text-[#2A4F6D]">
              What We Do?
            </h3>
            <div className="flex flex-col lg:flex-row flex-wrap pt-5 justify-between">
              <div className="flex flex-col w-full lg:w-[27%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/transportation-services.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#2A4F6D]">
                  Transportation Services
                </h4>
                <p className="font-rubik text-lg text-[#666C89]">
                  We provide reliable transportation services, safe and
                  timely movement of goods through full truck loads.
                </p>
              </div>
              <div className=" flex flex-col w-full lg:w-[27%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/supply-chain.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#2A4F6D]">
                  Supply Chain Management
                </h4>
                <p className="font-rubik text-lg text-[#666C89]">
                  Our end-to-end supply chain management solutions reduce lead
                  times, and enhance overall operational efficiency.
                </p>
              </div>
              <div className=" flex flex-col w-full lg:w-[27%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/value-added-services.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#2A4F6D]">
                  Value-Added Services
                </h4>
                <p className="font-rubik text-lg text-[#666C89]">
                  From packaging and labeling to quality control and reverse
                  logistics, we provide a range of value-added services to meet
                  your specific requirements.
                </p>
              </div>
              <div className=" flex flex-col w-full lg:w-[27%] space-y-3 items-start my-9 lg:ml-9">
                <img src="/Assets/timely-delivery.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#2A4F6D]">
                  Timely Delivery
                </h4>
                <p className="font-rubik text-lg text-[#666C89]">
                  We excel in timely delivery, ensuring your goods reach their
                  destination on schedule.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col w-full bg-white pt-16 pb-24 px-2 lg:px-10 items-center space-y-20">
          <div className="w-[90%] flex flex-col items-start space-y-7 ">
            <h3 className="font-rubik text-4xl lg:text-5xl font-semibold text-[#2A4F6D]">
              Meet Expert Team
            </h3>

            <div className="lg:flex flex-row items-center justify-around space-x-8 w-full hidden ">
              {expert.map((person, i) => (
                <ExpertProfile
                  key={i}
                  imageName={person.imageName}
                  name={person.name}
                  role={person.role}
                  isTwitter={person.isTwitter}
                  isFacebook={person.isFacebook}
                  isInstagram={person.isInstagram}
                  isLinkedin={person.isLinkedin}
                  linkedinURL={person.linkedinURL}
                />
              ))}
            </div>
            <div className=" flex flex-col w-full lg:hidden space-y-8 items-center">
              {/* <ExpertProfile
                imageName={expert[activeExpertProfile].imageName}
                name={expert[activeExpertProfile].name}
                role={expert[activeExpertProfile].role}
                isTwitter={expert[activeExpertProfile].isTwitter}
                isFacebook={expert[activeExpertProfile].isFacebook}
                isInstagram={expert[activeExpertProfile].isInstagram}
                isLinkedin={expert[activeExpertProfile].isLinkedin}
              /> */}
              {/* <div className=" items-center space-x-3 flex lg:hidden">
                <div className="w-10 h-10 rounded-full bg-[#f89b5c] flex justify-center items-center cursor-pointer">
                  <AiOutlineArrowLeft
                    className="text-[#2A4F6D]"
                    onClick={handleNext}
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2A4F6D] flex justify-center items-center cursor-pointer">
                  <AiOutlineArrowRight
                    className="text-white"
                    onClick={handlePrevious}
                  />
                </div>
              </div> */}
              <Carousel images={images} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
