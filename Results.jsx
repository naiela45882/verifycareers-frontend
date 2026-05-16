import React from 'react';
import RiskMeter from '../components/RiskMeter';
import PDFReportButton from '../components/PDFReportButton';

export default function Results({ result }) {
  if (!result) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <p className="text-gray-500">No result to show. Run an analysis first.</p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
      <div className="mb-4">
        <RiskMeter score={result.score} />
      </div>

      <div className="mb-6">
        <h3 className="font-medium">Notes</h3>
        <ul className="list-disc ml-5 text-gray-700">
          {result.notes?.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>

      <PDFReportButton data={result} />
    </main>
  );
}