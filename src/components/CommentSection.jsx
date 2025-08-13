// components/CommentSection.jsx
export default function CommentSection({ setNote }) {
  return (
    <div>
      <label className="block font-medium text-gray-700 mb-2">Comment</label>
      <textarea
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter any additional observations or remarks..."
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        rows={4}
      />
    </div>
  );
}
