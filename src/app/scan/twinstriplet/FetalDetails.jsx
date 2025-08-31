"use client";

import React from "react";
import { Baby } from "lucide-react";

const FetalDetails = ({
  reportData,
  onFetusChange,
  onAddFetus,
  onRemoveFetus,
}) => {
  const viabilityOptions = ["Select Viability", "Life with active cardiac", "Both alive with active cardiacs", "Absent cadiac activity", "Non-viable"];
  const presentationOptions = ["Select lie", "Longitudinal cephalic", "Longitudinal breech", "transverse", "oblique cephalic", "oblique breech", "Unnotable"];
  const liquorOptions = ["Select liquor", "Adequate and clear", "Reduced and clear", "Scanty","Absent","Present"];
  const sexOptions = ["Select sex", "male", "female", "undetermined"];

  return (
    <div className="bg-pink-50 p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-pink-800 flex items-center gap-2">
          <Baby className="h-5 w-5" />
          Fetal Details ({reportData.pregnancyType})
        </h2>
        <div className="flex gap-2">
          <button
            onClick={onAddFetus}
            disabled={reportData.fetuses.length >= 3}
            className="px-3 py-1 bg-pink-600 text-white rounded-lg text-sm hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Fetus
          </button>
          <button
            onClick={onRemoveFetus}
            disabled={reportData.fetuses.length <= 2}
            className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Remove Fetus
          </button>
        </div>
      </div>

      {reportData.fetuses.map((fetus, index) => (
        <div
          key={fetus.id}
          className="mb-6 p-4 bg-white rounded-lg border border-pink-200"
        >
          <h3 className="text-lg font-semibold text-pink-700 mb-3">
            Fetus {index + 1}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                Viability
              </label>
              <select
                value={fetus.viability}
                onChange={(e) =>
                  onFetusChange(index, "viability", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              >
                {viabilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                Presentation/Lie
              </label>
              <select
                value={fetus.presentation}
                onChange={(e) =>
                  onFetusChange(index, "presentation", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              >
                {presentationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                FHR (bpm)
              </label>
              <input
                type="number"
                value={fetus.fhr}
                onChange={(e) => onFetusChange(index, "fhr", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                placeholder="120-160"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                Liquor
              </label>
              <select
                value={fetus.liquor}
                onChange={(e) => onFetusChange(index, "liquor", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              >
                {liquorOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                BPD (mm)
              </label>
              <input
                type="number"
                value={fetus.bpd}
                onChange={(e) => onFetusChange(index, "bpd", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                placeholder="70-95"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                Femur Length (mm)
              </label>
              <input
                type="number"
                value={fetus.femurLength}
                onChange={(e) =>
                  onFetusChange(index, "femurLength", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                placeholder="50-70"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                AC (mm)
              </label>
              <input
                type="number"
                value={fetus.ac}
                onChange={(e) => onFetusChange(index, "ac", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                placeholder="250-320"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                EFW ({parseInt(fetus.efw) >= 1000 ? "kg" : "grams"})
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={
                    parseInt(fetus.efw) >= 1000
                      ? (parseInt(fetus.efw) / 1000).toFixed(2)
                      : fetus.efw
                  }
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (!inputValue) {
                      onFetusChange(index, "efw", "");
                      return;
                    }

                    const numValue = parseFloat(inputValue);
                    const currentGrams = parseInt(fetus.efw) || 0;

                    // If currently displaying in kg, convert input back to grams
                    if (currentGrams >= 1000) {
                      const gramsValue = Math.round(numValue * 1000);
                      onFetusChange(index, "efw", gramsValue.toString());
                    } else {
                      // Store as grams
                      onFetusChange(
                        index,
                        "efw",
                        Math.round(numValue).toString()
                      );
                    }
                  }}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  placeholder={
                    parseInt(fetus.efw) >= 1000
                      ? "Enter in kg"
                      : "Enter in grams"
                  }
                  step={parseInt(fetus.efw) >= 1000 ? "0.01" : "1"}
                  min="0"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 pointer-events-none">
                  {parseInt(fetus.efw) >= 1000 ? "kg" : "g"}
                </div>
              </div>
              {fetus.efw && (
                <div className="text-xs text-gray-500 mt-1">
                  {parseInt(fetus.efw) >= 1000
                    ? `(${fetus.efw} grams)`
                    : parseInt(fetus.efw) >= 1000
                    ? `(${(parseInt(fetus.efw) / 1000).toFixed(2)} kg)`
                    : ""}
                </div>
              )}
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                Fetal Sex
              </label>
              <select
                value={fetus.sex}
                onChange={(e) => onFetusChange(index, "sex", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              >
                {sexOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetalDetails;
