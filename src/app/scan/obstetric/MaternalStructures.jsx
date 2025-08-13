const MaternalStructures = ({ form, onInputChange }) => (
  <section className="print-section">
    <h3 className="text-lg font-semibold text-blue-900 border-l-4 border-blue-900 pl-3 mb-4">
      V. MATERNAL STRUCTURES
    </h3>
    <div className="bg-gray-50 p-4 rounded-lg grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Placental Location
        </label>
        <select
          name="placenta"
          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          value={form.placenta}
          onChange={onInputChange}
        >
          <option value="">Select...</option>
          <option value="Anterior">Anterior</option>
          <option value="Posterior">Posterior</option>
          <option value="Fundal">Fundal</option>
          <option value="Antero Fundal">Antero Fundal</option>
          <option value="Postero Fundal">Postero Fundal</option>
          <option value="Not yet formed">Not yet formed</option>
          <option value="Not yet localized">Not yet localized</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Amniotic Fluid (Liquor)
        </label>
        <select
          name="liquor"
          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          value={form.liquor}
          onChange={onInputChange}
        >
          <option value="">Select...</option>
          <option value="Adequate and clear">Adequate and clear</option>
          <option value="Reduced and clear">Reduced and clear</option>
          <option value="Scanty">Scanty</option>
          <option value="Absent">Absent</option>
          <option value="Present">Present</option>
        </select>
      </div>
    </div>
  </section>
);

export default MaternalStructures;
