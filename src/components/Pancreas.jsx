// PancreasSection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function PancreasSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState(""); // track <select> value
  const [selectedNote, setSelectedNote] = useState(""); // track textarea content

  const pancreasOptions = [
    { value: "", label: "Select Pancreas Finding", note: "" },
    {
      value: "normal pancreas",
      label: "Normal Pancreas",
      note: "The Pancreas appears normal in size, shape and echo.",
    },
    {
      value: "acute pancreatitis",
      label: "Acute Pancreatitis",
      note: "The Pancreas is enlarged and heterogeneous in echotexture with ill-defined margins. There are hypoechoic areas within the pancreas suggestive of edema. The pancreatic duct is dilated with a diameter of 6mm. No free fluid in the abdomen.",
    },
    {
      value: "chronic pancreatitis",
      label: "Chronic Pancreatitis",
      note: "The Pancreas is hyperechoic with calcifications and lobular contour. The pancreatic duct is dilated with a diameter of 5mm. No free fluid in the abdomen.",
    },
    {
      value: "parenchymal atrophy",
      label: "Parenchymal Atrophy",
      note: "The Pancreas is hyperechoic and atrophic. The pancreatic duct is dilated with a diameter of 8mm. No free fluid in the abdomen.",
    },
    {
      value: "pancreatic pseudocyst",
      label: "Pancreatic Pseudocyst",
      note: "The Pancreas appears normal in size, shape and echo. A thin walled anechoic lesion measuring 54mm x 68mm is seen in the pancreatic tail with low-level internal echoes. No free fluid in the abdomen.",
    },
    {
      value: "dilated pancreatic duct",
      label: "Dilated Pancreatic Duct",
      note: "The Pancreas appears normal in size, shape and echo. However, the pancreatic duct is dilated measuring 35mm in diameter. No free fluid in the abdomen.",
    },
    {
      value: "pancreatic duct stones",
      label: "Pancreatic Duct Stones",
      note: "The Pancreas appears normal in size, shape and echo. However, the pancreatic duct is dilated measuring 80mm in diameter and contains multiple echogenic foci suggestive of stones. No free fluid in the abdomen.",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = pancreasOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Pancreas</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {pancreasOptions.map((opt) => (
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
        placeholder="Pancreas findings..."
      ></textarea>
    </div>
  );
}
