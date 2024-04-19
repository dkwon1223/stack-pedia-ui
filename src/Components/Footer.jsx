import React from "react";
import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import StackIcon from "../assets/icons/stack-icon.svg";

const Footer = () => {
  return (
    <footer className="max-container bg-black padding-x py-8">
      <div className="flex justify-center items-start lg:gap-20 flex-wrap max-lg:flex-col xsm:flex-row xsm:gap-4">
        <a href="/" className="flex items-center">
          <img src={StackIcon} alt="Logo" width={40} height={10} />
          <h1 className="ml-2 lg:text-2xl font-bold text-orange-500 xsm:text-lg">
            StackPedia
          </h1>
        </a>
        <div className="flex justify-center items-center lg:w-12 lg:h-12 xsm:w-4 xsm:h-4 bg-white rounded-full">
          <img
            src={InstagramIcon}
            alt="Instagram icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex justify-center items-center lg:w-12 lg:h-12 xsm:w-4 xsm:h-4 bg-white rounded-full">
          <img src={FacebookIcon} alt="Facebook icon" width={24} height={24} />
        </div>
        <div className="flex justify-center items-center lg:w-12 lg:h-12 xsm:w-4 xsm:h-4 bg-white rounded-full">
          <img src={TwitterIcon} alt="Twitter icon" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
