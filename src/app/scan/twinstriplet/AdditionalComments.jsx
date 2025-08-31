import React from "react";

const AdditionalComments = ({ reportData, onInputChange }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Additional Comments
      </label>
      <textarea
        value={reportData.comments}
        onChange={(e) => onInputChange("comments", e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        rows="4"
        placeholder="Enter any additional observations or comments..."
      />
    </div>
  );
};

export default AdditionalComments;
