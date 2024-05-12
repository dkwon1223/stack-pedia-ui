import React from "react";
import PropTypes from 'prop-types';

const Button = ({ label, iconUrl, disabled=false }) => {
  return (
    <button 
    className={`flex justify-center h-12 items-center gap-2 px-7 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red`}
    disabled={disabled}
    >
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

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired
}
