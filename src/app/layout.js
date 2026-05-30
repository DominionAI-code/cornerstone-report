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
      <body>
        <div className="flex h-screen bg-gray-100">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            The Facility is Under Maintenance! <br /> Please check back later.
          </h1>
        </div>
      </body>
    </html>
  );
}