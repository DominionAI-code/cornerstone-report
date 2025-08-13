const BiometricMeasurements = ({ form, onInputChange }) => (
  <section className="print-section">
    <h3 className="text-lg font-semibold text-blue-900 border-l-4 border-blue-900 pl-3 mb-4">
      III. BIOMETRIC MEASUREMENTS
    </h3>
    <div className="bg-gray-50 p-4 rounded-lg grid md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          BPD (mm)
        </label>
        <input
          type="number"
          name="bpd"
          min="1"
          max="500"
          placeholder="Biparietal Diameter"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={form.bpd}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Femur Length (mm)
        </label>
        <input
          type="number"
          name="FemurLength"
          min="1"
          max="200"
          placeholder="FL measurement"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={form.FemurLength}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          AC (mm)
        </label>
        <input
          type="number"
          name="AC"
          min="1"
          max="500"
          placeholder="Abdominal Circumference"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={form.AC}
          onChange={onInputChange}
        />
      </div>
    </div>
  </section>
);

export default BiometricMeasurements;