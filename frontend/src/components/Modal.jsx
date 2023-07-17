import React from "react";
import Volunteering from "../pages/Volunteering";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      <div className="bg-white p-4 rounded-md shadow-md relative z-50">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="h-5 w-5 z-40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.414 10l3.293-3.293a1 1 0 0 0-1.414-1.414L12 8.586 8.707 5.293a1 1 0 0 0-1.414 1.414L10.586 10l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 10z"
              />
            </svg>
          </button>
        </div>
        <div className="p-2 max-h-128  overflow-y-auto">
          {/* Scrollable content */}
          <Volunteering close={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
