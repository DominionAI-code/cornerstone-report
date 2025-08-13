// GallBladderSection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function GallBladderSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState(""); // selected value
  const [selectedNote, setSelectedNote] = useState(""); // editable textarea

  const gallBladderOptions = [
    { value: "", label: "Select Gall Bladder Finding", note: "" },
    {
      value: "normal gallbladder",
      label: "Normal Gallbladder",
      note: "The Gallbladder appears normal with clear fluid content.",
    },
    {
      value: "multiseptated gallbladder",
      label: "Multiseptated Gallbladder",
      note: "The Gallbladder is moderately distended with multiple septations giving a honeycomb appearance.",
    },
    {
      value: "gallstones (cholelithiasis)",
      label: "Gallstones (Cholelithiasis)",
      note: "The Gallbladder is distended with clear fluid content. However, it contains multiple echogenic foci casting posterior acoustic shadow. The largest stone measures 9mm in its widest dimension. The Gallbladder wall is within limit.",
    },
    {
      value: "wes sign",
      label: "WES Sign",
      note: "The Gallbladder is distended with a thickened wall and multiple echogenic foci consistent with Cholelithiasis. There is also a well-defined curvilinear echogenic structure along the wall of the Gallbladder with corresponding acoustic shadow consistent with a WES sign.",
    },
    {
      value: "gallbladder sludge",
      label: "Gallbladder Sludge",
      note: "The Gallbladder is distended with a thickened wall and contains echogenic material with layering dependent to gravity consistent with Gallbladder sludge. No Gallstones or polyps identified.",
    },
    {
      value: "cholecystitis",
      label: "Cholecystitis",
      note: "The Gallbladder is distended with a thickened wall measuring up to 8mm and contains echogenic material consistent with Gallbladder sludge. No Gallstones or polyps identified.",
    },
    {
      value: "gallbladder polyp(s)",
      label: "Gallbladder Polyp(s)",
      note: "The Gallbladder appears normal in size and shape. A polypoid lesion is noted in the Gallbladder measuring 7mm in size. The polypoid lesion is echogenic with smooth surface and appears to be arising from the Gallbladder wall. The lesion shows no posterior acoustic shadow. The Gallbladder wall thickness is within limit.",
    },
    {
      value: "adenomyomatosis",
      label: "Adenomyomatosis",
      note: "The Gallbladder is distended with a thickened wall and contains echogenic material with comet tail artifacts, consistent with Adenomyomatosis. No Gallstones or polyps identified.",
    },
  ];

   const handleSelectChange = (e) => {
     const value = e.target.value;
     const selected = gallBladderOptions.find((opt) => opt.value === value);
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
       <h2 className="text-lg font-semibold">Gall Bladder</h2>
       <select
         value={selectedOption}
         onChange={handleSelectChange}
         className="border rounded p-2 w-full"
       >
         {gallBladderOptions.map((opt) => (
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
         placeholder="Gall bladder findings..."
       ></textarea>
     </div>
   );
}
