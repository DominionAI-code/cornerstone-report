"use client";

import React from "react";
import { User } from "lucide-react";

const PatientInformation = ({ reportData, onInputChange }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
        <User className="h-5 w-5" />
        Patient Information
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Patient Name
          </label>
          <input
            type="text"
            value={reportData.patientName}
            onChange={(e) => onInputChange("patientName", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter patient name"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              value={reportData.patientAge}
              onChange={(e) => onInputChange("patientAge", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Age"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              Referred By:
            </label>
            <input
              type="text"
              value={reportData.patientId}
              onChange={(e) => onInputChange("patientId", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Referred By"
            />
          </div>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Scan Date
          </label>
          <input
            type="date"
            value={reportData.scanDate}
            onChange={(e) => onInputChange("scanDate", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
