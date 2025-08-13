// Sidebar.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200 h-full shadow-lg">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-lg font-bold">📈</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Scan Reports</h2>
            <p className="text-sm text-gray-500">Medical Imaging</p>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="p-4 space-y-2">
        {scanLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                group relative flex items-center space-x-3 px-4 py-3 rounded-xl
                transition-all duration-300 ease-out
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
                w-10 h-10 rounded-lg flex items-center justify-center
                bg-gradient-to-br ${link.color} shadow-sm
                transition-all duration-300 group-hover:shadow-md group-hover:scale-110
                ${isActive ? "shadow-lg scale-110" : ""}
              `}
              >
                <span className="text-white text-lg">{link.icon}</span>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <span
                  className={`
                  block text-sm font-medium transition-colors duration-200
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

              {/* Active Indicator */}
              {isActive && (
                <div className="absolute right-3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}

              {/* Hover Glow Effect */}
              <div
                className={`
                absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                bg-gradient-to-r ${link.color} group-hover:opacity-5
              `}
              ></div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
