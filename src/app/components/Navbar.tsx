"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-mode shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600 dark:text-white transition duration-300 hover:text-blue-400">
          Portfolio
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 dark:text-white hover:text-blue-400 transition duration-300"
        >
          <span className={`icon ${isOpen ? "rotate-90" : ""}`}>☰</span>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-8 items-center`}>
          <Link href="/" className="text-gray-300 dark:text-white hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 dark:text-white hover:text-blue-600 transition duration-300">
            About
          </Link>
          <Link href="/projects" className="text-gray-300 dark:text-white hover:text-blue-600 transition duration-300">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 dark:text-white hover:text-blue-600 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
