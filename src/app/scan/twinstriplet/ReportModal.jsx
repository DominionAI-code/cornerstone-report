"use client";

import React from "react";
import { Printer } from "lucide-react";
import HeaderSection from "@/components/HeaderSection";

const ReportModal = ({ reportData, onClose }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handlePrint = () => {
    if (!document.getElementById("print-styles")) {
      const style = document.createElement("style");
      style.id = "print-styles";
      style.textContent = `
        @media print {
          * {
            visibility: hidden;
          }
          #printable-report, #printable-report * {
            visibility: visible;
          }
          #printable-report {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 10px !important;
          }
          #printable-report {
            font-size: 13px !important;
          }
          #printable-report h3 {
            font-size: 14px !important;
          }
          #printable-report svg {
            width: 160px !important;
            height: 120px !important;
          }
          #printable-report .h-40 {
            height: 200px !important;
          }
          .no-print {
            display: none !important;
          }
          .modal-header {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .compact-section {
            margin-bottom: 2px !important;
          }
          .compact-grid {
            gap: 6px !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-xl no-print modal-header">
          <h2 className="text-lg font-bold text-gray-800">
            Obstetric Ultrasound Report
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 flex items-center gap-1 text-sm"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 text-sm"
            >
              Close
            </button>
          </div>
        </div>

        <div id="printable-report" className="p-4 printable-content">
          {/* Header */}
          <div className="text-center border-b border-gray-300">
            <HeaderSection />
            <h1 className="text-base font-bold text-gray-800">
              OBSTETRIC ULTRASOUND REPORT
            </h1>
          </div>

          {/* Patient Information - Compact Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4 compact-section compact-grid">
            <div>
              <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1">
                PATIENT INFORMATION
              </h3>
              <div className="space-y-1 text-base">
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {reportData.patientName || "Not specified"}
                </p>
                <p>
                  <span className="font-medium">Age:</span>{" "}
                  {reportData.patientAge || "Not specified"} years
                </p>
                <p>
                  <span className="font-medium">Referred By:</span>{" "}
                  {reportData.patientId || "Not specified"}
                </p>
                <p>
                  <span className="font-medium">Scan Date:</span>{" "}
                  {formatDate(reportData.scanDate)}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200">
                PREGNANCY DETAILS
              </h3>
              <div className="space-y-1 text-base">
                <p>
                  <span className="font-medium">LMP:</span>{" "}
                  {formatDate(reportData.lmp)}
                </p>
                <p>
                  <span className="font-medium">EDD:</span>{" "}
                  {formatDate(reportData.edd)}
                </p>
                <p>
                  <span className="font-medium">Gestational Age:</span>{" "}
                  {reportData.gestationalAge.weeks || "0"}w{" "}
                  {reportData.gestationalAge.days || "0"}d
                </p>
                <p>
                  <span className="font-medium">Placenta:</span>{" "}
                  {reportData.placentaPosition.charAt(0).toUpperCase() +
                    reportData.placentaPosition.slice(1)}
                </p>
              </div>
            </div>
          </div>

          {/* Fetal Assessment - More Compact */}
          <div className="mb-4 compact-section">
            <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200">
              FETAL ASSESSMENT
            </h3>

            {reportData.fetuses.map((fetus, index) => (
              <div key={fetus.id} className="border border-gray-200 rounded">
                <h4 className="text-base font-semibold text-gray-700">
                  FETUS {index + 1}
                </h4>

                <div className="grid grid-cols-3 gap-4 text-base">
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1 text-base">
                      General
                    </h5>
                    <div className="space-y-0.5">
                      <p>
                        <span className="font-medium">Viability:</span>{" "}
                        {fetus.viability.charAt(0).toUpperCase() +
                          fetus.viability.slice(1)}
                      </p>
                      <p>
                        <span className="font-medium">Presentation:</span>{" "}
                        {fetus.presentation.charAt(0).toUpperCase() +
                          fetus.presentation.slice(1)}
                      </p>
                      <p>
                        <span className="font-medium">FHR:</span> {fetus.fhr}{" "}
                        bpm
                      </p>
                      <p>
                        <span className="font-medium">Liquor:</span>{" "}
                        {fetus.liquor.charAt(0).toUpperCase() +
                          fetus.liquor.slice(1)}
                      </p>
                      <p>
                        <span className="font-medium">Sex:</span>{" "}
                        {fetus.sex.charAt(0).toUpperCase() + fetus.sex.slice(1)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-600 mb-1 text-base">
                      Measurements
                    </h5>
                    <div className="space-y-0.5">
                      <p>
                        <span className="font-medium">BPD:</span> {fetus.bpd} mm
                      </p>
                      <p>
                        <span className="font-medium">FL:</span>{" "}
                        {fetus.femurLength} mm
                      </p>
                      <p>
                        <span className="font-medium">AC:</span> {fetus.ac} mm
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-600 mb-1 text-base">
                      Weight
                    </h5>
                    <div className="space-y-0.5">
                      <p>
                        <span className="font-medium">EFW:</span> {fetus.efw}g
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Images Section */}
          {/* Compact Images Section */}
          <div className="mb-4 compact-section">
            <h3 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">
              ULTRASOUND IMAGES / DIAGRAM
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {/* Fetal Layout - Enlarged for twins/triplets */}
              <div className="border border-gray-300 bg-gray-50 flex items-center justify-center h-40">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 160"
                    className="w-36 h-32 mx-auto opacity-50"
                  >
                    {/* Main uterine cavity - larger for multiple fetuses */}
                    <ellipse
                      cx="120"
                      cy="90"
                      rx="80"
                      ry="80"
                      stroke="gray"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Cervical opening */}
                    <path
                      d="M30 150 Q100 130 170 150"
                      stroke="gray"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Grid lines for positioning multiple fetuses */}
                    <line
                      x1="150"
                      y1="50"
                      x2="150"
                      y2="200"
                      stroke="gray"
                      strokeWidth="0.5"
                      strokeDasharray="3,3"
                      opacity="0.3"
                    />
                    <line
                      x1="100"
                      y1="150"
                      x2="200"
                      y2="150"
                      stroke="gray"
                      strokeWidth="0.5"
                      strokeDasharray="3,3"
                      opacity="0.3"
                    />
                  </svg>
                  <p className="text-xs text-gray-500 font-medium">
                    Fetal Layout
                  </p>
                </div>
              </div>

              {/* Placenta Layout - Enlarged for multiple placentas */}
              <div className="border border-gray-300 bg-gray-50 flex items-center justify-center h-40">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 160"
                    className="w-36 h-32 mx-auto opacity-50"
                  >
                    {/* Main uterine outline */}
                    <ellipse
                      cx="115"
                      cy="80"
                      rx="90"
                      ry="75"
                      stroke="gray"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Anterior/Posterior indicators */}
                    <line
                      x1="40"
                      y1="30"
                      x2="40"
                      y2="130"
                      stroke="gray"
                      strokeWidth="2"
                    />
                    <line
                      x1="45"
                      y1="35"
                      x2="45"
                      y2="125"
                      stroke="gray"
                      strokeWidth="1"
                    />

                    {/* Position labels */}
                    <text
                      x="100"
                      y="20"
                      textAnchor="middle"
                      className="fill-gray-500"
                      style={{ fontSize: "10px" }}
                    >
                      Anterior
                    </text>
                    <text
                      x="100"
                      y="150"
                      textAnchor="middle"
                      className="fill-gray-500"
                      style={{ fontSize: "10px" }}
                    >
                      Posterior
                    </text>

                    {/* Placenta labels */}
                    <text
                      x="70"
                      y="45"
                      textAnchor="middle"
                      className="fill-gray-600"
                      style={{ fontSize: "7px" }}
                    >
                      P1
                    </text>
                    <text
                      x="130"
                      y="45"
                      textAnchor="middle"
                      className="fill-gray-600"
                      style={{ fontSize: "7px" }}
                    >
                      P2
                    </text>
                    <text
                      x="100"
                      y="105"
                      textAnchor="middle"
                      className="fill-gray-600"
                      style={{ fontSize: "7px" }}
                    >
                      P3
                    </text>
                  </svg>
                  <p className="text-xs text-gray-500 font-medium">
                    Placenta Layout
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comments - Compact */}
          {reportData.comments && (
            <div className="mb-3 compact-section">
              <h3 className="text-sm font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-1">
                ADDITIONAL COMMENTS
              </h3>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <p>{reportData.comments}</p>
              </div>
            </div>
          )}

          {/* Compact Footer */}
          <div className="border-t border-gray-300 pt-3 text-center text-xs text-gray-600">
            <p>Report generated: {formatDate(reportData.scanDate)}</p>
            <p className="mt-1">Sonographer: _________________</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
