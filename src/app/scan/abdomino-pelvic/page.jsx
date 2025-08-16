"use client";

import { useState, useRef } from "react";
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
import Uterus from "@/components/Uterus";
import OvariesAdnexae from "@/components/OvariesAdnexae";
import Prostate from "@/components/Prostate";
import ReportModal from "./ReportModal";

export default function AbdominopelvicScanPage() {
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

  const [gallBladderNote, setGallBladderNote] = useState("");
  const [liverNote, setLiverNote] = useState("");
  const [pancreasNote, setPancreasNote] = useState("");
  const [kidneysNote, setKidneysNote] = useState("");
  const [spleenNote, setSpleenNote] = useState("");
  const [urinaryBladderNote, setUrinaryBladderNote] = useState("");
  const [heartNote, setHeartNote] = useState("");
  const [stomachNote, setStomachNote] = useState("");
  const [peritonealCavityNote, setPeritonealCavityNote] = useState("");
  const [uterusNote, setUterusNote] = useState("");
  const [ovariesAdnexaeNote, setOvariesAdnexaeNote] = useState("");
  const [prostateNote, setProstateNote] = useState("");

  const [comments, setComments] = useState("");
  const [conclusion, setConclusion] = useState("");

  const reportRef = useRef();

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;

    setIsLoading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      html2pdf()
        .set({
          margin: 0.2,
          filename: `${patientData?.patientName || "abdominopelvic-scan"}.pdf`,
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
    {
      title: "Uterus",
      note: uterusNote,
      Component: Uterus,
      setNote: setUterusNote,
      color: "pink",
    },
    {
      title: "Ovaries & Adnexae",
      note: ovariesAdnexaeNote,
      Component: OvariesAdnexae,
      setNote: setOvariesAdnexaeNote,
      color: "violet",
    },
    {
      title: "Prostate",
      note: prostateNote,
      Component: Prostate,
      setNote: setProstateNote,
      color: "teal",
    },
  ];

  const completedSections = organSections.filter((s) => s.note.trim()).length;
  const progressPercentage = (completedSections / organSections.length) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-xl border border-white/20 mb-8 p-4 sm:p-6">
          <HeaderSection />
          <PatientHeader
            form={patientData}
            onInputChange={handlePatientInputChange}
          />
        </div>

        <div className="text-center mb-10 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Abdominopelvic Scan Report
          </h1>
          <div className="max-w-sm sm:max-w-md mx-auto px-2">
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>
                {completedSections}/{organSections.length} completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-10">
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
                <div
                  className={`h-2 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-t-xl`}
                ></div>
                <div className="p-4 sm:p-6">
                  <Component setNote={setNote} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Comments + Conclusion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 px-2">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
              Additional Comments
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="Enter any additional comments here..."
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
              Conclusion
            </label>
            <textarea
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              placeholder="Enter your conclusion here..."
            ></textarea>
          </div>
        </div>

        <div className="text-center px-2">
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={completedSections === 0}
            className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
              completedSections === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl active:scale-95"
            }`}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              Preview Report
              {completedSections > 0 && (
                <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs sm:text-sm">
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