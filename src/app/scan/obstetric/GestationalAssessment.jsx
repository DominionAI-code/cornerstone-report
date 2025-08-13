const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const calculateGA = (lmp) => {
  if (!lmp) return "";
  const lmpDate = new Date(lmp);
  const today = new Date();
  const diffTime = Math.abs(today - lmpDate);
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;
  return `${weeks}w ${days}d`;
};

const GestationalAssessment = ({ form, onInputChange }) => (
  <section className="print-section">
    <h3 className="text-lg font-semibold text-blue-900 border-l-4 border-blue-900 pl-3 mb-4">
      II. GESTATIONAL ASSESSMENT
    </h3>
    <div className="bg-gray-50 p-4 rounded-lg grid md:grid-cols-3 gap-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Last Menstrual Period (LMP)
        </label>
        <input
          type="date"
          name="lmp"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={form.lmp}
          onChange={onInputChange}
        />
        {form.lmp && (
          <p className="text-xs text-gray-600 mt-1">
            Date: {formatDate(form.lmp)}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Expected Date of Delivery (EDD)
        </label>
        <input
          type="date"
          name="edd"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={form.edd}
          onChange={onInputChange}
        />
        {form.edd && (
          <p className="text-xs text-gray-600 mt-1">
            Date: {formatDate(form.edd)}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Gestational Age (GA)
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            name="gaWeeks"
            min="0"
            max="50"
            placeholder="Weeks"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.gaWeeks}
            onChange={onInputChange}
          />
          <input
            type="number"
            name="gaDays"
            min="0"
            max="6"
            placeholder="Days"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.gaDays}
            onChange={onInputChange}
          />
        </div>
        {(form.gaWeeks || form.gaDays) && (
          <p className="text-xs text-gray-600 mt-1">
            GA: {form.gaWeeks || 0} weeks {form.gaDays || 0} days
          </p>
        )}
        {form.lmp && (
          <p className="text-xs text-blue-600 mt-1">
            Calculated from LMP: {calculateGA(form.lmp)}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default GestationalAssessment;
