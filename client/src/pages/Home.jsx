import { Suspense } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ServiceShowcase from '../components/ServiceShowcase';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Features />
        <ServiceShowcase />
        <Testimonials />
        <CallToAction />
      </Suspense>
    </main>
  );
};

export default Home;