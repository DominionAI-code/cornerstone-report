export default function HeaderSection({ header }) {
  return (
    <div className="text-center border-b-2 border-blue-900 pb-2 mb-4">
      <div className="flex items-center gap-2 justify-center">
        {/* ✅ Plain <img> instead of next/image for print compatibility */}
        <img
          src="/cornerstone logo.png"
          alt="Hospital Logo"
          width="80"
          height="80"
          style={{ display: "inline-block" }}
        />

        <div className="text-xs text-left">
          <h1 className="text-lg font-bold text-blue-900">
            {header?.clinicName || "Cornerstone Clinic & Medical Centre"}
          </h1>
          <p className="text-[15px] text-gray-700">
            {header?.address || "No 3, Korede Quarters, Kabba, Kogi State."}
          </p>
          <p className="text-[15px] text-gray-600">
            {header?.department || "Department of Radiology & Imaging"}
          </p>
          <p className="text-[15px] text-gray-700">
            {header?.phone || "07035070333, 08036926600"}
          </p>
        </div>
      </div>

      {header?.reportTitle && (
        <div className="mt-2 inline-block bg-blue-50 border border-blue-200 rounded px-2 py-1">
          <p className="text-[12px] font-bold text-blue-900 tracking-wider">
            {header.reportTitle}
          </p>
        </div>
      )}
    </div>
  );
}
