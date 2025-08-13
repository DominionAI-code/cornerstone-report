// components/ConclusionSection.jsx
export default function ConclusionSection({ setNote }) {
  return (
    <div>
      <label className="block font-medium text-gray-700 mb-2">Conclusion</label>
      <textarea
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter final diagnosis or summary..."
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        rows={4}
      />
    </div>
  );
}
