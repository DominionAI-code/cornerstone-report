"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50 backdrop-blur-sm border-b border-blue-100/50 shadow-lg shadow-blue-100/20">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 animate-pulse"></div>

      <div className="relative z-10 p-6 flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo + Info with enhanced styling */}
        <div className="flex items-center space-x-6 group">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
            <Image
              src="/cornerstone logo.png"
              alt="Cornerstone Hospital Logo"
              width={65}
              height={65}
              className="relative object-contain rounded-full shadow-md border-2 border-white/50 group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight">
              Cornerstone Hospital
            </h1>
            <p className="text-base font-medium text-blue-800/90">
              Ultrasound Scans Report Automation
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <svg
                className="w-4 h-4 text-blue-500"
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
              <span>No 23, Korede Qtrs, Kabba, Kogi State</span>
            </div>
          </div>
        </div>

        {/* Right: Enhanced buttons */}
        <div className="flex items-center space-x-3">
          <Link href="/about">
            <button className="group relative px-6 py-3 font-medium text-white transition-all duration-300 ease-out">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-lg group-hover:shadow-purple-500/25 group-hover:shadow-xl transition-all duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 to-purple-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-2">
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

          <Link href="/">
            <button className="group relative px-6 py-3 font-medium text-white transition-all duration-300 ease-out">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg group-hover:shadow-blue-500/25 group-hover:shadow-xl transition-all duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-2">
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