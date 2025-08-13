const BasicFetalAssessment = ({ form, onInputChange }) => (
  <section className="print-section">
    <h3 className="text-lg font-semibold text-blue-900 border-l-4 border-blue-900 pl-3 mb-4">
      I. BASIC FETAL ASSESSMENT
    </h3>
    <div className="bg-gray-50 p-4 rounded-lg grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Fetuses
          </label>
          <select
            name="foetus"
            value={form.foetus}
            onChange={(e) => onInputChange(e)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          >
            <option value="">Select...</option>
            <option value="Single">Single</option>
            <option value="Twins">Twins</option>
            <option value="Triplet">Triplet</option>
            <option value="No of fetal pole">No of fetal pole</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Fetal Lie
          </label>
          <select
            name="lie"
            value={form.lie}
            onChange={(e) => onInputChange(e)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          >
            <option value="">Select...</option>
            <option value="Longitudinal Cephalic">Longitudinal Cephalic</option>
            <option value="Longitudinal Breech">Longitudinal Breech</option>
            <option value="Oblique Cephalic">Oblique Cephalic</option>
            <option value="Oblique Breech">Oblique Breech</option>
            <option value="Unnotable">Unnotable</option>
            <option value="Transverse">Transverse</option>
            <option value="---">---</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Viability
          </label>
          <select
            name="viability"
            value={form.viability}
            onChange={(e) => onInputChange(e)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          >
            <option value="">Select...</option>
            <option value="Life with active cardiac">
              Life with active cardiac
            </option>
            <option value="Both alive with active cardiacs">
              Both alive with active cardiacs
            </option>
            <option value="Absent cardiac activity">
              Absent cardiac activity
            </option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            FHR (bpm)
          </label>
          <input
            type="number"
            name="fhr"
            min="1"
            max="500"
            placeholder="e.g. 145"
            value={form.fhr}
            onChange={(e) => onInputChange(e)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BasicFetalAssessment;
