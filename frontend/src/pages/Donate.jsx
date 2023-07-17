import React from "react";
import upiqr from "../assets/upiqr.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Donate = () => {
  return (
    <div className=" text-center p-8 rounded border border-gray-200 shadow-lg max-w-md mx-auto bg-gradient-to-r from-purple-200 to-pink-100 mt-[6rem]">
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-25 rounded-full w-16 h-16 -mt-8 -ml-8" />
        <h1 className="font-medium text-3xl">Donate for a cause</h1>
      </div>
      <p className="text-gray-600 mt-6 mb-6">
        Empowering minds, transforming lives. Join us in unlocking a brighter
        future for every child through the power of education.
      </p>
      <h1 className="text-3xl mb-4">UPI QR code</h1>
      <img src={upiqr} className="m-auto" alt="UPI QR code" />
      <h1 className="text-3xl mb-4 mt-4">Account Details</h1>
      <p>
        Account Number: <b>1488010100000887</b>
      </p>
      <p>
        IFSC Code: <b> PUNB0606000</b>
      </p>
      <Footer />
    </div>
  );
};

export default Donate;
