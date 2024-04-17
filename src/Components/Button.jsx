import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red mb-5">
      {label}
      <img
        src={iconUrl}
        alt="button icon"
        className="ml-2 rounded-full w-6 h-6"
      />
    </button>
  );
};

export default Button;
