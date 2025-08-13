// PeritonealCavitySection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function PeritonealCavitySection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNote, setSelectedNote] = useState("");

  const peritonealOptions = [
    { value: "", label: "Select Peritoneal Cavity Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "No free fluid, no mass. The demonstrated bowel loops are normal in caliber with peristalsis. No sign of obstruction seen.",
    },
    {
      value: "enteritis (intramural gas)",
      label: "Enteritis (Intramural Gas)",
      note: "No free fluid, no mass. The demonstrated bowel loops are normal in caliber with peristalsis. There is however increased intestinal gas pattern seen. No sign of obstruction seen.",
    },
    {
      value: "appendicitis",
      label: "Appendicitis",
      note: "No free fluid, no mass. The demonstrated bowel loops are normal in caliber with peristalsis. There is however moderate probe tenderness and hypoechogenicity with increased intestinal gas pattern noted at the RIF. No sign of obstruction seen.",
    },
    {
      value: "hernia",
      label: "Hernia",
      note: "There is an anterior wall defect measuring 50mm x 20mm with bowel loop herniating through it noted on the supraumbilical region. No sign of obstruction noted. No free fluid, no mass. The rest of the demonstrated bowel loops are normal in caliber with peristalsis. There is also significant bowel gas noted.",
    },
    {
      value: "intraperitoneal mass",
      label: "Intraperitoneal Mass",
      note: "No free fluid. The demonstrated bowel loops are normal in caliber with peristalsis. There is however a well-defined hypoechoic mass with irregular margins measuring 64mm at its widest diameter noted in the peritoneal cavity. There is also significant bowel gas noted. No sign of obstruction seen.",
    },
    {
      value: "intestinal obstruction",
      label: "Intestinal Obstruction",
      note: "The demonstrated bowel loops are mostly dilated, the contents within these loops demonstrate to-and-fro movement with no notable peristalsis. There are also small bowel folds seen within the loops. No free fluid, no mass.",
    },
    {
      value: "intussusception",
      label: "Intussusception",
      note: "The demonstrated bowel loops are normal in caliber with peristalsis. There is however a segment of the small bowel that demonstrates the target or doughnut sign on transverse view and multi-layered appearance (Sandwich Sign) on longitudinal view consistent with intussusception. The intussusception measures 40mm in diameter. No accompanying free fluid or mass noted.",
    },
    {
      value: "midgut volvulus",
      label: "Midgut Volvulus",
      note: "The demonstrated bowel loops are mostly normal in caliber with peristalsis. There is however a segment of the small bowel that demonstrates a swirling of the mesentery and superior mesenteric vessels known as the Whirlpool sign consistent with midgut volvulus. Dilated bowel loops are seen proximal to the area of torsion.",
    },
    {
      value: "lymphadenopathy",
      label: "Lymphadenopathy",
      note: "No free fluid, no mass. The demonstrated bowel loops are normal in caliber with peristalsis. There are multiple para-aortic and mesenteric enlarged lymph nodes seen in the peritoneal cavity ranging from 30mm to 50mm in diameter. There is also increased intestinal gas pattern seen. No sign of obstruction seen.",
    },
    {
      value: "intestinal perforation",
      label: "Intestinal Perforation",
      note: "The demonstrated bowel loops are mostly dilated, the contents within these loops demonstrate to-and-fro movement with no notable peristalsis. There is however marked turbid free fluid noted consistent with perforation. There is also significant bowel gas noted.",
    },
    {
      value: "ascites",
      label: "Ascites",
      note: "There is marked free fluid ++ noted in the abdomen with floating bowel loops that are normal in caliber with peristalsis. No mass or sign of obstruction seen.",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = peritonealOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Peritoneal Cavity</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {peritonealOptions.map((opt) => (
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
        placeholder="Peritoneal cavity findings..."
      ></textarea>
    </div>
  );
}
