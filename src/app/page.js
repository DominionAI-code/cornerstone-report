"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Shield,
  ArrowRight,
  Sparkles,
  Lock,
  Baby, 
  Stethoscope,
  Circle,
  ScanSearch,
} from "lucide-react";

const FloatingParticle = ({ delay, duration, x, y }) => (
  <div
    className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `float ${duration}s ease-in-out infinite ${delay}s alternate`,
    }}
  />
);

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const particleCount = window.innerWidth < 768 ? 10 : 20;
    const newParticles = Array.from({ length: particleCount }).map(() => ({
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  const scanTypes = [
    {
      id: "Obstetric",
      title: "Obstetric Ultrasound Scan",
      description:
        "An imaging test that checks baby's growth and health in the womb.",
      icon: Baby,
      color: "from-red-500 to-pink-600",
      glowColor: "shadow-red-500/25",
    },
    {
      id: "TwinsTriplet",
      title: "Obstetric Twins/Triplet",
      description:
        "An imaging test that checks twins or triplets growth and health in the womb.",
      icon: Baby,
      color: "from-red-600 to-pink-900",
      glowColor: "shadow-red-500/25",
    },
    {
      id: "Abdominal",
      title: "Abdominal Scan",
      description:
        "An imaging test that examines organs in the abdomen, such as the liver, kidneys, and gallbladder.",
      icon: Stethoscope,
      color: "from-yellow-400 to-orange-500",
      glowColor: "shadow-yellow-500/25",
    },
    {
      id: "Pelvic",
      title: "Pelvic Scan",
      description:
        "An imaging test that examines the pelvic organs, including the bladder and reproductive organs.",
      icon: Circle,
      color: "from-blue-500 to-purple-600",
      glowColor: "shadow-blue-500/25",
    },
    {
      id: "Abdomino-Pelvic",
      title: "Adomino-Pelvic Scan",
      description:
        "An imaging test that examines both abdominal and pelvic organs for comprehensive assessment.",
      icon: ScanSearch,
      color: "from-green-500 to-emerald-600",
      glowColor: "shadow-green-500/25",
    },
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <FloatingParticle key={i} {...particle} />
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Hero Section */}
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="whitespace-nowrap">Next-Generation Scan Technology</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            <span className="block sm:inline">Ultrasound Scan Report</span>
            <br />
            <span className="text-white block sm:inline">Automation</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4">
            Experience the future of automated scanning with AI-powered
            insights, real-time analytics, and enterprise-grade security—all in
            one unified platform.
          </p>
        </div>

        {/* Scan Types Grid */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-2 sm:mb-3 md:mb-4 px-2">
            Choose Your Scan Type From the Sidebar
          </h2>
          <p className="text-gray-700 text-center mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Select from our comprehensive suite of scanning from the sidebar to begin, each designed
            for specific use cases and optimized for maximum efficiency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {scanTypes.map((scan, index) => {
              const Icon = scan.icon;
              return (
                <div
                  key={scan.id}
                  className={`group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-500 hover:scale-105 ${scan.glowColor} hover:shadow-2xl`}
                  onMouseEnter={() => setHoveredCard(scan.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${scan.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`relative mb-3 sm:mb-4 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${scan.color} w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-cyan-300 transition-colors leading-tight">
                      {scan.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {scan.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      hoveredCard === scan.id ? "animate-pulse" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${scan.color} opacity-5`}
                    ></div>
                  </div>

                  {/* Arrow Icon */}
                  <ArrowRight className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { number: "99.9%", label: "Uptime Guarantee", icon: Lock },
              { number: "200K+", label: "Scans Completed", icon: Search },
              { number: "24/7", label: "Real-time Monitoring", icon: Shield },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group px-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1.5 sm:mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        @media (min-width: 640px) {
          .bg-grid-pattern {
            background-size: 40px 40px;
          }
        }

        @media (min-width: 1024px) {
          .bg-grid-pattern {
            background-size: 50px 50px;
          }
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 475px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .group:hover {
            transform: none;
          }
          
          .group:active {
            transform: scale(0.98);
          }
        }

        /* High DPI screen optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .bg-grid-pattern {
            background-size: 25px 25px;
          }
        }

        /* Landscape mobile optimizations */
        @media (max-height: 500px) and (orientation: landscape) {
          .py-8 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          
          .mb-12 {
            margin-bottom: 2rem;
          }
          
          .mt-12 {
            margin-top: 2rem;
          }
        }

        /* Ultra-wide screen support */
        @media (min-width: 1920px) {
          .container {
            max-width: 1800px;
          }
        }

        /* Print styles */
        @media print {
          .absolute {
            display: none;
          }
          
          .bg-gradient-to-br {
            background: white;
            color: black;
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .transition-all,
          .group-hover\\:scale-110,
          .hover\\:scale-105 {
            animation: none;
            transition: none;
            transform: none;
          }
        }

        /* Dark mode support enhancement */
        @media (prefers-color-scheme: dark) {
          .bg-white\\/5 {
            background-color: rgba(255, 255, 255, 0.08);
          }
        }

        /* Focus visible for accessibility */
        .group:focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* Safe area insets for notched devices */
        @supports (padding: max(0px)) {
          .px-3 {
            padding-left: max(0.75rem, env(safe-area-inset-left));
            padding-right: max(0.75rem, env(safe-area-inset-right));
          }
        }
      `}
      </style>
    </div>
  );
}