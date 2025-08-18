// PatientHeader.jsx
"use client";
import { useEffect } from "react";

export default function PatientHeader({ form, onInputChange }) {
  useEffect(() => {
    if (!form.date) {
      const today = new Date();
      const formatted = formatDate(today); // dd/mm/yyyy
      onInputChange({ target: { name: "date", value: formatted } });
    }
  }, [form.date, onInputChange]);

  // Format JS Date object or yyyy-mm-dd string → dd/mm/yyyy
  const formatDate = (date) => {
    if (typeof date === "string" && date.includes("-")) {
      date = new Date(date);
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Custom handler to format and capitalize input before passing to parent
  const handleInputChange = (e) => {
    let { name, value, type } = e.target;

    if (type === "date") {
      // Convert yyyy-mm-dd → dd/mm/yyyy
      if (value) {
        const [year, month, day] = value.split("-");
        value = `${day}/${month}/${year}`;
      }
    } else if (name === "patientName" || name === "referredBy") {
      value = value.replace(/\b\w/g, (char) => char.toUpperCase());
    } else if (name === "refHospital" || name === "indication") {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    onInputChange({ target: { name, value } });
  };

  return (
    <div className="w-full max-w-full mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
          Patient Information
        </h2>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <InputField
            label="Patient Name"
            name="patientName"
            value={form.patientName}
            onChange={handleInputChange}
          />
          <InputField
            label="Age"
            name="patientAge"
            value={form.patientAge}
            onChange={handleInputChange}
          />
          <InputField
            label="Date"
            name="date"
            type="date"
            value={form.date ? form.date.split("/").reverse().join("-") : ""}
            onChange={handleInputChange}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <InputField
            label="Referring Hospital"
            name="refHospital"
            value={form.refHospital}
            onChange={handleInputChange}
          />
          <InputField
            label="Indication"
            name="indication"
            value={form.indication}
            onChange={handleInputChange}
          />
          <InputField
            label="Referred By"
            name="referredBy"
            value={form.referredBy}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm"
      />
    </div>
  );
}