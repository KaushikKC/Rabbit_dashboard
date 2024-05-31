"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container h-[80px] mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          className="text-xl font-bold text-blue-600 flex items-center"
          href="/"
        >
          <Image
            className=" mt-[-5px] mr-3"
            width={120}
            height={120}
            src={logo}
            alt="Rabbit logo"
          />
          {/* Rabbit */}
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            className="text-gray-800 font-semibold hover:text-blue-600"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="text-gray-800 font-semibold hover:text-blue-600"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-gray-800 font-semibold hover:text-blue-600"
            href="#contact"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-gray-800 font-semibold block px-3 py-2 rounded-md hover:bg-gray-200"
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-gray-800 font-semibold block px-3 py-2 rounded-md hover:bg-gray-200"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              className="text-gray-800 font-semibold block px-3 py-2 rounded-md hover:bg-gray-200"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
