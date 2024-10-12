import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';

const DocumentAnalysis: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      // Here you would typically send the file to your backend for AI analysis
      // For this example, we'll just simulate an analysis result
      setAnalysis("Document analysis complete. Key findings: [Simulated AI analysis results would appear here]");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Document Analysis</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">PDF, DOCX, or TXT (MAX. 10MB)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.docx,.txt" />
          </label>
        </div>
        {file && (
          <div className="mt-4 flex items-center">
            <FileText className="mr-2" />
            <span>{file.name}</span>
          </div>
        )}
        <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" disabled={!file}>
          Analyze Document
        </button>
      </form>
      {analysis && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentAnalysis;