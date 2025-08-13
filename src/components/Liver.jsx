// LiverSection.jsx
"use client"; // For Next.js App Router
import { useState } from "react";

export default function LiverSection({ setNote }) {
  const [selectedOption, setSelectedOption] = useState(""); // keep track of selected <option>
  const [selectedNote, setSelectedNote] = useState("");     // keep textarea editable

  const liverOptions = [
    { value: "", label: "Select Liver Finding", note: "" },
    {
      value: "normal",
      label: "Normal",
      note: "The Liver is normal in size (140mm in craniocaudal span) with regular outline. It shows good parenchymal echotexture. The intrahepatic ducts and vascular channels are within limits. No focal lesion or mass seen.",
    },
    {
      value: "hepatomegaly",
      label: "Hepatomegaly",
      note: "The liver is enlarged measuring 168mm in span with regular outline. It shows good parenchymal echotexture. The intrahepatic ducts and vascular channels are within limits. No focal lesion or mass seen.",
    },
    {
      value: "hepatic cyst (simple)",
      label: "Hepatic Cyst (Simple)",
      note: "The Liver is normal in size (140mm in craniocaudal span) with regular outline. It shows good parenchymal echotexture. A thin walled anechoic lesion measuring 59mm x 68mm is seen in segment 3, smaller similar lesion is seen in segment 8. The intrahepatic ducts and vascular channels are within limits.",
    },
    {
      value: "hepatic cyst (complex)",
      label: "Hepatic Cyst (Complex)",
      note: "The Liver is normal in size (140mm in craniocaudal span) with regular outline. It shows good parenchymal echotexture. A thin walled anechoic lesion measuring 54mm x 68mm is seen in segment 3 with septae and low-level internal echoes. The intrahepatic ducts and vascular channels are within limits.",
    },
    {
      value: "liver cirrhosis",
      label: "Liver Cirrhosis",
      note: "The Liver measures 120mm in craniocaudal span with nodular outline. It shows increased parenchymal echogenicity and coarsened echotexture. The intrahepatic ducts and vascular channels are within limits. No focal lesion or mass seen. There is however free fluid (ascites) around the liver and in the abdomen.",
    },
    {
      value: "hemangioma",
      label: "Hemangioma",
      note: "The Liver is normal in size (140mm in craniocaudal span) with regular outline. It shows fairly good parenchymal echotexture. A well-defined hyperechoic lesion with smooth borders measuring 54mm x 68mm is seen the right lobe of the liver. The intrahepatic ducts and vascular channels are within limits. No other focal lesion or liver disease is identified.",
    },
    {
      value: "hepatitis",
      label: "Hepatitis",
      note: "The liver is enlarged measuring 180mm in span with regular outline. It shows decreased (hypoechoic) parenchymal echogenicity and coarsened echotexture with numerous tiny hyperechoic lesions (starry sky sign). The intrahepatic ducts and vascular channels are within limits. No obvious mass seen.",
    },
    {
      value: "fatty liver disease (steatosis)",
      label: "Fatty Liver Disease (Steatosis)",
      note: "The Liver is normal in size (140mm in craniocaudal span) with regular outline. It shows diffuse increase in parenchymal echotexture compared to the spleen consistent with Grade I fatty liver. The intrahepatic ducts and vascular channels are within limits. No focal lesion or mass seen.",
    },
    {
      value: "metastases",
      label: "Metastases",
      note: "The Liver is diffusely heterogeneous in echotexture with multiple hypoechoic nodules ranging in size from 10mm to 4mm scattered throughout the liver. The largest of the lesions is seen in segment 4 measuring 30mm x 40mm. The intrahepatic ducts and vascular channels are within limits.",
    },
    {
      value: "p.l.c.c. (hepatocellular carcinoma)",
      label: "P.L.C.C. (Hepatocellular Carcinoma)",
      note: "The Liver measures 150mm in craniocaudal span with regular outline. It shows fairly good parenchymal echotexture. A well-defined suspicious hypoechoic mass with irregular border measuring 44mm x 38mm is seen the right lobe of the liver. The intrahepatic ducts and vascular channels are within limits. No other focal lesion or liver disease is identified.",
    },
    {
      value: "hepatic abscess",
      label: "Hepatic Abscess",
      note: "The liver is enlarged measuring 170mm in span with regular outline. It shows fair parenchymal echogenicity. There is a hypoechoic and heterogeneous lesion in the right lobe measuring 34mm x 45mm with internal echoes consistent with a hepatic abscess. The intrahepatic ducts and vascular channels are within limits.",
    },
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selected = liverOptions.find((opt) => opt.value === value);
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
      <h2 className="text-lg font-semibold">Liver</h2>

      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border rounded p-2 w-full"
      >
        {liverOptions.map((opt) => (
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
        placeholder="Liver findings..."
      ></textarea>
    </div>
  );
}
