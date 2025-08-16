"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const scanLinks = [
  {
    name: "Dashboard",
    href: "/",
    icon: "🏠",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Obstetric Ultrasound",
    href: "/scan/obstetric",
    icon: "👶",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Abdominal Scan",
    href: "/scan/abdominal",
    icon: "🫃",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Pelvic Scan",
    href: "/scan/pelvic",
    icon: "🔍",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Abdomino Pelvic",
    href: "/scan/abdomino-pelvic",
    icon: "📊",
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Scrotal Scan",
    href: "/scan/scrotal",
    icon: "🩺",
    color: "from-teal-500 to-cyan-600",
  },
  {
    name: "Breast Scan",
    href: "/scan/breast",
    icon: "🎯",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Trans Vaginal",
    href: "/scan/trans-vaginal",
    icon: "📋",
    color: "from-red-500 to-pink-600",
  },
  {
    name: "Neck Scan",
    href: "/scan/neck",
    icon: "🔬",
    color: "from-slate-500 to-gray-600",
  },
];

export default function Sidebar({ isOpen, onToggle }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(false); // Don't collapse on mobile, use overlay instead
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile && onToggle) {
      onToggle(); // Close mobile sidebar when link is clicked
    }
  };

  const toggleCollapse = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggle}
        ></div>
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          ${isMobile ? "fixed" : "sticky"} top-0 left-0 z-50
          ${
            isMobile
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
          ${
            !isMobile && isCollapsed
              ? "w-16 xl:w-20"
              : isMobile
              ? "w-80 sm:w-72"
              : "w-64 lg:w-72 xl:w-80"
          }
          bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200 h-screen shadow-lg
          transition-all duration-300 ease-in-out overflow-hidden
          ${!isMobile ? "relative" : ""}
        `}
      >
        {/* Header Section */}
        <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center space-x-2 sm:space-x-3 ${
                !isMobile && isCollapsed ? "justify-center" : ""
              }`}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white text-sm sm:text-base lg:text-lg font-bold">
                  📈
                </span>
              </div>

              {(!isCollapsed || isMobile) && (
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
                    Scan Reports
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    Medical Imaging
                  </p>
                </div>
              )}
            </div>

            {/* Collapse Toggle (Desktop Only) */}
            {!isMobile && (
              <button
                onClick={toggleCollapse}
                className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <svg
                  className={`w-3 h-3 lg:w-4 lg:h-4 text-gray-600 transition-transform duration-300 ${
                    isCollapsed ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Mobile Close Button */}
            {isMobile && onToggle && (
              <button
                onClick={onToggle}
                className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                aria-label="Close sidebar"
              >
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Section */}
        <nav
          className={`${
            !isMobile && isCollapsed ? "p-1 xl:p-2" : "p-2 sm:p-3 lg:p-4"
          } space-y-1 sm:space-y-2 overflow-y-auto flex-1`}
        >
          {scanLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`
                  group relative flex items-center rounded-xl
                  transition-all duration-300 ease-out
                  ${
                    !isMobile && isCollapsed
                      ? "justify-center p-2 xl:p-3"
                      : "space-x-2 sm:space-x-3 px-2 sm:px-3 lg:px-4 py-2 sm:py-3"
                  }
                  ${
                    isActive
                      ? "bg-white shadow-lg transform scale-105 border border-gray-200"
                      : "hover:bg-white/70 hover:shadow-md hover:transform hover:scale-102"
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Icon with gradient background */}
                <div
                  className={`
                    ${
                      !isMobile && isCollapsed
                        ? "w-6 h-6 xl:w-8 xl:h-8"
                        : "w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                    } 
                    rounded-lg flex items-center justify-center flex-shrink-0
                    bg-gradient-to-br ${link.color} shadow-sm
                    transition-all duration-300 group-hover:shadow-md group-hover:scale-110
                    ${isActive ? "shadow-lg scale-110" : ""}
                  `}
                >
                  <span
                    className={`text-white ${
                      !isMobile && isCollapsed
                        ? "text-xs xl:text-sm"
                        : "text-sm sm:text-base lg:text-lg"
                    }`}
                  >
                    {link.icon}
                  </span>
                </div>

                {/* Text Content */}
                {(!isCollapsed || isMobile) && (
                  <div className="flex-1 min-w-0">
                    <span
                      className={`
                        block font-medium transition-colors duration-200 truncate
                        ${
                          !isMobile && isCollapsed
                            ? "text-xs xl:text-sm"
                            : "text-xs sm:text-sm lg:text-base"
                        }
                        ${
                          isActive
                            ? "text-gray-900"
                            : "text-gray-700 group-hover:text-gray-900"
                        }
                      `}
                    >
                      {link.name}
                    </span>
                  </div>
                )}

                {/* Active Indicator */}
                {isActive && (
                  <div
                    className={`absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse ${
                      !isMobile && isCollapsed
                        ? "top-1 right-1"
                        : "right-2 sm:right-3"
                    }`}
                  ></div>
                )}

                {/* Hover Glow Effect */}
                <div
                  className={`
                    absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                    bg-gradient-to-r ${link.color} group-hover:opacity-5
                  `}
                ></div>

                {/* Tooltip for collapsed state */}
                {!isMobile && isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {link.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section - Only show when not collapsed */}
        {(!isCollapsed || isMobile) && (
          <div className="p-2 sm:p-3 lg:p-4 border-t border-gray-200 bg-white/30">
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                {scanLinks.length - 1} Scan Types Available
              </p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
