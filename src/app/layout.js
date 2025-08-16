// layout.js (App Shell with Sidebar & Navbar)
"use client";
import { useState } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        {/* Responsive Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Navbar with sidebar toggle */}
          <Navbar onMenuToggle={toggleSidebar} />

          {/* Main Content */}
          <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}