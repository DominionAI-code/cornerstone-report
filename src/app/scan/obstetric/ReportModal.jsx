"use client";

import { forwardRef } from "react";
import HeaderSection from "@/components/HeaderSection";

const ReportModal = ({
  isOpen,
  onClose,
  header,
  form,
  reportRef,
  onPrint,
  onDownload,
  isLoading,
}) => {
  if (!isOpen || !form) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header - Hidden in print */}
        <div className="no-print flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-800">
            Obstetric Ultrasound Report Preview
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={onPrint}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print
            </button>
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
          <ReportContent ref={reportRef} header={header} form={form} />
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 8mm; /* Adds a safe printer margin */
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
            height: auto;
            background: white;
          }

          .no-print {
            display: none !important;
          }

          .avoid-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .print-compact {
            font-size: 10pt !important;
            line-height: 1.0 !important;
          }

          .print-header {
            font-size: 11pt !important;
            margin-bottom: 2px !important;
          }

          .print-section {
            margin-bottom: 2px !important;
            padding-bottom: 1px !important;
            border-bottom: 1px solid #333 !important;
          }

          .print-section h3 {
            font-size: 11pt !important;
            margin-bottom: 1px !important;
            padding-bottom: 1px !important;
            border-bottom: 1px solid #666 !important;
          }

          .print-section h4 {
            font-size: 11pt !important;
            margin-bottom: 2px !important;
          }

          .diagram-space {
            height: 200px !important;
            border: 1px dashed #555 !important;
          }
        }

        .printable-content {
          width: 100%;
          max-height: 297mm;
          padding: 20mm;
          margin: 0 auto;
          background: white;
          font-family: "Times New Roman", serif;
          font-size: 10pt;
          line-height: 1.0;
          color: #000;
        }

        .diagram-space {
          height: 100px;
          border: 1px dashed #555;
        }
      `}</style>
    </div>
  );
};

const ReportContent = forwardRef(({ header, form }, ref) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Helper function to format gestational age
  const formatGestationalAge = () => {
    const weeks = form.gaWeeks;
    const days = form.gaDays;

    if (!weeks && !days) return "N/A";

    const weeksStr = weeks ? `${weeks} week${weeks !== "1" ? "s" : ""}` : "";
    const daysStr = days ? `${days} day${days !== "1" ? "s" : ""}` : "";

    if (weeks && days) {
      return `${weeksStr} ${daysStr}`;
    } else if (weeks) {
      return weeksStr;
    } else {
      return daysStr;
    }
  };

  // Helper function to format weight with appropriate units
  const formatWeight = (weight) => {
    if (!weight) return "N/A";
    const numWeight = parseFloat(weight);
    if (isNaN(numWeight)) return weight;

    // If weight is over 1000g, show in kg
    if (numWeight >= 1000) {
      return `${(numWeight / 1000).toFixed(2)} kg`;
    } else {
      return `${numWeight} g`;
    }
  };

  return (
    <div ref={ref} className="printable-content print-compact">
      {/* Header */}
      <div className="print-header mb-3 avoid-break">
        <HeaderSection />
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-700">
            {header?.reportTitle || "OBSTETRIC ULTRASOUND REPORT"}
          </h2>
        </div>
      </div>

      {/* Patient Information */}
      <div className="print-section mb-3 avoid-break">
        <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300 pb-1">
          PATIENT INFORMATION
        </h3>
        <div className="grid grid-cols-3 gap-2 text-base">
          <div>
            <p>
              <strong>Name:</strong> {form.patientName || "N/A"}
            </p>
            <p>
              <strong>Age:</strong>{" "}
              {form.patientAge ? `${form.patientAge} years` : "N/A"}
            </p>
          </div>
          <div>
            <p>
              <strong>Scan Date:</strong> {form.scanDate || form.date || "N/A"}
            </p>
            <p>
              <strong>Referring Hospital:</strong> {form.refHospital || "N/A"}
            </p>
          </div>
          <div>
            <p>
              <strong>Referred By:</strong> {form.referredBy || "N/A"}
            </p>
            {form.indication && (
              <p className="text-base">
                <strong>Clinical Indication:</strong> {form.indication}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Basic Fetal Assessment */}
      <div className="print-section mb-1 avoid-break">
        <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300 pb-1">
          BASIC FETAL ASSESSMENT
        </h3>
        <div className="grid grid-cols-3 gap-3 text-base">
          <div>
            <p>
              <strong>Foetus:</strong> {form.foetus || "N/A"}
            </p>
            <p>
              <strong>Lie:</strong> {form.lie || "N/A"}
            </p>
          </div>
          <div>
            <p>
              <strong>Viability:</strong> {form.viability || "N/A"}
            </p>
            <p>
              <strong>FHR:</strong> {form.fhr ? `${form.fhr} bpm` : "N/A"}
            </p>
          </div>
          <div>
            <p>
              <strong>Placenta:</strong> {form.placenta || "N/A"}
            </p>
            <p>
              <strong>Liquor:</strong> {form.liquor || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Gestational Assessment */}
      <div className="print-section mb-1 avoid-break">
        <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300 pb-1">
          GESTATIONAL ASSESSMENT
        </h3>
        <div className="grid grid-cols-2 gap-4 text-base">
          <div>
            <p>
              <strong>LMP:</strong> {form.lmp || "N/A"}
            </p>
            <p>
              <strong>EDD:</strong> {form.edd || "N/A"}
            </p>
          </div>
          <div>
            <p>
              <strong>Gestational Age (GA):</strong> {formatGestationalAge()}
            </p>
          </div>
        </div>
      </div>

      {/* Biometric Measurements */}
      <div className="print-section mb-1 avoid-break">
        <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300 pb-1">
          BIOMETRIC MEASUREMENTS
        </h3>
        <div className="grid grid-cols-2 gap-4 text-base">
          <div>
            <p>
              <strong>BPD:</strong> {form.bpd ? `${form.bpd} mm` : "N/A"}
            </p>
            <p>
              <strong>Femur Length:</strong>{" "}
              {form.FemurLength ? `${form.FemurLength} mm` : "N/A"}
            </p>
            <p>
              <strong>AC:</strong> {form.AC ? `${form.AC} mm` : "N/A"}
            </p>
          </div>
          <div>
            <p>
              <strong>Estimated Fetal Weight:</strong>{" "}
              {formatWeight(form.EstimatedFetalWeight)}
            </p>
            <p>
              <strong>Fetal Sex:</strong> {form.SelectedSex || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Fetal Characteristics */}
      <div className="print-section mb-3 avoid-break">
        <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300 pb-1">
          FETAL CHARACTERISTICS & ANOMALIES
        </h3>
        <div className="border border-gray-300 p-2 text-base min-h-[40px]">
          <p className="text-gray-800">
            {form.FetalAnomalies ||
              "No anomalies noted. All structures appear normal."}
          </p>
        </div>
      </div>

      {/* Comments & Conclusion */}
      <div className="print-section mb-1 avoid-break">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">
              ADDITIONAL COMMENTS
            </h3>
            <div className="min-h-[50px] border border-gray-300 p-2 text-base">
              <p className="text-gray-800">
                {form.comments?.trim() || "No additional comments provided."}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300 pb-1">
              CONCLUSION
            </h3>
            <div className="min-h-[50px] border border-gray-300 p-2 text-base">
              <p className="text-gray-800">
                {form.conclusion?.trim() ||
                  "Normal obstetric ultrasound scan for gestational age."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ultrasound Images/Diagram Space */}
      <div className="print-section mb-3 avoid-break">
        <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300 pb-1">
          ULTRASOUND IMAGES / DIAGRAM
        </h3>
        <div className="border-2 border-dashed border-gray-300 diagram-space flex items-center justify-center bg-gray-50">
          <div className="text-center text-gray-300">
            <svg
              className="w-8 h-8 mx-auto mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-xs text-gray-200 mt-1">
              Images to be attached or drawn here
            </p>
          </div>
        </div>
      </div>

      {/* Signatures */}
      <div className="mt-2 avoid-break">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="border-t border-gray-400 pt-2 text-center">
              <p className="text-base font-semibold">Sonographer Signature:</p>
            </div>
          </div>
        </div>
        <div className="mt-1 text-center text-xs text-gray-500">
          <p>Report generated on: {currentDate}</p>
          <p>This is a computer-generated medical report.</p>
        </div>
      </div>
    </div>
  );
});

ReportContent.displayName = "ReportContent";

export default ReportModal;