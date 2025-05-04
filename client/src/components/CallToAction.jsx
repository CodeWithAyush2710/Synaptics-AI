import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-700 to-secondary-700 p-10 md:p-16"
        >
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-[10%] w-64 h-64 rounded-full bg-white opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-[10%] w-64 h-64 rounded-full bg-white opacity-20 blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to transform your workflow?</h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of developers and businesses who are saving time and improving results with Synaptic AI.
              Start your free trial today and experience the power of AI-driven productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signup" 
                className="btn-lg bg-white text-primary-700 hover:bg-neutral-100 focus-visible:ring-white/50"
              >
                Get Started Free
              </Link>
              <Link 
                to="/documentation" 
                className="btn-lg bg-primary-800/50 text-white hover:bg-primary-800/70 focus-visible:ring-white/50"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;