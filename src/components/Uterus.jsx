// UterusSection.jsx
"use client";
import { useState } from "react";

export default function UterusSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNote, setSelectedNote] = useState("");

  const uterusOptions = [
    { value: "", label: "Select Uterus Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "The uterus is anteverted with uniform myometrial echotexture measuring 87mm x 37mm (LxAP). No focal mass (fibroid) seen within it. The Endometrial Plate is normal in thickness and echo. No product of conception seen.",
    },
    {
      value: "fibroids (intramural/subserous)",
      label: "Fibroids (Intramural/Subserous)",
      note: "The uterus is anteverted with mixed myometrial echotexture measuring 107mm x 57mm (LxAP). There is a well-defined hypoechoic lesion seen in the fundus measuring 34mm x 17mm; a similar lesion is seen in the lower segment of the anterior myometrium measuring 20mm x 25mm. The Endometrial Plate is normal in thickness and echo. No product of conception seen.",
    },
    {
      value: "fibroids (pedunculated)",
      label: "Fibroids (Pedunculated)",
      note: "The uterus is anteverted with mixed myometrial echotexture measuring 87mm x 47mm (LxAP). There is a well-defined hypoechoic lesion seen located on a thin stalk arising from the fundus measuring 34mm x 47mm consistent with a Pedunculated fibroid. The Endometrial Plate is normal in thickness and echo. No product of conception seen.",
    },
    {
      value: "adenomyosis",
      label: "Adenomyosis",
      note: "The uterus is anteverted with heterogeneous myometrial echotexture measuring 107mm x 57mm (LxAP). There is a poorly defined shows areas of diffuse calcifications with multiple cystic changes anteriorly consistent with adenomyosis. The Endometrial Plate is normal in thickness and echo. No product of conception seen.",
    },
    {
      value: "endometritis",
      label: "Endometritis",
      note: "The uterus is anteverted with uniform myometrial echotexture measuring 87mm x 37mm (LxAP). No focal mass (fibroid) seen within it. The Endometrium shows diffuse heterogeneous echo and measures 12mm at its thickest portion; there is mild endometrial fluid noted. No product of conception seen.",
    },
    {
      value: "endometrial hyperplasia",
      label: "Endometrial Hyperplasia",
      note: "The uterus is anteverted with uniform myometrial echotexture measuring 87mm x 37mm (LxAP). No focal mass (fibroid) seen within it. The Endometrium shows diffuse heterogeneous echo and measures 15mm at its thickest portion. No product of conception seen.",
    },
    {
      value: "endometrial polyps",
      label: "Endometrial Polyps",
      note: "The uterus is anteverted with uniform myometrial echotexture measuring 87mm x 37mm (LxAP). No focal mass (fibroid) seen within it. The Endometrium shows heterogeneous echo and measures 12mm at its thickest portion. There is a focal, echogenic, non-shadowing lesion measuring 16mm in diameter within the endometrial cavity. There is also mild endometrial fluid noted. No product of conception seen.",
    },
    {
      value: "endometrial fluid collection",
      label: "Endometrial Fluid Collection",
      note: "The uterus is anteverted with uniform myometrial echotexture measuring 87mm x 37mm (LxAP). No focal mass (fibroid) seen within it. The Endometrial plate measures 12mm at its thickest portion. There is presence of hypoechoic fluid within the endometrial cavity measuring 20mm in diameter. No product of conception seen.",
    },
    {
      value: "cervicitis",
      label: "Cervicitis",
      note: "The uterus is anteverted with uniform myometrial echotexture measuring 87mm x 37mm (LxAP). No focal mass (fibroid) seen within it. The Endometrial Plate is normal in thickness and echo. No product of conception seen. The cervix is enlarged and shows heterogeneous echo.",
    },
    {
      value: "lipoleiomyoma",
      label: "Lipoleiomyoma",
      note: "The uterus is anteverted with mixed myometrial echotexture measuring 107mm x 57mm (LxAP). There is a well-defined hyperechoic lesion with areas of fat attenuation seen in the myometrium measuring 34mm x 17mm suggestive of lipoleiomyoma. The Endometrial Plate is normal in thickness and echo. No product of conception seen.",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = uterusOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Uterus</h2>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {uterusOptions.map((opt) => (
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
        placeholder="Uterus findings..."
      ></textarea>
    </div>
  );
}
