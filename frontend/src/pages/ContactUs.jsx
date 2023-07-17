import React from "react";
import background from "../assets/contactus.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          marginBottom: "-10px",
          marginTop: "6%",
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font text-white"
              style={{ fontSize: "280%" }} // Increase font size by 30%
            >
              Do you want to join the team, volunteer with us or just say hi?
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4z"></path>
                    <path d="M22 4l-10 7L2 4"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Email
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  <a
                    href="mailto:contact@bhumi.ngo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed text-base"
                  >
                    contact@bhumi.ngo
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 2v4m4 0v4M3.6 7.6c.8-1 1.9-1.6 3-2M12 2v6m6 16a16 16 0 01-12 0m12 0v6m-6 0v-6m6 0H6" />
                    <path d="M12 2v6m-2-6h4v2h-4zM4 8h16v12H4zm4 0v12m8-12v12" />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Call
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">+91 8754413255</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 2l-10 7-10-7"></path>
                    <path d="M2 22l10-7l10 7"></path>
                    <path d="M2 14l10-7l10 7"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Visit
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  <a
                    href="https://goo.gl/maps/Gdba2iGjEg9MpZyc6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed text-base"
                  >
                    3/2, Karpaga Vinayagar Koil Street, Alandur, Chennai-600016,
                    India
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
