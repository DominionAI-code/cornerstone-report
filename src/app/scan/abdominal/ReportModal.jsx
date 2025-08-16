"use client";

import { forwardRef } from "react";
import HeaderSection from "@/components/HeaderSection"; // Adjust path as needed

const ReportModal = ({
  isOpen,
  onClose,
  patientData,
  sectionsData,
  comments,
  conclusion,
  reportRef,
  onDownload,
  isLoading,
}) => {
  if (!isOpen) return null;

  // Filter out empty sections
  const completedSections = sectionsData.filter((section) =>
    section.note.trim()
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header - Hidden in print */}
        <div className="no-print flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-800">
            Abdominal Scan Report Preview
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={onDownload}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              )}
              {isLoading ? "Generating..." : "Download PDF"}
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Close
            </button>
          </div>
        </div>

        {/* Scrollable Report Content */}
        <div className="flex-1 overflow-y-auto">
          <ReportContent
            ref={reportRef}
            patientData={patientData}
            sectionsData={completedSections}
            comments={comments} // ✅ NEW
            conclusion={conclusion} // ✅ NEW
          />
        </div>
      </div>

      {/* Print Styles remain unchanged */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 2mm;
          }
          body * {
            visibility: hidden;
          }
          .printable-content,
          .printable-content * {
            visibility: visible;
          }
          .printable-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white;
            transform: scale(0.95);
            transform-origin: top left;
          }
          .no-print {
            display: none !important;
          }
          .avoid-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .print-compact {
            font-size: 11pt !important;
            line-height: 1.0 !important;
          }
          .print-header {
            font-size: 9pt !important;
            margin-bottom: 1px !important;
          }
          .print-section {
            margin-bottom: 1px !important;
          }
          .print-section h3 {
            font-size: 11pt !important;
            margin-bottom: 1px !important;
            padding-bottom: 1px !important;
          }
          .print-section h4 {
            font-size: 11pt !important;
            margin-bottom: 1px !important;
          }
        }
        .printable-content {
          width: 210mm;
          max-height: 270mm;
          padding: 7mm;
          margin: 0 auto;
          background: white;
          font-family: "Times New Roman", serif;
          font-size: 11pt;
          line-height: 1.0;
          color: #000;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

// ✅ Pass comments & conclusion into printable content
const ReportContent = forwardRef(
  ({ patientData, sectionsData, comments, conclusion }, ref) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div ref={ref} className="printable-content print-compact">
        {/* Header */}
        <div className="print-header mb-1 avoid-break">
          <HeaderSection />
          <div className="text-center">
            <h2 className="text-base font-bold text-gray-700">
              ABDOMINAL ULTRASOUND SCAN REPORT
            </h2>
          </div>
        </div>

        {/* Patient Information */}
        <div className="print-section mb-1 avoid-break">
          <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300">
            PATIENT INFORMATION
          </h3>
          <div className="grid grid-cols-3 gap-2 text-base">
            <div>
              <p>
                <strong>Name:</strong> {patientData.patientName || "N/A"}
              </p>
              <p>
                <strong>Age:</strong> {patientData.patientAge || "N/A"}
              </p>
            </div>
            <div>
              <p>
                <strong>Scan Date:</strong> {patientData.date || "N/A"}
              </p>
              <p>
                <strong>Referring Hospital:</strong>{" "}
                {patientData.refHospital || "N/A"}
              </p>
            </div>
            <div>
              <p>
                <strong>Referred By:</strong> {patientData.referredBy || "N/A"}
              </p>
              {patientData.indication && (
                <p className="text-base">
                  <strong>Clinical Indication:</strong> {patientData.indication}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Scan Findings */}
        <div className="print-section mb-1">
          <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300">
            ULTRASOUND FINDINGS
          </h3>
          {sectionsData.length > 0 ? (
            <div className="space-y-2">
              {sectionsData.map((section, index) => (
                <div key={index} className="avoid-break">
                  <h4 className="font-bold text-gray-700 mb-1 text-base">
                    {section.title.toUpperCase()}:
                  </h4>
                  <div className="ml-2 text-base text-gray-800 leading-snug">
                    {section.note.split("\n").map((line, lineIndex) => (
                      <p key={lineIndex} className="mb-0.5">
                        {line.trim() || "\u00A0"}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic text-base">
              No findings recorded.
            </p>
          )}
        </div>

        {/* ✅ Comments & Conclusion Section */}
        <div className="print-section mb-1 avoid-break">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300">
                ADDITIONAL COMMENTS
              </h3>
              <div className="min-h-[70px] border border-gray-300 p-1 text-base">
                <p className="text-gray-800">
                  {comments?.trim() || "No additional comments provided."}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300">
                CONCLUSION
              </h3>
              <div className="min-h-[70px] border border-gray-300 p-1 text-base">
                <p className="text-gray-800">
                  {conclusion?.trim() || "No conclusion provided."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Signatures */}
        <div className="mt-1 avoid-break">
          <div className="text-center mt-4">
            <p className="text-base font-semibold">
              Sonographer Signature: ..........................
            </p>
          </div>
          <div className="mt-2 text-center text-xs text-gray-500">
            <p>Report generated on: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  }
);

ReportContent.displayName = "ReportContent";

export default ReportModal;
