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
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        The Facility is Under Maintenance! <br /> Please check back later.
      </h1>
    </div>
  );
}