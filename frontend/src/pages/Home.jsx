import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Modal from "../components/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Stats from "../components/Stats";
import Feature from "../components/Feature";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    document.body.style.overflow = "hidden";

    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";

    setModalOpen(false);
  };

  const carouselImages = [
    "https://i0.wp.com/give.do/blog/wp-content/uploads/2021/11/Education-top-10-blog-banner.jpg?fit=1200%2C675&ssl=1",
    "https://blfindia.org/assets/images/all/aboutus.jpg",
    "https://media.gettyimages.com/id/613253596/photo/group-of-happy-gypsy-indian-children-desert-village-india.jpg?s=612x612&w=gi&k=20&c=xcHn3bTaaHWHjfJPVrqwz3Asq3SIyhQD6wFrJCK22zg=",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-white">
      <Navbar/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-40">
          <div className="text-center">
            <div style={{ borderRadius: "20px", marginBottom: "3rem" }}>
              <Carousel
                responsive={responsive}
                showDots={true}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
              >
                {carouselImages.map((imgSrc, index) => (
                  <div key={index}>
                    <img
                      src={imgSrc}
                      alt="carousel item"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "20px ",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Create a ripple of change
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl py-5">
              with{" "}
              <span
                onClick={openModal}
                className="cursor-pointer bg-gradient-to-r from-teal-400 to-purple-600 text-white py-1 px-2 rounded-lg"
              >
                Volunteering
              </span>
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              At Bhumi, we strive for meaningful change. Through volunteering,
              we aim to build a society that empowers every individual to
              reshape the conversation with their voices and stories. Among
              grassroots NGOs in India, Bhumi has a strong reputation for
              success. We are a leading NGO in India focusing on two areas:
              Education & Volunteer.
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              
              <a href="/donate">
                <div 
              
                // onClick={openModal}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Donate
              </div>
              </a>
              <Modal isOpen={modalOpen} onClose={closeModal} />

              <a
                
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <Stats />
      <Feature />
      <Footer/>
    </div>
  );
}
