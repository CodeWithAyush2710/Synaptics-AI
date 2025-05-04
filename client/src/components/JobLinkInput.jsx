import React from 'react';
import { Link } from 'lucide-react';

function JobLinkInput({ value, onChange, error }) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onChange(text);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor="jobLink" className="label">
        Job Posting URL <span className="text-red-500">*</span>
      </label>
      
      {/* <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
          <Link size={18} />
        </div>
        
        <input
          type="text"
          id="jobLink"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://www.example.com/job/12345"
          className={`input-field pl-10 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        /> */}

<div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">Job Link</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter job post link"
      />
        
        <button
          type="button"
          onClick={handlePaste}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Paste
        </button>
      </div>
      
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      
      <p className="text-sm text-gray-600">
        Paste the URL of the job posting you want to apply for
      </p>
    </div>
  );
}

export default JobLinkInput;