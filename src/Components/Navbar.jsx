import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const shipperPage = useRef();
  const truckerPage = useRef();
  const aboutUs = useRef();
  const howItWorks = useRef();
  const contactUs = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const handleClick = () => {
    // setAllLinksToInactive();
    window.scroll(0, 0);
    setNavbar(false);
  };

  const handleHowItWorkClick = () => {
    setNavbar(false);
    setTimeout(() => {
      const howItWorksSection = document.getElementById("how-it-works");
      if (howItWorksSection) {
        howItWorksSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const location = useLocation();

  return (
    <nav
      className={`transition-all drop-shadow-xl w-full ${
        navbar ? "bg-black" : "bg-transparent "
      } absolute z-10`}
    >
      <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block lg:pl-[4.5rem] lg:pr-[4.5rem]">
            <NavLink to="/" onClick={handleClick}>
              <img src="/Assets/logo.png" className="h-14" />
            </NavLink>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex lg:pr-[4.5rem] md:space-x-20 md:space-y-0 ">
              <li onClick={() => shipperPage.current.click()}>
                <NavLink
                  to="/"
                  onClick={handleClick}
                  ref={shipperPage}
                  className={`${
                    location.pathname == "/"
                      ? `border-b-4 
                          border-white
                         rounded`
                      : ``
                  } text-white hover:border-white hover:border-b-4 pb-1  hover:rounded font-semibold font-rubik text-base`}
                >
                  Shipper
                </NavLink>
              </li>
              <li onClick={() => truckerPage.current.click()}>
                <Link
                  to="/trucker"
                  onClick={handleClick}
                  ref={truckerPage}
                  className={`${
                    location.pathname == "/trucker"
                      ? `border-b-4 border-white rounded`
                      : `text-white`
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-rubik text-base`}
                >
                  Trucker
                </Link>
              </li>
              <li onClick={() => aboutUs.current.click()}>
                <Link
                  to="/aboutUs"
                  onClick={handleClick}
                  ref={aboutUs}
                  className={`${
                    location.pathname == "/aboutUs"
                      ? `border-b-4 border-white rounded`
                      : `text-white`
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-rubik text-base`}
                >
                  About Us
                </Link>
              </li>
              <li onClick={() => howItWorks.current.click()}>
                <Link
                  to="/"
                  ref={howItWorks}
                  className={`${
                    location.pathname == "/how-it-works"
                      ? `border-b-4 border-white rounded`
                      : `text-white`
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-rubik text-base`}
                  onClick={handleHowItWorkClick}
                >
                  How It Works?
                </Link>
              </li>
              <li onClick={() => contactUs.current.click()}>
                <NavLink
                  to="/contactUs"
                  ref={contactUs}
                  onClick={handleClick}
                  className={`${
                    location.pathname == "/contactUs"
                      ? `border-b-4 border-white rounded`
                      : `text-white`
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-rubik text-base`}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
