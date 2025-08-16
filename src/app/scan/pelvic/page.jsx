"use client";

import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import HeaderSection from "@/components/HeaderSection";
import PatientHeader from "@/components/PatientHeader";
import Uterus from "@/components/Uterus";
import UrinaryBladder from "@/components/UrinaryBladder";
import Prostate from "@/components/Prostate";
import OvariesAdnexae from "@/components/OvariesAdnexae";
import ReportModal from "./ReportModal";
// 🆕 Import new components for Comment and Conclusion
import CommentSection from "@/components/CommentSection";
import ConclusionSection from "@/components/ConclusionSection";

export default function PelvicScanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [patientData, setPatientData] = useState({
    patientName: "",
    patientAge: "",
    date: "",
    refHospital: "",
    indication: "",
    referredBy: "",
  });

  const handlePatientInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({ ...prev, [name]: value }));
  };

  const [uterus, setUterusNote] = useState("");
  const [urinaryBladderNote, setUrinaryBladderNote] = useState("");
  const [prostateNote, setProstateNote] = useState("");
  const [ovariesAdnexaeNote, setOvariesAdnexaeNote] = useState("");

  // 🆕 States for Comment and Conclusion
  const [commentNote, setCommentNote] = useState("");
  const [conclusionNote, setConclusionNote] = useState("");

  const reportRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
  });

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;

    setIsLoading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;

      html2pdf()
        .set({
          margin: 0.2,
          filename: `${patientData?.patientName || "pelvic-scan-report"}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        })
        .from(reportRef.current)
        .save();
    } finally {
      setIsLoading(false);
    }
  };

  const organSections = [
    {
      title: "Uterus",
      note: uterus,
      Component: Uterus,
      setNote: setUterusNote,
      color: "rose",
    },
    {
      title: "Ovaries and Adnexae",
      note: ovariesAdnexaeNote,
      Component: OvariesAdnexae,
      setNote: setOvariesAdnexaeNote,
      color: "purple",
    },
    {
      title: "Prostate",
      note: prostateNote,
      Component: Prostate,
      setNote: setProstateNote,
      color: "blue",
    },
    {
      title: "Urinary Bladder",
      note: urinaryBladderNote,
      Component: UrinaryBladder,
      setNote: setUrinaryBladderNote,
      color: "teal",
    },
    // 🆕 Added Comment section
    {
      title: "Comment",
      note: commentNote,
      Component: CommentSection,
      setNote: setCommentNote,
      color: "amber",
    },
    // 🆕 Added Conclusion section
    {
      title: "Conclusion",
      note: conclusionNote,
      Component: ConclusionSection,
      setNote: setConclusionNote,
      color: "emerald",
    },
  ];

  const completedSections = organSections.filter((section) =>
    section.note.trim()
  ).length;
  const progressPercentage = (completedSections / organSections.length) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header with glass effect */}
        <div className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-xl border border-white/20 mb-6 sm:mb-8 p-4 sm:p-6">
          <HeaderSection />
          <PatientHeader
            form={patientData}
            onInputChange={handlePatientInputChange}
          />
        </div>

        {/* Title section with progress */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Pelvic Scan Report
          </h1>
          <div className="max-w-xs sm:max-w-md mx-auto">
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
              <span>Progress</span>
              <span>
                {completedSections}/{organSections.length} completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Organ sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {organSections.map((section, index) => {
            const { Component, setNote, color } = section;
            return (
              <div
                key={section.title}
                className={`group backdrop-blur-sm bg-white/80 rounded-xl shadow-lg hover:shadow-2xl border border-white/30 transition-all duration-300 hover:scale-[1.02] hover:bg-white/90`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div
                  className={`h-1.5 sm:h-2 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-t-xl`}
                ></div>
                <div className="p-4 sm:p-6">
                  <Component setNote={setNote} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action button */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={completedSections === 0}
            className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
              completedSections === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl active:scale-95"
            }`}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative flex justify-center items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
              Preview Report
              {completedSections > 0 && (
                <span className="ml-2 px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">
                  {completedSections} sections
                </span>
              )}
            </span>
          </button>

          {completedSections === 0 && (
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
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
        reportRef={reportRef}
        onPrint={handlePrint}
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