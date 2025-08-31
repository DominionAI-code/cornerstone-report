"use client";

import React, { useState } from "react";
import { FileText } from "lucide-react";

// Import all components
import PatientInformation from "./PatientInformation";
// import PatientHeader from "@/components/PatientHeader";
import PregnancyDetails from "./PregnancyDetails";
import FetalDetails from "./FetalDetails";
import AdditionalComments from "./AdditionalComments";
import ReportModal from "./ReportModal";

const ObstetricScanGenerator = () => {
  const [reportData, setReportData] = useState({
    patientName: "",
    patientAge: "",
    patientId: "",
    scanDate: new Date().toISOString().split("T")[0],
    pregnancyType: "",
    lmp: "",
    edd: "",
    gestationalAge: { weeks: "", days: "" },
    fetuses: [
      {
        id: 1,
        viability: "",
        presentation: "",
        fhr: "",
        bpd: "",
        femurLength: "",
        ac: "",
        efw: "",
        sex: "",
        liquor: "",
      },
      {
        id: 2,
        viability: "",
        presentation: "",
        fhr: "",
        bpd: "",
        femurLength: "",
        ac: "",
        efw: "",
        sex: "",
        liquor: "",
      },
    ],
    placentaPosition: "anterior",
    comments: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (field, value) => {
    setReportData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFetusChange = (index, field, value) => {
    setReportData((prev) => ({
      ...prev,
      fetuses: prev.fetuses.map((fetus, i) =>
        i === index ? { ...fetus, [field]: value } : fetus
      ),
    }));
  };

  const addFetus = () => {
    if (reportData.fetuses.length < 3) {
      setReportData((prev) => ({
        ...prev,
        fetuses: [
          ...prev.fetuses,
          {
            id: prev.fetuses.length + 1,
            viability: "viable",
            presentation: "cephalic",
            fhr: "140",
            bpd: "85",
            femurLength: "65",
            ac: "290",
            efw: "2800",
            sex: "female",
            liquor: "normal",
          },
        ],
        pregnancyType: prev.fetuses.length === 1 ? "triplets" : "twins",
      }));
    }
  };

  const removeFetus = () => {
    if (reportData.fetuses.length > 2) {
      setReportData((prev) => ({
        ...prev,
        fetuses: prev.fetuses.slice(0, -1),
        pregnancyType: prev.fetuses.length === 3 ? "twins" : "twins",
      }));
    }
  };

  const calculateEDD = (lmpDate) => {
    if (!lmpDate) return "";
    const lmp = new Date(lmpDate);
    const edd = new Date(lmp);
    edd.setDate(edd.getDate() + 280);
    return edd.toISOString().split("T")[0];
  };

  const calculateGA = (lmpDate) => {
    if (!lmpDate) return { weeks: "", days: "" };
    const lmp = new Date(lmpDate);
    const today = new Date();
    const diffTime = today - lmp;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;
    return { weeks: weeks.toString(), days: days.toString() };
  };

  const handleLMPChange = (value) => {
    handleInputChange("lmp", value);
    const edd = calculateEDD(value);
    const ga = calculateGA(value);
    handleInputChange("edd", edd);
    setReportData((prev) => ({ ...prev, gestationalAge: ga }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Obstetric Ultrasound Report Generator
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <PatientInformation
                reportData={reportData}
                onInputChange={handleInputChange}
              />

              <PregnancyDetails
                reportData={reportData}
                onInputChange={handleInputChange}
                onLMPChange={handleLMPChange}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <FetalDetails
                reportData={reportData}
                onFetusChange={handleFetusChange}
                onAddFetus={addFetus}
                onRemoveFetus={removeFetus}
              />

              <AdditionalComments
                reportData={reportData}
                onInputChange={handleInputChange}
              />

              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <FileText className="h-5 w-5" />
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Report Modal */}
      {showModal && (
        <ReportModal
          reportData={reportData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ObstetricScanGenerator;
