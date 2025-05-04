// import React, { useState } from 'react';
// import FileUpload from './FileUpload';
// import JobLinkInput from './JobLinkInput';
// import { Loader2 } from 'lucide-react';
// import EmailResult from './EmailResult';
// import { generateEmail } from '../services/api';

// function EmailGenerator() {
//   const [formData, setFormData] = useState({
//     jobLink: '',
//     resumeFile: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [generatedEmail, setGeneratedEmail] = useState(null);

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.jobLink.trim()) {
//       newErrors.jobLink = 'Job link is required';
//     } else if (!isValidUrl(formData.jobLink)) {
//       newErrors.jobLink = 'Please enter a valid URL';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch (e) {
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsLoading(true);
//     setGeneratedEmail(null);
    
//     try {
//       const email = await generateEmail(formData.jobLink, formData.resumeFile);
//       setGeneratedEmail(email);
//     } catch (error) {
//       console.error('Error generating email:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleJobLinkChange = (value) => {
//     setFormData({ ...formData, jobLink: value });
//     if (errors.jobLink) {
//       setErrors({ ...errors, jobLink: '' });
//     }
//   };

//   const handleFileChange = (file) => {
//     setFormData({ ...formData, resumeFile: file });
//   };

//   const resetForm = () => {
//     setFormData({
//       jobLink: '',
//       resumeFile: null,
//     });
//     setGeneratedEmail(null);
//     setErrors({});
//   };

//   return (
//     <div>
//       {!generatedEmail ? (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <h2 className="text-xl font-semibold mb-6 text-gray-900">Generate Your Cold Email</h2>
          
//           <JobLinkInput 
//             value={formData.jobLink} 
//             onChange={handleJobLinkChange}
//             error={errors.jobLink}
//           />
          
//           <div className="space-y-2">
//             <label className="label">
//               Upload Resume <span className="text-gray-500 text-sm font-normal">(Optional)</span>
//             </label>
//             <FileUpload onFileChange={handleFileChange} />
//           </div>
          
//           <div className="pt-4">
//             <button
//               type="submit"
//               className="btn-primary"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <Loader2 size={20} className="animate-spin mr-2" />
//                   Generating Email...
//                 </span>
//               ) : (
//                 'Generate Cold Email'
//               )}
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="space-y-6">
//           <EmailResult email={generatedEmail} />
//           <button 
//             onClick={resetForm}
//             className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
//           >
//             ← Generate Another Email
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EmailGenerator;

// import React, { useState } from 'react';
// import { Loader, Send } from 'lucide-react';
// import FileUpload from './FileUpload';
// import JobLinkInput from './JobLinkInput';
// import EmailResult from './EmailResult';
// import { generateEmail } from '../services/api';

// function EmailGenerator() {
//   const [jobLink, setJobLink] = useState('');
//   const [resume, setResume] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [generatedEmail, setGeneratedEmail] = useState('');

//   const handleGenerate = async () => {
//     setLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setGeneratedEmail("Dear [Hiring Manager],\n\nI'm excited to apply for...");
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Input Fields */}
//       <div className="space-y-4">
//         <label className="block">
//           <span className="text-sm font-medium text-gray-700">Job Posting URL</span>
//           <input
//             type="url"
//             value={jobLink}
//             onChange={(e) => setJobLink(e.target.value)}
//             placeholder="https://company.com/job/software-engineer"
//             className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </label>

//         <label className="block">
//           <span className="text-sm font-medium text-gray-700">Upload Resume (PDF)</span>
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={(e) => setResume(e.target.files[0])}
//             className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white"
//           />
//         </label>
//       </div>

//       {/* Button */}
//       <button
//         onClick={handleGenerate}
//         disabled={loading || !jobLink}
//         className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
//       >
//         {loading ? <Loader className="animate-spin" size={18} /> : <Send size={18} />}
//         Generate Email
//       </button>

//       {/* Output */}
//       {generatedEmail && (
//         <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg whitespace-pre-wrap text-sm text-gray-800">
//           {generatedEmail}
//         </div>
//       )}
//     </div>
//   );
// }

// export default EmailGenerator;



import React, { useState } from 'react';
import FileUpload from './FileUpload';
import JobLinkInput from './JobLinkInput';
import { Loader2 } from 'lucide-react';
import EmailResult from './EmailResult';
import { generateEmail } from '../services/api';

function EmailGenerator() {
  const [formData, setFormData] = useState({
    jobLink: '',
    resumeFile: null,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.jobLink.trim()) {
      newErrors.jobLink = 'Job link is required';
    } else if (!isValidUrl(formData.jobLink)) {
      newErrors.jobLink = 'Please enter a valid URL';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setGeneratedEmail(null);
    try {
      const email = await generateEmail(formData.jobLink, formData.resumeFile);
      setGeneratedEmail(email);
    } catch (error) {
      console.error('Error generating email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleJobLinkChange = (value) => {
    setFormData({ ...formData, jobLink: value });
    if (errors.jobLink) {
      setErrors({ ...errors, jobLink: '' });
    }
  };

  const handleFileChange = (file) => {
    setFormData({ ...formData, resumeFile: file });
  };

  const resetForm = () => {
    setFormData({
      jobLink: '',
      resumeFile: null,
    });
    setGeneratedEmail(null);
    setErrors({});
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      {!generatedEmail ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Generate Your Cold Email</h2>

          <div className="w-full">
            <JobLinkInput 
              value={formData.jobLink} 
              
              onChange={handleJobLinkChange}
              error={errors.jobLink}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume <span className="text-gray-700 font-normal">(Optional)</span>
            </label>
            <FileUpload onFileChange={handleFileChange} />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition disabled:opacity-60"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex justify-center items-center gap-2">
                  <Loader2 size={20} className="animate-spin" />
                  Generating Email...
                </span>
              ) : (
                'Generate Cold Email'
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <EmailResult email={generatedEmail} />
          <button 
            onClick={resetForm}
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            ← Generate Another Email
          </button>
        </div>
      )}
    </div>
  );
}

export default EmailGenerator;

