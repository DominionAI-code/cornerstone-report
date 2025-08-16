"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50 backdrop-blur-sm border-b border-blue-100/50 shadow-lg shadow-blue-100/20">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 animate-pulse"></div>

      <div className="relative z-10 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Info with enhanced styling */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 group min-w-0 flex-1 lg:flex-none">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src="/cornerstone logo.png"
                alt="Cornerstone Hospital Logo"
                width={45}
                height={45}
                className="relative object-contain rounded-full shadow-md border-2 border-white/50 group-hover:scale-105 transition-transform duration-300 sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]"
              />
            </div>

            <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1 lg:flex-none">
              <h1 className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight truncate lg:whitespace-normal">
                Cornerstone Hospital
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-medium text-blue-800/90 hidden xs:block lg:block">
                Ultrasound Scans Report Automation
              </p>
              <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-slate-600">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="truncate">
                  No 23, Korede Qtrs, Kabba, Kogi State
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Link href="/about">
              <button className="group relative px-3 lg:px-6 py-2 lg:py-3 font-medium text-white transition-all duration-300 ease-out text-sm lg:text-base">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-lg group-hover:shadow-purple-500/25 group-hover:shadow-xl transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 to-purple-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center space-x-1 lg:space-x-2">
                  <svg
                    className="w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>About</span>
                </span>
              </button>
            </Link>

            <Link href="/">
              <button className="group relative px-3 lg:px-6 py-2 lg:py-3 font-medium text-white transition-all duration-300 ease-out text-sm lg:text-base">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg group-hover:shadow-blue-500/25 group-hover:shadow-xl transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center space-x-1 lg:space-x-2">
                  <svg
                    className="w-3 h-3 lg:w-4 lg:h-4 group-hover:-translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span>Dashboard</span>
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button - Visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="group relative p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0.5"
                      : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-0.5"
                      : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden mt-4 space-y-2 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 max-h-96 transform translate-y-0"
              : "opacity-0 max-h-0 transform -translate-y-2 overflow-hidden"
          }`}
        >
          {/* Mobile Address - Show only on mobile when menu is open */}
          <div className="sm:hidden flex items-center space-x-2 text-xs text-slate-600 px-3 py-2 bg-white/30 rounded-lg backdrop-blur-sm">
            <svg
              className="w-3 h-3 text-blue-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-xs">
              No 23, Korede Qtrs, Kabba, Kogi State
            </span>
          </div>

          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full group relative px-4 py-3 font-medium text-white transition-all duration-300 ease-out text-sm">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-lg group-hover:shadow-purple-500/25 group-hover:shadow-xl transition-all duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 to-purple-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span>About</span>
              </span>
            </button>
          </Link>

          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full group relative px-4 py-3 font-medium text-white transition-all duration-300 ease-out text-sm">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg group-hover:shadow-blue-500/25 group-hover:shadow-xl transition-all duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Dashboard</span>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom border glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </header>
  );
}