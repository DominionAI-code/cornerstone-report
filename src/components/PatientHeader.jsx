// PatientHeader.jsx
"use client";
import { useEffect } from "react";

export default function PatientHeader({ form, onInputChange }) {
  useEffect(() => {
    if (!form.date) {
      const today = new Date().toISOString().split("T")[0];
      onInputChange({ target: { name: "date", value: today } });
    }
  }, [form.date, onInputChange]);

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
            onChange={onInputChange}
          />
          <InputField
            label="Age"
            name="patientAge"
            value={form.patientAge}
            onChange={onInputChange}
          />
          <InputField
            label="Date"
            name="date"
            type="date"
            value={form.date}
            onChange={onInputChange}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <InputField
            label="Referring Hospital"
            name="refHospital"
            value={form.refHospital}
            onChange={onInputChange}
          />
          <InputField
            label="Indication"
            name="indication"
            value={form.indication}
            onChange={onInputChange}
          />
          <InputField
            label="Referred By"
            name="referredBy"
            value={form.referredBy}
            onChange={onInputChange}
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
