import React from 'react';
import { useReactToPrint } from 'react-to-print';

export default function DownloadPDF() {
  const handlePrint = useReactToPrint({
    content: () => document.getElementById('resume-content')
  });

  return (
    <button onClick={handlePrint} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
      Download as PDF
    </button>
  );
}
