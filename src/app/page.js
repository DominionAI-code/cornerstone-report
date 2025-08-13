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
  Venus,
  ScanSearch,
} from "lucide-react";

const FloatingParticle = ({ delay, duration, x, y }) => (
  <div
    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
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
    const newParticles = Array.from({ length: 20 }).map(() => ({
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
      icon: Venus,
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <FloatingParticle key={i} {...particle} />
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation Scan Technology
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Ultrasound Scan Report
            <br />
            <span className="text-white">Automation</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
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
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Choose Your Scan Type From the Sidebar
          </h2>
          <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Select from our comprehensive suite of scanning from the sidebar to begin, each designed
            for specific use cases and optimized for maximum efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scanTypes.map((scan, index) => {
              const Icon = scan.icon;
              return (
                <div
                  key={scan.id}
                  className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-500 hover:scale-105 ${scan.glowColor} hover:shadow-2xl`}
                  onMouseEnter={() => setHoveredCard(scan.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${scan.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`relative mb-4 p-3 rounded-xl bg-gradient-to-br ${scan.color} w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {scan.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {scan.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      hoveredCard === scan.id ? "animate-pulse" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${scan.color} opacity-5`}
                    ></div>
                  </div>

                  {/* Arrow Icon */}
                  <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "99.9%", label: "Uptime Guarantee", icon: Lock },
              { number: "200K+", label: "Scans Completed", icon: Search },
              { number: "24/7", label: "Real-time Monitoring", icon: Shield },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
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
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}