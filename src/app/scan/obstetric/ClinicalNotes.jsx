const ClinicalNotes = ({ form, onInputChange }) => {
  // Custom handler to capitalize words in comment and conclusion fields
  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (name === "comments" || name === "conclusion") {
      // Capitalize the first letter of every word
      value = value.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    onInputChange({ target: { name, value } });
  };

  return (
    <section className="print-section">
      <h3 className="text-lg font-semibold text-blue-900 border-l-4 border-blue-900 pl-3 mb-4">
        VI. CLINICAL NOTES & FINDINGS
      </h3>
      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Comments
          </label>
          <textarea
            name="comments"
            className="w-full p-3 border border-gray-300 rounded-lg h-32"
            placeholder="Additional observations, measurements, or clinical notes..."
            value={form.comments}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Clinical Conclusion
          </label>
          <textarea
            name="conclusion"
            className="w-full p-3 border border-gray-300 rounded-lg h-32"
            placeholder="Summary of findings and clinical recommendations..."
            value={form.conclusion}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ClinicalNotes;
