import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className="bg-gradient-to-r from-sky-600 to-red-600 py-3 px-6 text-lg rounded-md w-48">
      {text}
    </button>
  );
};

export default CustomButton;
