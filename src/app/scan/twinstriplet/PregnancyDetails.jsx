"use client";

import React from "react";
import { Calendar } from "lucide-react";

const PregnancyDetails = ({ reportData, onInputChange, onLMPChange }) => {
  const placentaOptions = [
    "anterior",
    "posterior",
    "fundal",
    "low-lying",
    "previa",
  ];

  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
        <Calendar className="h-5 w-5" />
        Pregnancy Details
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            LMP (Last Menstrual Period)
          </label>
          <input
            type="date"
            value={reportData.lmp}
            onChange={(e) => onLMPChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            EDD (Expected Delivery Date)
          </label>
          <input
            type="date"
            value={reportData.edd}
            onChange={(e) => onInputChange("edd", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              GA - Weeks
            </label>
            <input
              type="number"
              value={reportData.gestationalAge.weeks}
              onChange={(e) =>
                onInputChange("gestationalAge", {
                  ...reportData.gestationalAge,
                  weeks: e.target.value,
                })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Weeks"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              GA - Days
            </label>
            <input
              type="number"
              value={reportData.gestationalAge.days}
              onChange={(e) =>
                onInputChange("gestationalAge", {
                  ...reportData.gestationalAge,
                  days: e.target.value,
                })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Days"
              max="6"
            />
          </div>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Placenta Position
          </label>
          <select
            value={reportData.placentaPosition}
            onChange={(e) => onInputChange("placentaPosition", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {placentaOptions.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PregnancyDetails;
