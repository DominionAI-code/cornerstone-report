// SpleenSection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function SpleenSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState(""); // tracks <select>
  const [selectedNote, setSelectedNote] = useState("");     // tracks <textarea>

  const spleenOptions = [
    { value: "", label: "Select Spleen Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "The Spleen is normal in size (110mm in craniocaudal span) with regular outline. It shows uniform parenchymal echotexture. No focal lesion or mass seen.",
    },
    {
      value: "splenomegaly",
      label: "Splenomegaly",
      note: "The Spleen is enlarged measuring 158mm in span with regular outline. It shows uniform parenchymal echotexture. No focal lesion or mass seen.",
    },
    {
      value: "splenic cyst (simple)",
      label: "Splenic Cyst (Simple)",
      note: "The Spleen is normal in size (110mm in craniocaudal span) with regular outline. It shows good parenchymal echotexture. A thin walled anechoic lesion measuring 39mm x 38mm is seen. No solid component or internal echoes seen within the lesion.",
    },
    {
      value: "splenic cyst (complex)",
      label: "Splenic Cyst (Complex)",
      note: "The Spleen is normal in size (110mm in craniocaudal span) with regular outline. It shows fair parenchymal echotexture. A well-defined cystic lesion measuring 54mm x 68mm is seen demonstrating internal septations and low-level internal echoes.",
    },
    {
      value: "hemangioma",
      label: "Hemangioma",
      note: "The Spleen is normal in size (110mm in craniocaudal span) with regular outline. It shows fairly good parenchymal echotexture. A well-defined hyperechoic lesion with smooth borders measuring 44mm x 38mm is seen. No other focal lesion is identified.",
    },
    {
      value: "lymphangioma",
      label: "Lymphangioma",
      note: "The Spleen is enlarged measuring 158mm in span with regular outline. It shows fair parenchymal echotexture. There are however multiple thin walled anechoic cystic lesions scattered throughout the parenchyma of the spleen, ranging from 10mm to 30mm in diameter. No mass seen.",
    },
    {
      value: "lymphoma",
      label: "Lymphoma",
      note: "The Spleen is enlarged measuring 158mm in span with regular outline. It shows hypoechoic and heterogeneous parenchymal echotexture. There are however multiple hypoechoic lesions scattered throughout the parenchyma, ranging from 10mm to 30mm in diameter with irregular margins.",
    },
    {
      value: "splenic masses",
      label: "Splenic Masses",
      note: "The Spleen is enlarged measuring 158mm in span with regular outline. It shows hypoechoic and heterogeneous parenchymal echotexture. There are however multiple hypoechoic lesions scattered throughout the parenchyma, ranging from 10mm to 30mm in diameter with irregular margins.",
    },
    {
      value: "splenic abscess",
      label: "Splenic Abscess",
      note: "The Spleen is normal in size (110mm in craniocaudal span) with regular outline. It shows fair parenchymal echogenicity. There is a hypoechoic and heterogeneous lesion in the splenic parenchyma measuring 34mm x 35mm with internal echoes consistent with a splenic abscess. No free fluid or lymphadenopathy seen in the abdomen.",
    },
    {
      value: "granuloma (gamna-gandy bodies)",
      label: "Granuloma (Gamna-Gandy Bodies)",
      note: "The Spleen is normal in size (110mm in craniocaudal span) with regular outline. It shows decreased (hypoechoic) parenchymal echogenicity and coarsened echotexture with numerous tiny hyperechoic foci of varying sizes demonstrating Popcorn appearance. No obvious mass seen.",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = spleenOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Spleen</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {spleenOptions.map((opt) => (
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
        placeholder="Spleen findings..."
      ></textarea>
    </div>
  );
}
