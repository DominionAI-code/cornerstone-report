// StomachSection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function StomachSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState(""); // selected value for <select>
  const [selectedNote, setSelectedNote] = useState(""); // editable textarea

  const stomachOptions = [
    { value: "", label: "Select Stomach Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "The stomach appears normal in size and wall thickness.",
    },
    {
      value: "gastritis (ulcerative stomach)",
      label: "Gastritis (Ulcerative Stomach)",
      note: "The stomach wall is thickened with hyperechoic mucosa casting posterior acoustic shadow.",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = stomachOptions.find((opt) => opt.value === value);
    setSelectedOption(value);
    setSelectedNote(selected ? selected.note : "");
    setNote(selected ? selected.note : "");
  };

  const handleNoteChange = (e) => {
    const note = e.target.value;
    setSelectedNote(note);
    setNote(note);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold">Stomach</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {stomachOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <textarea
        value={selectedNote}
        onChange={handleNoteChange}
        rows={6}
        className="w-full border rounded p-2"
        placeholder="Stomach findings..."
      ></textarea>
    </div>
  );
}
