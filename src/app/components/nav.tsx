"use client"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

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
            ? "text-gray-800 ease-in-out duration-500 shadow-xl bg-stone-400 bg-opacity-75 placeholder-gray-200"
            : "text-gray-800  bg-stone-300"
        }`}
      >
        <button
          className="p-2 mt-2 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8 stroke-gray-800"
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
        <a href="/menu"><h1 className="hidden text-4xl font-bold md:block">SAVORIQUE</h1></a>
  

        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-gray-900 bg-opacity-75"
            onClick={toggleMenu}
          ></div>
        )}
        <ul
          className={`fixed top-0 left-0 h-full w-64 overflow-y-auto transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:transform-none md:relative md:flex md:items-center md:space-x-4 pt-16 md:pt-0 uppercase font-bold bg-gray-200 z-50 bg-opacity-75 md:bg-transparent md:w-auto`}
        >
          <li>
            <a
              href="/menu"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-gray-600 ${
                scrolledDown ? "text-gray-800" : ""
              }`}
              aria-labelledby="menu"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-gray-600 ${
                scrolledDown ? "text-gray-800" : ""
              }`}
              aria-labelledby="about"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/location"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-gray-600 ${
                scrolledDown ? "text-gray-800" : ""
              }`}
              aria-labelledby="visit"
            >
              Hours & Location
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
}
