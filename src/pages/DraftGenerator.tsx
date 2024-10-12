import React, { useState } from 'react';
import { PenTool } from 'lucide-react';

const DraftGenerator: React.FC = () => {
  const [draftType, setDraftType] = useState('');
  const [keywords, setKeywords] = useState('');
  const [generatedDraft, setGeneratedDraft] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the draft type and keywords to your backend for AI-powered draft generation
    // For this example, we'll just simulate a generated draft
    setGeneratedDraft(`[Simulated AI-generated ${draftType} based on keywords: ${keywords}]`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Draft Generator</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="draftType" className="block mb-2">Draft Type</label>
          <select
            id="draftType"
            value={draftType}
            onChange={(e) => setDraftType(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select a draft type</option>
            <option value="contract">Contract</option>
            <option value="legalMemo">Legal Memo</option>
            <option value="courtMotion">Court Motion</option>
            <option value="settlementAgreement">Settlement Agreement</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="keywords" className="block mb-2">Keywords or Instructions</label>
          <textarea
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Generate Draft
        </button>
      </form>
      {generatedDraft && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Generated Draft</h2>
          <div className="whitespace-pre-wrap">{generatedDraft}</div>
        </div>
      )}
    </div>
  );
};

export default DraftGenerator;