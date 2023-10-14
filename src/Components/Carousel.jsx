import React, { useState } from 'react';
import {BsLinkedin} from 'react-icons/bs';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(images[0].index);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-all duration-500 ease-in-out" >


        <div className="flex flex-col w-full lg:h-[70%] lg:w-[30%]">
            <div className="w-full relative">
                <img src={images[activeIndex].src} alt={`image-${activeIndex}`} className="w-full h-auto" />
                <div className="absolute top-[90%] right-[0%] py-4 flex items-center justify-around px-4 bg-[#fb9f60] space-x-5">
                <a href={images[activeIndex].linkedIn} target="_blank"><BsLinkedin className="text-[#1C1F35] text-2xl" /></a>
                </div>
            </div>
            <div className="flex flex-col py-10 px-7 bg-[#2A4F6D]">
                <p className="font-rubik font-medium text-xl text-white">{images[activeIndex].name}</p>
                <p className="font-rubik font-medium text-base text-white">{images[activeIndex].role}</p>
            </div>
        </div>


        </div>
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none focus:ring ${index === activeIndex ? 'bg-indigo-500' : 'bg-gray-300'}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
