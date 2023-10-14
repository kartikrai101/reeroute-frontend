import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const reviewShippers = [
  {
    name: "Sumit",
    company: "Zast Logisolutions (On Move)",
    feedback: "I can't express how much ReeRoute has simplified my truck booking process. As a transporter, I often struggled to find reliable truck owners for my clients. But ReeRoute's platform has solved that problem for me. Now, I can easily browse and book trucks with confidence, ensuring smooth and timely deliveries. Highly recommended!",
    image: "/Assets/sumit-circular.png",
  },
  {
    name: "Manoj Sharma",
    company: "Eastern Western Roadway",
    feedback: "ReeRoute mere transportation business ke liye ek game-changer raha hai. Platform mujhe ek vishal network of truck owners se jodta hai, jisse mujhe mere anukool trucks khojna asaan ho jata hai. Saral booking prakriya aur vishwasniya seva ne mere operations ko kafi sudhar diya hai.",
    image: "/Assets/manoj-circular.png",
  },
  {
    name: "Aindi Jaiswal",
    company: "BR Logistics",
    feedback:
      "ReeRoute ne mere truck owners se judne aur apne transportation business ko sambhalne ka tareeka badal diya hai. Platform mujhe ek saral interface pradaan karta hai, jisse mai apne anukool trucks ko asani se khoj, tulna aur book kar sakta hoon. Vishwasniye aur transparent seva ne meri productivity aur grahak santushti ko badha diya hai. ReeRoute har transporter ke liye ek zaruri upkaran hai.",
    image: "/Assets/aindi-shiper.png",
  },
];

const reviewTruckers = [
  {
    name: "Jaswant Singh",
    company: "",
    feedback:
      "ReeRoute makes my life easy with on-time payments. I am very much satisfied after attaching my truck and also encouraged two friends of mine to partner with ReeRoute ",
    image: "/Assets/jaswant-trucker.png",
  },
  {
    name: "Sohan Lal",
    company: "",
    feedback:
      "When compared to the open market, I get better prices which in turn means more profits. My truck utilization and payment cycle is much better with ReeRoute.",
    image: "/Assets/sohan-trucker.png",
  },
  {
    name: "Mohd. Taufiq",
    company: "",
    feedback:
      "I had to run behind brokers for payments. But after joining with ReeRoute all the payments are done on-time and I am tension free.",
    image: "/Assets/taufiq-trucker.png",
  },
];

const reviews = [
  {
    name: "Varun Trivedi",
    company: "Fuel Company",
    feedback:
      "ReeRoute frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    image: "/Assets/User.png",
  },
  {
    name: "Vijay Nagar",
    company: "Restoration Company",
    feedback:
      "ReeRoute's framework fosters collaborative thinking, empowering diversity and driving disruptive innovation. They go beyond logistics, delivering a robust value proposition. Their commitment to positive change sets them apart. Highly recommended!",
    image: "/Assets/user-2.png",
  },
];

const UserReviewSections = ({ isTrucker }) => {
  const [activeCardSet, setActiveCardSet] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    const length = reviewShippers.length;
    setActiveCardSet((idx) => (idx + 1) % length);
  };

  const handlePrev = () => {
    const length = reviewShippers.length;
    setActiveCardSet((idx) => (idx - 1 + length) % length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#F4F4F4] lg:bg-white w-full flex justify-start lg:justify-center">
      <div className="flex flex-col i justify-center py-8 px-3 lg:px-16 space-y-5 w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-rubik font-semibold text-[24px] lg:text-5xl text-[#2A4F6D]">
            {`What Our ${isTrucker ? "Truckers" : "Shippers"} Say`}
          </h3>
          {/* <div className="ring items-center space-x-3 hidden lg:flex">
            <div onClick={handlePrev} className="w-10 h-10 rounded-full bg-[#f89b5c] flex justify-center items-center cursor-pointer">
              <AiOutlineArrowLeft
                className="text-[#2A4F6D]"
              />
            </div>
            <div onClick={handleNext} className="w-10 h-10 rounded-full bg-[#2A4F6D] flex justify-center items-center cursor-pointer">
              <AiOutlineArrowRight
                className="text-white"
              />
            </div>
          </div> */}
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[100%] flex items-center justify-center">
            <div className="w-full h-full lg:min-h-[450px] lg:w-1/2 bg-[#F4F4F4] flex flex-col px-1 lg:px-4  justify-center space-y-5">
              <div className="flex flex-col lg:flex-row items-start justify-center space-y-3 lg:space-y-0 lg:justify-between lg:items-center">
                <div className="flex w-[85%] lg:w-auto justify-start lg:justify-start items-center space-x-2">
                  {isTrucker ? (
                    <img src={reviewTruckers[activeIndex].image} />
                  ) : (
                    <img src={reviewShippers[activeIndex].image} />
                  )}
                  <div className="flex flex-col">
                    <p className="text-[#091242] font-rubik font-medium text-xl">
                      {isTrucker
                        ? reviewTruckers[activeIndex].name
                        : reviewShippers[activeIndex].name}
                    </p>
                    <p className="text-[#091242] font-rubik text-base">
                      {isTrucker
                        ? reviewTruckers[activeIndex].company
                        : reviewShippers[activeIndex].company}
                    </p>
                    <div >
                      <img className="w-[8rem]" src="/Assets/Star.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:h-[15rem]">
                <p className="italic font-rubik text-lg text-[#666C89]">
                  {isTrucker
                    ? reviewTruckers[activeIndex].feedback
                    : reviewShippers[activeIndex].feedback}
                </p>
              </div>
            </div>

            <div className="w-full lg:h-full lg:w-1/2 lg:min-h-[450px] bg-[#2A4F6D] hidden lg:flex flex-col px-4 py-12 justify-center space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {isTrucker ? (
                    <img
                      src={
                        reviewTruckers[
                          (activeIndex + 1) % reviewTruckers.length
                        ].image
                      }
                    />
                  ) : (
                    <img
                      src={
                        reviewShippers[
                          (activeIndex + 1) % reviewShippers.length
                        ].image
                      }
                    />
                  )}
                  <div className="flex flex-col">
                    <p className="text-white font-rubik font-medium text-xl">
                      {isTrucker
                        ? reviewTruckers[
                            (activeIndex + 1) % reviewShippers.length
                          ].name
                        : reviewShippers[
                            (activeIndex + 1) % reviewShippers.length
                          ].name}
                    </p>
                    <p className="text-white font-rubik text-base">
                      {isTrucker
                        ? reviewTruckers[
                            (activeIndex + 1) % reviewTruckers.length
                          ].company
                        : reviewShippers[
                            (activeIndex + 1) % reviewShippers.length
                          ].company}
                    </p>
                    <div>
                      <img className="w-[8rem]" src="/Assets/Star.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:h-[15rem]">
                <p className="italic font-rubik text-base text-white">
                  {isTrucker
                    ? reviewTruckers[(activeCardSet + 1) % reviewTruckers.length]
                        .feedback
                    : reviewShippers[(activeCardSet + 1) % reviewShippers.length]
                        .feedback}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          { isTrucker ? reviewTruckers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 focus:outline-none focus:ring ${index === activeIndex ? 'bg-indigo-500' : 'bg-gray-300'}`}
                onClick={() => handleDotClick(index)}
              ></button>
            )) : reviewShippers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 focus:outline-none focus:ring ${index === activeIndex ? 'bg-indigo-500' : 'bg-gray-300'}`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))
          }
        </div>


        {/* <div className="flex justify-center lg:hidden items-center space-x-3 w-full">
          <div className="w-10 h-10 rounded-full bg-[#f89b5c] flex justify-center items-center cursor-pointer">
            <AiOutlineArrowLeft
              className="text-[#2A4F6D]"
              onClick={handlePrev}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#2A4F6D] flex justify-center items-center cursor-pointer">
            <AiOutlineArrowRight className="text-white" onClick={handleNext} />
          </div>
        </div> */}


      </div>
    </div>
  );
};

export default UserReviewSections;
