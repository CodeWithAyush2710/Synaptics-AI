import { motion } from 'framer-motion';

const Documentation = () => {
  return (
    <main className="pt-20">
      <section className="bg-primary-700 text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6">Documentation</h1>
            <p className="text-xl text-primary-100">
              Everything you need to know about using Synaptic AI's powerful services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className="text-center text-neutral-600 mb-8">
              This is a placeholder for the documentation page. In a real implementation, this would contain comprehensive documentation for all Synaptic AI services.
            </p>
            
            <div className="bg-neutral-100 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p>Our detailed documentation is currently being developed. Please check back soon for complete guides on:</p>
              <ul className="mt-4 space-y-2">
                <li>• Getting started with Synaptic AI</li>
                <li>• Using the Code Reviewer service</li>
                <li>• Generating effective cold emails</li>
                <li>• API references and integration guides</li>
                <li>• Best practices and examples</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Documentation;