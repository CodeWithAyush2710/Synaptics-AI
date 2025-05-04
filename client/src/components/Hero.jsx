import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-primary-50 via-white to-white opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary-50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-accent-50 to-transparent opacity-40"></div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 pt-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary-50 text-primary-700">
                Next-Generation AI Solution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-neutral-900"
            >
              Elevate Your Workflow with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                Synaptic AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-neutral-600 max-w-xl mx-auto lg:mx-0"
            >
              Harness the power of artificial intelligence to streamline your development and communication processes. Our cutting-edge AI tools help you code better and connect more effectively.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                to="/signup" 
                className="btn-primary btn-lg"
              >
                Get Started Free
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link 
                to="/documentation" 
                className="btn-outline btn-lg"
              >
                View Documentation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-sm text-neutral-500"
            >
              <p>Trusted by developers and companies worldwide</p>
              <div className="flex justify-center lg:justify-start gap-8 mt-4 opacity-70">
                {/* Simplified logo placeholders */}
                <div className="h-8 w-20 bg-neutral-300 rounded-md"></div>
                <div className="h-8 w-24 bg-neutral-300 rounded-md"></div>
                <div className="h-8 w-16 bg-neutral-300 rounded-md"></div>
                <div className="h-8 w-24 bg-neutral-300 rounded-md"></div>
              </div>
            </motion.div>
          </div>

          {/* Hero image/illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-30 animate-pulse-slow"></div>
              <div className="card-glass p-6 relative">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-accent-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                  <div className="text-sm text-neutral-500 ml-2">Synaptic AI Terminal</div>
                </div>
                <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-neutral-300 mb-2">// Code review in progress</p>
                  <p className="text-green-400">&gt; Analyzing code structure...</p>
                  <p className="text-green-400">&gt; Checking for best practices...</p>
                  <p className="text-green-400">&gt; Identifying optimizations...</p>
                  <p className="text-primary-400">&gt; Report: 3 improvements found</p>
                  <ul className="text-neutral-300 pl-4 mt-2 space-y-1">
                    <li>• Consider using async/await pattern</li>
                    <li>• Optimize state updates</li>
                    <li>• Add proper error handling</li>
                  </ul>
                  <p className="text-green-400 mt-3">&gt; Generating detailed report...</p>
                  <p className="text-neutral-300 mt-2 border-l-2 border-secondary-500 pl-2 animate-pulse">Ready to implement fixes automatically</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;