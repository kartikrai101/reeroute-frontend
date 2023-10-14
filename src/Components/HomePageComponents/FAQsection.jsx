import React, { useState, useEffect, useRef } from "react";
import { IoCallOutline } from "react-icons/io5";
import FAQitem from "../FAQitem";
import {Link} from 'react-router-dom';

const FAQs = [
  {
    question: "How can I make an online truck booking?",
    answer:
      "Booking your truck with ReeRoute is very simple. Just add pickup and destination location. Then, select the weight of goods, type, and size of the truck. Our network of truckers will provide you the best prices with highest reliability.",
  },
  {
    question: "Can I place a booking with multi-point pick up and drop?",
    answer:
      "Yes, you can request at the time of booking and add multiple points in your trip.",
  },
  {
    question: "Can I cancel my booking? Is there any cancellation fee?",
    answer:
      "Yes, you can cancel your booking before you have received vehicle details.",
  },
  {
    question: "How truck rates are determined?",
    answer:
      "With ReeRoute, truck booking is instant. Our advanced matching algorithm swiftly pairs your load with the nearest available truck, initiating competitive bidding. We ensure that the best truck with the most favorable bid is promptly assigned for your shipment. Our spot market-based pricing takes into account the source-to-destination distance as well as the real-time availability of trucks, allowing for fair and transparent charges.",
  },
  {
    question: "Does ReeRoute provide 24/7 support?",
    answer:
      "ReeRoute is pleased to provide round-the-clock account support, catering to the needs of both shippers and truck owners. Whether you have inquiries or concerns, our dedicated team is available 24/7 to assist you. Please feel free to reach out to us at +91 7300042509 or +91 7300042518 for prompt assistance.",
  },
  {
    question: "How does ReeRoute ensure the safe delivery of goods?",
    answer:
      "ReeRoute employs proficient truck owners to guarantee the secure and punctual transportation of goods. With our commitment to excellence, we offer you enhanced peace of mind throughout the process.",
  },
  {
    question:
      "What is the process to track the status of my truck during transit?",
    answer:
      "Communicate with the designated ReeRoute employee responsible for the delivery. Obtain the Loading memo and Lorry Receipt copies. Receive a digital copy of the proof of delivery. ",
  },
  {
    question: "What are the payment terms for ReeRoute?",
    answer:
      "For ReeRoute truck booking, the payment terms are as follows: 90% payment is required in advance when the truck is loaded, and the remaining 10% balance is settled upon the submission of proof of delivery (POD).",
  },
];

const TruckerFAQs = [
  {
    question: "How do I register my truck on ReeRoute?",
    answer:
      "Just fill the onboarding form for truckers and we’ll reach you out to onboard all your trucks with instant KYC process.",
  },
  {
    question: "How can I find available loads on ReeRoute?",
    answer:
      "On the ReeRoute app, you will have access to all the available loads that match your truck details and preferred routes. The platform allows you to conveniently filter the loads based on real-time availability of your trucks.",
  },
  {
    question: "How will payments happen on ReeRoute?",
    answer:
      "For ReeRoute truck booking, the payment terms are as follows: 90% payment is given in advance when the truck is loaded, and the remaining 10% balance is settled upon the submission of proof of delivery (POD).",
  },
  {
    question: "How to submit POD?",
    answer:
      "Once the vehicle is unloaded, kindly upload the digital copy of the proof of delivery (POD) promptly using the ReeRoute app. Subsequently, please send the original POD via courier to the following address: G-17, Ashirwad Complex, Transport Nagar, Jaipur - 302003.",
  },
];

const FAQsection = ({ isTrucker }) => {
  const divRef = useRef(null);
  const handleClick = () => {
    // setAllLinksToInactive();
    window.scroll(0, 0);
  };

  return (
    <div className="flex flex-col justify-center py-5 lg:py-20 lg:px-16 space-y-5 h-auto ">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between">
        <div className="w-[90%] lg:w-2/5 flex flex-col items-start space-y-4 mt-[15rem] sm:mt-32 lg:mt-0">
          <h3 className="font-rubik font-semibold text-2xl lg:text-5xl text-[#2A4F6D]">
            Frequently Asked Questions
          </h3>
          {isTrucker
            ? TruckerFAQs.map((faq) => (
                <FAQitem question={faq.question} answer={faq.answer} />
              ))
            : FAQs.map((faq) => (
                <FAQitem question={faq.question} answer={faq.answer} />
              ))}
        </div>
        <div className="lg:h-auto w-full lg:w-1/2">
          <div className="relative w-full flex items-start">
            {/* <img
              src={`/Assets/faq-${isTrucker ? "trucker" : "shipper"}.png`}
              className="w-full relative"
            /> */}
             <img
              src={`/Assets/faq-${isTrucker ? "trucker1" : "shipper1"}.jpg`}
              className="w-full relative"
            />
            {/* <img
              src={`/Assets/GroupTrucker.jpg`}
              className="w-full relative"
            /> */}
            
            <div
              ref={divRef}
              className="absolute top-[50%] left-[10%] lg:top-[20%] lg:left-[-10%] w-4/5 lg:w-1/2 bg-[#2A4F6D] p-10 flex flex-col items-start space-y-6"
            >
              <p className="font-rubik text-xl text-white">
                Need any help? Get free consultation...
              </p>
              <div className="w-full flex justify-start space-x-3 items-center">
                <a href="tel: +91 7300042518" target="_blank">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#F79633] cursor-pointer flex justify-center items-center">
                    <IoCallOutline className="text-xl" />
                  </div>
                </a>
                <div className="flex flex-col items-start justify-between">
                  <a href="tel: +91 7300042518" target="_blank">
                    <p className="font-krub font-medium text-base text-white">
                      +91 7300042518
                    </p>
                  </a>
                </div>
              </div>
              <div className="py-3 px-4 bg-[#F79633] font-krub font-semibold text-base text-[#23212A]">
                <Link 
                  to="/contactUs"
                  className="py-3 px-4 bg-[#F79633] font-rubik font-semibold text-base text-[#23212A]"
                  onClick={handleClick}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsection;
