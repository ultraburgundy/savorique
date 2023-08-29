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
            ? "text-[#D3D57C] ease-in-out duration-500 shadow-xl bg-[#512A36] bg-opacity-75 placeholder-gray-200"
            : "text-[#D3D57C]  bg-[#5E313E]"
        }`}
      >
        <button
          className="p-2 mt-2 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8 stroke-[#D3D57C]"
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
        <a href="/menu"><h1 className="hidden text-4xl font-bold md:block text-[#D3D57C]">SAVORIQUE</h1></a>
  

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
          } md:transform-none md:relative md:flex md:items-center md:space-x-4 pt-16 md:pt-0 uppercase font-bold bg-[#5E313E] z-50  md:bg-transparent md:w-auto`}
        >
          <li>
            <a
              href="/menu"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-[#ACB63E] ${
                scrolledDown ? "text-[#D3D57C]" : ""
              }`}
              aria-labelledby="menu"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-[#ACB63E] ${
                scrolledDown ? "text-[#D3D57C]" : ""
              }`}
              aria-labelledby="about"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/location"
              className={`block px-2 py-1 rounded-md lg:text-xl hover:text-[#ACB63E] ${
                scrolledDown ? "text-[#D3D57C]" : ""
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
