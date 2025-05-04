import React, { useState } from 'react';
import { generateEmails } from '../utils/api';

const ColdEmailPage = () => {
  const [emails, setEmails] = useState([]);

  const handleGenerate = async () => {
    try {
      const res = await generateEmails();
      setEmails(res.data.emails);
    } catch (err) {
      alert('Error generating emails');
    }
  };

  return (
    <div>
      <button onClick={handleGenerate}>Generate Cold Emails</button>
      <ul>
        {emails.map((e, idx) => (
          <li key={idx}>{e.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColdEmailPage;


/*
 <>
        <section className="bg-secondary-600 text-white py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="mb-6">Cold Email Generator</h1>
              <p className="text-xl text-secondary-100">
                Create personalized, effective cold emails that get responses.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="prose prose-lg max-w-3xl mx-auto">
              <p className="text-center text-neutral-600 mb-8">
                This is a placeholder for the Cold Email Generator service page. In a real implementation, this would contain detailed information about the service.
              </p>
              
              <div className="bg-neutral-100 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Service Coming Soon</h2>
                <p>Our Cold Email Generator service is being finalized. Stay tuned for capabilities like:</p>
                <ul className="mt-4 space-y-2">
                  <li>• Personalized email generation based on recipient data</li>
                  <li>• Multiple tone and style options</li>
                  <li>• A/B testing suggestions</li>
                  <li>• Response optimization</li>
                  <li>• Integration with popular email platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
*/