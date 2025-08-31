"Use Client";
import { useState, useEffect } from "react";

export default function SignatureSection() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    // Client-side date/time to avoid hydration mismatch
    setCurrentDateTime(new Date().toLocaleString("en-GB"));
  }, []);

  return (
    <section className="print-section mb-8">
      <div>
        <p className="text-xs text-gray-500 mt-2">
          Report Generated: {currentDateTime || "Loading..."}
        </p>
      </div>
    </section>
  );
}