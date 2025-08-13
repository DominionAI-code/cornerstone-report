// KidneysSection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function KidneysSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState(""); // tracks <select>
  const [selectedNote, setSelectedNote] = useState(""); // tracks <textarea>

  const kidneysOptions = [
    { value: "", label: "Select Kidneys Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "Both kidneys are normal in positions and sizes; measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show good parenchyma echo and good corticomedullary differentials. No hydronephrosis, calculus, mass or cyst seen.",
    },
    {
      value: "renal parenchyma disease",
      label: "Renal Parenchyma Disease",
      note: "Both kidneys are normal in positions and sizes; measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show increased parenchyma echo compared to the liver and spleen with fair corticomedullary differentials consistent with Grade II Renal Parenchyma Disease. No hydronephrosis, calculus, mass or cyst seen.",
    },
    {
      value: "nephritis (pyelonephritis)",
      label: "Nephritis (Pyelonephritis)",
      note: "Both kidneys are normal in positions measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show fair corticomedullary differentials. Both have moderate hydronephrosis. No calculus, mass or cyst seen.",
    },
    {
      value: "renal cyst",
      label: "Renal Cyst",
      note: "Both kidneys are normal in positions measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show good parenchyma echo and good corticomedullary differentials. There is however a thin walled anechoic cystic lesion measuring 59mm x 68mm seen on the right kidney consistent with a right simple cyst. No hydronephrosis, calculus or mass seen.",
    },
    {
      value: "polycystic kidney disease",
      label: "Polycystic Kidney Disease",
      note: "Both kidneys are normal in positions measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show fair parenchyma echo and corticomedullary differentials. There are however multiple thin walled anechoic cystic lesions scattered throughout the renal parenchyma of the right kidney, ranging from 10mm to 50mm in diameter. No hydronephrosis, calculus or mass seen.",
    },
    {
      value: "renal stones (urolithiasis)",
      label: "Renal Stones (Urolithiasis)",
      note: "Both kidneys are normal in positions measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show good parenchyma echo and good corticomedullary differentials. There are however two echogenic foci measuring 10mm and 8mm seen in the upper pole of the right kidney with corresponding posterior acoustic shadow consistent with right renal stones. No hydronephrosis, cyst or mass seen.",
    },
    {
      value: "nephrocalcinosis",
      label: "Nephrocalcinosis",
      note: "Both kidneys are normal in positions measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show increased parenchyma echo and fair corticomedullary differentials. There are however multiple small calcifications scattered throughout the renal parenchyma of both kidneys. No hydronephrosis, cyst or mass seen.",
    },
    {
      value: "renal failure",
      label: "Renal Failure",
      note: "Both kidneys are normal in positions with reduced sizes; measuring 70mm x 30mm and 65mm x 35mm on the right and left respectively. They show diffuse increased parenchymal echo compared to the liver and spleen with loss (poor) corticomedullary differentials consistent with renal failure. No hydronephrosis, calculus, mass or cyst seen.",
    },
    {
      value: "renal mass",
      label: "Renal Mass",
      note: "Both kidneys are normal in positions measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show fair parenchyma echo and corticomedullary differentials. There is however a hypoechoic mass in the superior pole of the right kidney measuring 40mm in its widest diameter. The mass has irregular borders with heterogeneous echotexture. No hydronephrosis, calculus or cyst seen.",
    },
    {
      value: "hydronephrosis",
      label: "Hydronephrosis",
      note: "Both kidneys are normal in positions measuring 100mm x 40mm and 90mm x 35mm on the right and left respectively. They show fair parenchyma echo and corticomedullary differentials. They demonstrate moderate dilatation of the pelvicalyceal systems measuring up to 20mm in diameter consistent with Grade II hydronephrosis. No calculus, mass or cyst seen.",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = kidneysOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Kidneys</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {kidneysOptions.map((opt) => (
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
        placeholder="Kidneys findings..."
      ></textarea>
    </div>
  );
}
