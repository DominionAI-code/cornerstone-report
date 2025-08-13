// ProstateSection.jsx
"use client";
import { useState } from "react";

export default function ProstateSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNote, setSelectedNote] = useState("");

  const prostateOptions = [
    { value: "", label: "Select Prostate Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "The prostate is normal size and outline with homogeneous echopattern, no focal mass seen.",
    },
    {
      value: "prostatic calcifications",
      label: "Prostatic Calcifications",
      note: "The prostate is normal size and outline with heterogeneous echopattern; there are however few hyperechoic foci seen within the gland consistent with calcifications. No focal mass seen.",
    },
    {
      value: "benign prostatic hyperplasia (bph)",
      label: "Benign Prostatic Hyperplasia (BPH)",
      note: "The prostate is enlarged measuring about 55mm x 60mm x 45mm (77mls in volume) and shows lobulated outline with heterogeneous echo. No mass or calculus seen within.",
    },
    {
      value: "prostate cancer",
      label: "Prostate Cancer",
      note: "The prostate is enlarged measuring about 55mm x 60mm x 45mm (77mls in volume) and shows lobulated outline with heterogeneous echo. There is presence of multiple hypoechoic nodules with irregular margins within the gland.",
    },
    {
      value: "prostatic cyst",
      label: "Prostatic Cyst",
      note: "The prostate is normal size and outline with homogeneous echopattern. There is however a thin walled anechoic lesion measuring 15mm x 200mm is seen in the prostate gland.",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = prostateOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Prostate</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {prostateOptions.map((opt) => (
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
        placeholder="Prostate findings..."
      ></textarea>
    </div>
  );
}
