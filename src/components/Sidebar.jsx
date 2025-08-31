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
    name: "Obstetric Twins/Triplet",
    href: "/scan/twinstriplet",
    icon: "👶",
    color: "from-pink-600 to-rose-900",
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

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(true);
      else setIsOpen(false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };

  const toggleCollapse = () => {
    if (!isMobile) setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* 🔥 Mobile Toggle */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 w-11 h-11 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition md:hidden"
          aria-label="Toggle Sidebar"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
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
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      )}

      {/* Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
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
              ? "w-20"
              : isMobile
              ? "w-72"
              : "w-72 xl:w-80"
          }
          bg-gradient-to-br from-white via-gray-50 to-gray-100 border-r border-gray-200 h-screen shadow-2xl
          transition-all duration-300 ease-in-out overflow-hidden
        `}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-200 bg-white/80 backdrop-blur-md flex justify-between items-center">
          <h2 className="font-extrabold text-lg text-gray-800 tracking-wide">
            {isCollapsed ? "SR" : "Scan Reports"}
          </h2>

          {!isMobile && (
            <button
              onClick={toggleCollapse}
              className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-sm"
            >
              <svg
                className={`w-4 h-4 text-gray-600 transition-transform ${
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
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-2 overflow-y-auto flex-1 custom-scrollbar">
          {scanLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`
                  group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r " +
                        link.color +
                        " text-white shadow-lg"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                <span
                  className={`
                    text-xl flex items-center justify-center w-9 h-9 rounded-lg
                    ${
                      isActive
                        ? "bg-white/20"
                        : "bg-gray-200 group-hover:bg-gray-300"
                    }
                  `}
                >
                  {link.icon}
                </span>
                {!isCollapsed && <span className="truncate">{link.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-white/80 text-sm text-gray-500">
          {!isCollapsed && <p>© 2025 CornerstoneScan</p>}
        </div>
      </aside>
    </>
  );
}
