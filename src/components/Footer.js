import React from "react";

const Footer = () => {
  return (
    <footer className="mt-80 text-center text-xs sm:mt-[26rem]">
      <p className="sm:text-white">
        Protected by reCAPTCHA and the Google
      </p>
      <p className="sm:text-white">
        <span className="text-blue-400 font-bold">Privacy Policy</span> &{" "}
        <span className="text-blue-400 font-bold">Terms of Service</span> apply.
      </p>
    </footer>
  );
};

export default Footer;
