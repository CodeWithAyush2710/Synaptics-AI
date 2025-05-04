import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';

function EmailResult({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Your Generated Cold Email</h2>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors px-3 py-1.5 rounded-md hover:bg-blue-50"
        >
          {copied ? (
            <>
              <Check size={18} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-inner">
        <div className="flex items-start space-x-3 mb-4">
          <Mail size={20} className="text-gray-500 mt-1" />
          <div>
            <div className="text-sm text-gray-500 mb-1">From: yourname@example.com</div>
            <div className="text-sm text-gray-500 mb-1">To: hiring.manager@company.com</div>
            <div className="text-sm text-gray-500 mb-3">Subject: Application for [Position] - [Your Name]</div>
          </div>
        </div>
        
        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-line text-gray-800 font-mono text-sm">{email}</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
        <p className="font-medium mb-1">Pro Tips:</p>
        <ul className="list-disc list-inside space-y-1 pl-1">
          <li>Personalize the greeting with the hiring manager's name if possible</li>
          <li>Customize any [bracketed] text with your specific information</li>
          <li>Proofread your email before sending</li>
        </ul>
      </div>
    </div>
  );
}

export default EmailResult;