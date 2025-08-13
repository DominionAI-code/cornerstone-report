// UrinaryBladderSection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function UrinaryBladderSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNote, setSelectedNote] = useState("");

  const bladderOptions = [
    { value: "", label: "Select Urinary Bladder Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "The urinary bladder is moderately distended with clear urine and shows normal outline and wall thickness. No mass, debris or stone seen.",
    },
    {
      value: "cystitis",
      label: "Cystitis",
      note: "The urinary bladder is moderately distended with clear urine and shows normal outline. The urinary bladder wall is thickened measuring 6mm. No mass, debris or stone seen.",
    },
    {
      value: "u.t.i.",
      label: "U.T.I. (Urinary Tract Infection)",
      note: "The urinary bladder is well distended with urine containing low-level echoes and shows normal outline and wall thickness. No mass, debris or stone seen.",
    },
    {
      value: "bladder stones",
      label: "Bladder Stone",
      note: "The urinary bladder is moderately distended with clear urine and shows normal outline and wall thickness. There is however an echogenic lesion casting posterior acoustic shadow noted in the bladder.",
    },
    {
      value: "bladder debris",
      label: "Bladder Debris",
      note: "The urinary bladder is well distended with urine containing low-level echoes and shows normal outline and wall thickness. The bladder however contains echogenic material with layering dependent to gravity consistent with bladder debris. No mass or stone seen.",
    },
    {
      value: "bladder mass (bladder cancer)",
      label: "Bladder Mass (Bladder Cancer)",
      note: "The urinary bladder is well distended with urine containing low-level echoes and shows normal outline with thickened wall. There is however a well-defined echogenic lesion noted in the bladder measuring 17mm x 20mm in size with irregular margins. No stone or debris seen.",
    },
    {
      value: "diverticulum",
      label: "Diverticulum",
      note: "The urinary bladder is well distended with clear urine and shows normal outline and wall thickness. There is however a diverticulum noted posteriorly measuring 40mm x 50mm in size. No mass, debris or stone seen.",
    },
    {
      value: "catheter in-situ",
      label: "Catheter In-situ",
      note: "The urinary bladder is collapsed with catheter balloon seen in-situ.",
    },
    {
      value: "bladder outlet obstruction (b.o.o)",
      label: "Bladder Outlet Obstruction (B.O.O)",
      note: "The urinary bladder is well distended with clear urine and shows normal outline. The urinary bladder wall is thickened measuring 8mm. No mass, debris or stone seen. The residual urine volume measures 30mls (significant).",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = bladderOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Urinary Bladder</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {bladderOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <textarea
        value={selectedNote}
        onChange={handleNoteChange}
        rows={4}
        className="w-full border rounded p-2"
        placeholder="Urinary bladder findings..."
      ></textarea>
    </div>
  );
}
