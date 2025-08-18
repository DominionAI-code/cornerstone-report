const FetalCharacteristics = ({ form, onInputChange }) => (
  <section className="print-section">
    <h3 className="text-lg font-semibold text-blue-900 border-l-4 border-blue-900 pl-3 mb-4">
      IV. FETAL CHARACTERISTICS
    </h3>
    <div className="bg-gray-50 p-4 rounded-lg grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Fetal Sex
          </label>
          <select
            name="SelectedSex"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white"
            value={form.SelectedSex}
            onChange={onInputChange}
          >
            <option value="">Select...</option>
            <option value="Male (XY)">Male (XY)</option>
            <option value="Female (XX)">Female (XX)</option>
            <option value="--">Indeterminate</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Estimated Fetal Weight (enter in grams)
          </label>
          <input
            type="text"
            name="EstimatedFetalWeight"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="e.g. 2500g"
            value={form.EstimatedFetalWeight}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Fetal Anomalies
        </label>
        <textarea
          name="FetalAnomalies"
          className="w-full p-3 border border-gray-300 rounded-lg h-24"
          placeholder="None detected / Specify any anomalies..."
          value={form.FetalAnomalies}
          onChange={onInputChange}
        />
      </div>
    </div>
  </section>
);

export default FetalCharacteristics;