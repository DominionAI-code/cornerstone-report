"use client";
import { useState, useRef } from "react";

import HeaderSection from "@/components/HeaderSection";
import PatientHeader from "@/components/PatientHeader";
import BasicFetalAssessment from "./BasicFetalAssessment";
import GestationalAssessment from "./GestationalAssessment";
import BiometricMeasurements from "./BiometricMeasurements";
import FetalCharacteristics from "./FetalCharacteristics";
import MaternalStructures from "./MaternalStructures";
import ClinicalNotes from "./ClinicalNotes";
import SignatureSection from "./SignatureSection";
import ReportModal from "./ReportModal";

export default function ObstetricScan() {
  const [form, setForm] = useState({
    patientName: "",
    patientAge: "",
    lmp: "",
    edd: "",
    scanDate: "",
    refHospital: "",
    indication: "",
    referredBy: "",
    foetus: "",
    lie: "",
    viability: "",
    fhr: "",
    placenta: "",
    liquor: "",
    gaWeeks: "",
    gaDays: "",
    bpd: "",
    FemurLength: "",
    AC: "",
    EstimatedFetalWeight: "",
    SelectedSex: "",
    FetalAnomalies: "",
    comments: "",
    conclusion: "",
  });

  const [showReportModal, setShowReportModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const reportRef = useRef();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const calculateGA = () => {
    if (!form.lmp) return "";
    const lmpDate = new Date(form.lmp);
    const today = new Date();
    const diffTime = Math.abs(today - lmpDate);
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    return `${weeks}w ${days}d`;
  };

  // Calculate completed sections for the preview button
  const getCompletedSections = () => {
    let count = 0;
    if (form.patientName || form.patientAge) count++;
    if (
      form.foetus ||
      form.lie ||
      form.viability ||
      form.fhr ||
      form.placenta ||
      form.liquor
    )
      count++;
    if (form.lmp || form.edd || form.gaWeeks || form.gaDays) count++;
    if (
      form.bpd ||
      form.FemurLength ||
      form.AC ||
      form.EstimatedFetalWeight ||
      form.SelectedSex
    )
      count++;
    if (form.FetalAnomalies) count++;
    if (form.comments || form.conclusion) count++;
    return count;
  };

  const completedSections = getCompletedSections();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    try {
      if (typeof window !== "undefined") {
        const html2pdf = (await import("html2pdf.js")).default;
        const element = reportRef.current;

        const opt = {
          margin: 0.5,
          filename: `obstetric-report-${
            new Date().toISOString().split("T")[0]
          }.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };

        await html2pdf().set(opt).from(element).save();
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowReportModal(false);
  };

  const handlePreviewReport = () => {
    setShowReportModal(true);
  };

  const reportContent = (
    <div id="report-content" className="px-3 sm:px-6 md:px-8 lg:px-12">
      <HeaderSection />
      <PatientHeader form={form} onInputChange={handleInputChange} />

      {/* Title Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 border-b-2 border-blue-900 inline-block pb-2">
          OBSTETRIC ULTRASOUND REPORT
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
          Comprehensive Fetal Assessment
        </p>
      </div>

      {/* Sections */}
      <BasicFetalAssessment form={form} onInputChange={handleInputChange} />
      <GestationalAssessment
        form={form}
        onInputChange={handleInputChange}
        formatDate={formatDate}
        calculateGA={calculateGA}
      />
      <BiometricMeasurements form={form} onInputChange={handleInputChange} />
      <FetalCharacteristics form={form} onInputChange={handleInputChange} />
      <MaternalStructures form={form} onInputChange={handleInputChange} />
      <ClinicalNotes form={form} onInputChange={handleInputChange} />
      <SignatureSection />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Main Report Content */}
      {reportContent}

      {/* Preview Report Button */}
      <div className="text-center mt-6 sm:mt-8 mb-6 sm:mb-10 no-print px-3">
        <button
          onClick={handlePreviewReport}
          disabled={completedSections === 0}
          className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
            completedSections === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-xl active:scale-95"
          }`}
        >
          <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <span className="relative flex items-center justify-center gap-2">
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
              <span className="ml-1 sm:ml-2 px-2 py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">
                {completedSections} sections
              </span>
            )}
          </span>
        </button>
      </div>

      {/* Report Modal */}
      <ReportModal
        isOpen={showReportModal}
        onClose={handleCloseModal}
        form={form}
        reportRef={reportRef}
        onPrint={handlePrint}
        onDownload={handleDownloadPDF}
        isLoading={isLoading}
      />
    </div>
  );
}