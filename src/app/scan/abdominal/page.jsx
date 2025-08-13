"use client";

import { useState, useRef, useCallback } from "react";
import HeaderSection from "@/components/HeaderSection";
import PatientHeader from "@/components/PatientHeader";
import Liver from "@/components/Liver";
import GallBladder from "@/components/GallBladder";
import Pancreas from "@/components/Pancreas";
import Kidneys from "@/components/Kidneys";
import Spleen from "@/components/Spleen";
import UrinaryBladder from "@/components/UrinaryBladder";
import Heart from "@/components/Heart";
import Stomach from "@/components/Stomach";
import PeritonealCavity from "@/components/PeritonealCavity";
import ReportModal from "./ReportModal";

// ✅ Fixed: Static color classes instead of dynamic ones
const colorClasses = {
  emerald: "bg-gradient-to-r from-emerald-400 to-emerald-600",
  blue: "bg-gradient-to-r from-blue-400 to-blue-600",
  purple: "bg-gradient-to-r from-purple-400 to-purple-600",
  rose: "bg-gradient-to-r from-rose-400 to-rose-600",
  amber: "bg-gradient-to-r from-amber-400 to-amber-600",
  cyan: "bg-gradient-to-r from-cyan-400 to-cyan-600",
  red: "bg-gradient-to-r from-red-400 to-red-600",
  green: "bg-gradient-to-r from-green-400 to-green-600",
  indigo: "bg-gradient-to-r from-indigo-400 to-indigo-600",
};

// ✅ Input validation helper
const validatePatientData = (data) => {
  const errors = [];
  if (!data.patientName?.trim()) errors.push("Patient name is required");
  if (!data.patientAge?.trim()) errors.push("Patient age is required");
  if (!data.date?.trim()) errors.push("Scan date is required");
  return errors;
};

export default function AbdominalScanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [patientData, setPatientData] = useState({
    patientName: "",
    patientAge: "",
    date: "",
    refHospital: "",
    indication: "",
    referredBy: "",
  });

  // ✅ Improved input change handler with validation
  const handlePatientInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setPatientData((prev) => ({ ...prev, [name]: value }));

      // Clear errors when user starts typing
      if (errors.length > 0) {
        setErrors([]);
      }
    },
    [errors.length]
  );

  const [gallBladderNote, setGallBladderNote] = useState("");
  const [liverNote, setLiverNote] = useState("");
  const [pancreasNote, setPancreasNote] = useState("");
  const [kidneysNote, setKidneysNote] = useState("");
  const [spleenNote, setSpleenNote] = useState("");
  const [urinaryBladderNote, setUrinaryBladderNote] = useState("");
  const [heartNote, setHeartNote] = useState("");
  const [stomachNote, setStomachNote] = useState("");
  const [peritonealCavityNote, setPeritonealCavityNote] = useState("");
  const [comments, setComments] = useState("");
  const [conclusion, setConclusion] = useState("");

  const reportRef = useRef();

  // ✅ Improved PDF download with better error handling
  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;

    const validationErrors = validatePatientData(patientData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;

      await html2pdf()
        .set({
          margin: 0.2,
          filename: `${patientData?.patientName || "scan-report"}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        })
        .from(reportRef.current)
        .save();
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      setErrors(["Failed to generate PDF. Please try again."]);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Improved modal opening with validation
  const handleOpenModal = () => {
    const validationErrors = validatePatientData(patientData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsModalOpen(true);
  };

  const organSections = [
    {
      title: "Gall Bladder",
      note: gallBladderNote,
      Component: GallBladder,
      setNote: setGallBladderNote,
      color: "emerald",
    },
    {
      title: "Liver",
      note: liverNote,
      Component: Liver,
      setNote: setLiverNote,
      color: "blue",
    },
    {
      title: "Pancreas",
      note: pancreasNote,
      Component: Pancreas,
      setNote: setPancreasNote,
      color: "purple",
    },
    {
      title: "Kidneys",
      note: kidneysNote,
      Component: Kidneys,
      setNote: setKidneysNote,
      color: "rose",
    },
    {
      title: "Spleen",
      note: spleenNote,
      Component: Spleen,
      setNote: setSpleenNote,
      color: "amber",
    },
    {
      title: "Urinary Bladder",
      note: urinaryBladderNote,
      Component: UrinaryBladder,
      setNote: setUrinaryBladderNote,
      color: "cyan",
    },
    {
      title: "Heart",
      note: heartNote,
      Component: Heart,
      setNote: setHeartNote,
      color: "red",
    },
    {
      title: "Stomach",
      note: stomachNote,
      Component: Stomach,
      setNote: setStomachNote,
      color: "green",
    },
    {
      title: "Peritoneal Cavity",
      note: peritonealCavityNote,
      Component: PeritonealCavity,
      setNote: setPeritonealCavityNote,
      color: "indigo",
    },
  ];

  const completedSections = organSections.filter((section) =>
    section.note.trim()
  ).length;
  const progressPercentage = (completedSections / organSections.length) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header with glass effect */}
        <div className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-xl border border-white/20 mb-8 p-6">
          <HeaderSection />
          <PatientHeader
            form={patientData}
            onInputChange={handlePatientInputChange}
          />

          {/* ✅ Error display */}
          {errors.length > 0 && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="text-red-800 font-semibold mb-2">
                Please fix the following errors:
              </h4>
              <ul className="list-disc list-inside text-red-700 text-sm">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Title section with progress */}
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Abdominal Scan Report
          </h1>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>
                {completedSections}/{organSections.length} completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Organ sections grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {organSections.map((section, index) => {
            const { Component, setNote, color } = section;
            return (
              <div
                key={section.title}
                className="group backdrop-blur-sm bg-white/80 rounded-xl shadow-lg hover:shadow-2xl border border-white/30 transition-all duration-300 hover:scale-[1.02] hover:bg-white/90"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                {/* ✅ Fixed: Using static color classes */}
                <div
                  className={`h-2 ${colorClasses[color]} rounded-t-xl`}
                ></div>
                <div className="p-6">
                  <Component setNote={setNote} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Comments and Conclusion boxes */}
        <div className="mb-10">
          <div className="mb-6">
            <label
              htmlFor="comments"
              className="block text-lg font-semibold mb-2"
            >
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter any additional comments here..."
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="conclusion"
              className="block text-lg font-semibold mb-2"
            >
              Conclusion
            </label>
            <textarea
              id="conclusion"
              name="conclusion"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              rows={4}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter conclusion here..."
            ></textarea>
          </div>
        </div>

        {/* Action button */}
        <div className="text-center">
          <button
            onClick={handleOpenModal}
            disabled={completedSections === 0 || isLoading}
            className={`group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              completedSections === 0 || isLoading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl active:scale-95"
            }`}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
              Preview Report
              {completedSections > 0 && !isLoading && (
                <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                  {completedSections} sections
                </span>
              )}
            </span>
          </button>

          {completedSections === 0 && (
            <p className="text-gray-500 text-sm mt-2">
              Complete at least one section to preview the report
            </p>
          )}
        </div>
      </div>

      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        patientData={patientData}
        sectionsData={organSections.map(({ title, note }) => ({ title, note }))}
        comments={comments}
        conclusion={conclusion}
        reportRef={reportRef}
        onDownload={handleDownloadPDF}
        isLoading={isLoading}
      />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
