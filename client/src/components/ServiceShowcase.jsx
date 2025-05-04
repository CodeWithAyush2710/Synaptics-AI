import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, linkTo, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`card overflow-visible ${index === 0 ? 'lg:mt-12' : 'lg:mt-0'}`}
    >
      <div className={`h-24 flex items-center justify-center ${color}`}>
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-6">{description}</p>
        <Link 
          to={linkTo} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const ServiceShowcase = () => {
  const services = [
    {
      title: "Code Reviewer",
      description: "Our intelligent code review system analyzes your code for bugs, security vulnerabilities, and performance issues. Get detailed reports with actionable recommendations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      linkTo: "/services/code-reviewer",
      color: "bg-primary-500",
    },
    {
      title: "Cold Email Generator",
      description: "Create personalized, effective cold emails that convert. Our AI crafts tailored messages based on recipient profiles and your objectives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      linkTo: "/services/email-generator",
      color: "bg-secondary-500",
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="mb-4 text-neutral-900">Our Services</h2>
          <p className="text-lg text-neutral-600">
            Explore our specialized AI tools designed to enhance your productivity and results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              linkTo={service.linkTo}
              color={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;