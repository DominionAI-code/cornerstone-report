// OvariesAdnexaeSection.jsx
"use client";
import { useState } from "react";

export default function OvariesAdnexaeSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNote, setSelectedNote] = useState("");

  const ovariesOptions = [
    { value: "", label: "Select Ovaries/Adnexae Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "Both ovaries are normal in sizes and echo housing normal few follicles of varying sizes. Free of cysts and Mass. There is no significant fluid seen in the Pouch of Douglas",
    },
    {
      value: "ovarian cyst (simple)",
      label: "Ovarian Cyst (Simple)",
      note: "Both ovaries are normal in sizes and echo housing normal few follicles of varying sizes. There is however a well-defined thin-walled anechoic lesion noted in the right measuring 32mm x 43mm in size. There is no significant fluid seen in the Pouch of Douglas",
    },
    {
      value: "ovarian cyst (complex)",
      label: "Ovarian Cyst (Complex)",
      note: "Both ovaries are normal in sizes and echo housing normal few follicles of varying sizes. There is however a well-defined thick-walled hypoechoic lesion with internal echoes and septations noted in the right measuring 32mm x 43mm in size. There is no significant fluid seen in the Pouch of Douglas",
    },
    {
      value: "cystadenoma",
      label: "Cystadenoma",
      note: "There is a well-defined cystic mass of 80mm x 85mm in the right ovary with thin walls and internal echoes. The cystic mass appears to be multiloculated with thick septations and debris. The left ovary is normal in size and echo. There is no significant fluid seen in the Pouch of Douglas",
    },
    {
      value: "endometrioma",
      label: "Endometrioma",
      note: "There is a well-defined cystic lesion of 50mm x 65mm in the left ovary with a ground-glass appearance. The cystic lesion has thick wall septations and low-level internal echoes. The right ovary is normal in size and echo. There is no significant fluid seen in the Pouch of Douglas",
    },
    {
      value: "dermoid cyst",
      label: "Dermoid Cyst",
      note: "There is a well-defined cystic mass of 60mm x 65mm in the left ovary with internal echoes and calcifications. The cystic lesion has heterogeneous internal echoes and speckled debris, including fat and hair, consistent with a dermoid cyst. The right ovary is normal in size and echo. There is no significant fluid seen in the Pouch of Douglas",
    },
    {
      value: "ovarian fibroma (ovarian mass)",
      label: "Ovarian Fibroma (Ovarian Mass)",
      note: "There is a well-defined solid hypoechoic mass of 30mm x 45mm noted in the right ovary. The left ovary is normal in size and echo. There is no significant fluid seen in the Pouch of Douglas",
    },
    {
      value: "polycystic ovary (pcos)",
      label: "Polycystic Ovary (PCOS)",
      note: "Both ovaries are enlarged in sizes measuring 45mm x 35mm and 42mm x 38mm on the right and left respectively housing multiple follicles of almost same sizes arranged in a peripheral distribution with echogenic stromas. Both are free of masses. There is moderate fluid seen in the Pouch of Douglas",
    },
    {
      value: "ovarian hyperstimulation syndrome",
      label: "Ovarian Hyperstimulation Syndrome",
      note: "Both ovaries are enlarged in sizes measuring 65mm x 45mm and 62mm x 58mm on the right and left respectively housing numerous cystic structure measuring about 30mm in diameter with internal septations. Both are free of masses. There is moderate fluid seen in the Pouch of Douglas",
    },
    {
      value: "hydrosalpinx",
      label: "Hydrosalpinx",
      note: "Both ovaries are normal in sizes and echo housing normal few follicles of varying sizes. Free of cysts and Mass. There is hypoechoic dilated fluid filled structure around the uterus and ovaries with internal indentation. There is moderate fluid seen in the Pouch of Douglas",
    },
    {
      value: "pyosalpinx",
      label: "Pyosalpinx",
      note: "Both ovaries are normal in sizes and echo housing normal few follicles of varying sizes. Free of cysts and Mass. There is hypoechoic dilated fluid filled structure around the uterus and ovaries with internal echoes (pus). There is moderate fluid seen in the Pouch of Douglas.",
    },
    {
      value: "tubo-ovarian abscess",
      label: "Tubo-Ovarian Abscess",
      note: "There is a hypoechoic and heterogeneous lesion in the right adnexa measuring 34mm x 45mm with internal echoes consistence with an abscess. There is moderate fluid seen in the Pouch of Douglas.",
    },
    {
      value: "pid (pelvic inflammatory disease)",
      label: "PID (Pelvic Inflammatory Disease)",
      note: "Both ovaries are normal in sizes and echo housing normal few follicles of varying sizes. Free of cysts and Mass. There is copious fluid seen in the Pouch of Douglas",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = ovariesOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Ovaries / Adnexae</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {ovariesOptions.map((opt) => (
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
        placeholder="Ovaries / Adnexae findings..."
      ></textarea>
    </div>
  );
}
