// HeartSection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function HeartSection({ setNote}) {
  const [selectedOption, setSelectedOption] = useState(""); // tracks the <select>
  const [selectedNote, setSelectedNote] = useState("");     // tracks the textarea

  const heartOptions = [
    { value: "", label: "Select Heart Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "The heart size and function are within normal limits.",
    },
    {
      value: "cardiomegaly",
      label: "Cardiomegaly",
      note: "The heart is moderately enlarged with a transverse diameter of 160mm. The Aorta and IVC are dilated measuring 20mm and 22mm respectively. No pericardial fluid noted.",
    },
    {
      value: "pericarditis",
      label: "Pericarditis",
      note: "The heart appears normal in size. However, the pericardium contains significant pericardial effusion (fluid buildup).",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = heartOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Heart</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {heartOptions.map((opt) => (
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
        placeholder="Heart findings..."
      ></textarea>
    </div>
  );
}
