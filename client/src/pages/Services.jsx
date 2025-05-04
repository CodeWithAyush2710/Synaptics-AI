import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ColdEmailPage from './ColdEmailPage';
import CodeReviewerPage from './CodeReviewerPage';

const Services = () => {
  const { service } = useParams();
  
  let content;
  
  if (service === 'code-reviewer') {
    content = <CodeReviewerPage />;
  } else if (service === 'email-generator') {
    content = <ColdEmailPage />;
  } else {
    content = (
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore our specialized AI tools designed to enhance your productivity and results.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return <main className="pt-20">{content}</main>;
};

export default Services;