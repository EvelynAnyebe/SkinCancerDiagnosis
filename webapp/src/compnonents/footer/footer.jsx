import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-sky-600 p-5 text-white font-bold text-sm">
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
