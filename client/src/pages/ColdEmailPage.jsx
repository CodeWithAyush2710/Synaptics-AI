// import React, { useState } from 'react';
// import { generateEmails } from '../utils/api';

// const ColdEmailPage = () => {
//   const [emails, setEmails] = useState([]);

//   const handleGenerate = async () => {
//     try {
//       const res = await generateEmails();
//       setEmails(res.data.emails);
//     } catch (err) {
//       alert('Error generating emails');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleGenerate}>Generate Cold Emails</button>
//       <ul>
//         {emails.map((e, idx) => (
//           <li key={idx}>{e.message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ColdEmailPage;

// import React from 'react';
// import EmailGenerator from '../components/EmailGenerator';
// import { MessageSquare, Mail, Zap } from 'lucide-react';

// function ColdEmailPage() {
//   return (
//     <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             AI-Powered Cold Email Generator
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Generate personalized cold emails for job applications by providing a job link and optional resume.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           <FeatureCard 
//             icon={<Mail size={24} className="text-blue-600" />}
//             title="Personalized Emails"
//             description="Our AI generates tailored emails that match job requirements and your qualifications"
//           />
//           <FeatureCard 
//             icon={<Zap size={24} className="text-blue-600" />}
//             title="Quick Generation"
//             description="Get your cold email in seconds with just a job link and your resume"
//           />
//           <FeatureCard 
//             icon={<MessageSquare size={24} className="text-blue-600" />}
//             title="Professional Tone"
//             description="Emails are crafted with the right balance of professionalism and personality"
//           />
//         </div>

//         <div className="bg-white shadow-md rounded-lg p-6">
//           <EmailGenerator />
//         </div>
//       </div>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-transform hover:scale-105 duration-300">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// export default ColdEmailPage;




// import React from 'react';
// import EmailGenerator from '../components/EmailGenerator';
// import { MessageSquare, Mail, Zap } from 'lucide-react';

// function ColdEmailPage() {
//   return (
//     <>
//       <style>
//         {`
//           @tailwind base;
//           @tailwind components;
//           @tailwind utilities;

//           :root {
//             font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
//             line-height: 1.5;
//             font-weight: 400;
//             color-scheme: light;
//           }

//           body {
//             margin: 0;
//             min-height: 100vh;
//             background-color: #f8fafc;
//           }

//           @layer base {
//             h1, h2, h3, h4, h5 {
//               line-height: 1.2;
//             }
//           }

//           @layer components {
//             .btn-primary {
//               @apply py-2.5 px-4 rounded-md bg-blue-800 text-white font-medium hover:bg-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto;
//             }

//             .input-field {
//               @apply w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-800 bg-white px-4 py-2.5 border;
//             }

//             .label {
//               @apply block mb-2 font-medium text-gray-700;
//             }

//             .drop-zone {
//               @apply w-full border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors bg-gray-50 border-gray-300 hover:bg-gray-100;
//             }

//             .drop-zone-active {
//               @apply border-blue-500 bg-blue-50;
//             }
//           }

//           .fade-enter {
//             opacity: 0;
//           }

//           .fade-enter-active {
//             opacity: 1;
//             transition: opacity 300ms;
//           }

//           .fade-exit {
//             opacity: 1;
//           }

//           .fade-exit-active {
//             opacity: 0;
//             transition: opacity 300ms;
//           }
//         `}
//       </style>

//       <div className="min-h-screen flex flex-col">
//         {/* <header className="bg-blue-800 text-white py-4 px-4 md:px-6">
//           <div className="container mx-auto flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <Mail size={24} />
//               <h1 className="text-xl font-bold">Synaptics AI</h1>
//             </div>
//             <nav>
//               <ul className="flex space-x-4">
//                 <li><a href="#" className="hover:text-blue-200 transition-colors">Home</a></li>
//                 <li><a href="#" className="hover:text-blue-200 transition-colors">About</a></li>
//                 <li><a href="#" className="hover:text-blue-200 transition-colors">Contact</a></li>
//               </ul>
//             </nav>
//           </div>
//         </header> */}

//         <main className="flex-1">
//           <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
//             <div className="max-w-4xl mx-auto">
//               <div className="text-center mb-12">
//                 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   AI-Powered Cold Email Generator
//                 </h1>
//                 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                   Generate personalized cold emails for job applications by providing a job link and optional resume.
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-3 gap-6 mb-12">
//                 <FeatureCard 
//                   icon={<Mail size={24} className="text-blue-600" />}
//                   title="Personalized Emails"
//                   description="Our AI generates tailored emails that match job requirements and your qualifications"
//                 />
//                 <FeatureCard 
//                   icon={<Zap size={24} className="text-blue-600" />}
//                   title="Quick Generation"
//                   description="Get your cold email in seconds with just a job link and your resume"
//                 />
//                 <FeatureCard 
//                   icon={<MessageSquare size={24} className="text-blue-600" />}
//                   title="Professional Tone"
//                   description="Emails are crafted with the right balance of professionalism and personality"
//                 />
//               </div>

//               <div className="bg-white shadow-md rounded-lg p-6">
//                 <EmailGenerator />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-transform hover:scale-105 duration-300">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// export default ColdEmailPage;



import React from 'react';
import EmailGenerator from '../components/EmailGenerator';
import { MessageSquare, Mail, Zap } from 'lucide-react';

function ColdEmailPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
        
        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-8 py-10">
            <div className="max-w-4xl mx-auto">
              {/* Title & Description */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">AI-Powered Cold Email Generator</h1>
                <p className="text-lg text-gray-600">Generate personalized cold emails for job applications by providing a job link and optional resume.</p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <FeatureCard 
                  icon={<IconWrapper><Mail size={20} /></IconWrapper>}
                  title="Personalized Emails"
                  description="Tailored emails that match job requirements and your qualifications."
                />
                <FeatureCard 
                  icon={<IconWrapper><Zap size={20} /></IconWrapper>}
                  title="Quick Generation"
                  description="Generate emails in seconds with just a job link and your resume."
                />
                <FeatureCard 
                  icon={<IconWrapper><MessageSquare size={20} /></IconWrapper>}
                  title="Professional Tone"
                  description="Crafted emails with the right balance of professionalism and personality."
                />
              </div>

              {/* Email Generator Form */}
              <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-xl shadow-2xl border border-gray-200 p-10 transition hover:shadow-blue-100">
  <EmailGenerator />
</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// Icon circle wrapper
function IconWrapper({ children }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-3">
      {children}
    </div>
  );
}

// FeatureCard with transition and polish
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-transform hover:scale-[1.03] duration-300">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default ColdEmailPage;