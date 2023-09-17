"use client"
import { useEffect, useState } from "react";
import {BiFoodMenu, BiGroup} from "react-icons/bi";
import { IoLocationOutline} from "react-icons/io5";
import Modal from "./modal";
import ReservationForm from "./reservation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100;
      const isDark = window.scrollY >= threshold;
      setScrolledDown(isDark);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`relative flex items-center justify-center p-12`}>
      <header
        className={`z-50 fixed px-6 py-8 w-full flex justify-between ${
          scrolledDown
            ? "text-blue-100 ease-in-out duration-500 shadow-xl bg-blue-950 bg-opacity-75 placeholder-gray-200"
            : "text-blue-100  bg-blue-950"
        }`}
      >
        <button
          className="p-2 mt-2 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8 stroke-blue-100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex items-center gap-12">
        <a href="/menu"><h1 className="hidden text-4xl font-bold md:block text-blue-100 hover:text-blue-200">SAVORIQUE</h1></a>
  

        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-75"
            onClick={toggleMenu}
          ></div>
        )}
        <ul
          className={`fixed top-0 left-0 h-full w-64 overflow-y-auto transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:transform-none md:relative md:flex md:items-center md:space-x-4 pt-16 md:pt-0 uppercase font-bold bg-blue-950 z-50  md:bg-transparent md:w-auto`}
        >
          <li>
            <a
              href="/menu"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-blue-200 ${
                scrolledDown ? "text-blue-100" : ""
              }`}
              aria-labelledby="menu"
            >
             <BiFoodMenu className=" w-6 h-6 inline-flex m-auto"/> Menu
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-blue-200 ${
                scrolledDown ? "text-blue-100" : ""
              }`}
              aria-labelledby="about"
            >
             <BiGroup className=" w-6 h-6 inline-flex m-auto"/> About Us
            </a>
          </li>
          <li>
            <a
              href="/location"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-blue-200 ${
                scrolledDown ? "text-blue-100" : ""
              }`}
              aria-labelledby="visit"
            >
             <IoLocationOutline className=" w-6 h-6 inline-flex m-auto" /> Hours & Location
            </a>
          </li>
          <button  onClick={() => setModalOpen(true)}  className="uppercase border-2 border-blue-200 p-2 rounded-lg hover:border-blue-300 absolute bottom-0 right-0 m-4 md:static">Book a Reservation</button>
          <Modal 
       
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        title="Reserve at Savorique"
      >
        <ReservationForm />
      </Modal>
        </ul>
      </header>
    </nav>
  );
}
