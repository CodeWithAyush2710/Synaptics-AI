import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "Synaptic AI's code review tool has been a game-changer for our team. We've seen a 40% reduction in bugs since implementing it in our workflow.",
    author: "Alex Rivera",
    role: "Lead Developer, TechCorp",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 2,
    content: "The cold email generator has dramatically improved our outreach success. We're seeing reply rates increase from 3% to 15% since switching to Synaptic AI.",
    author: "Sarah Johnson",
    role: "Sales Director, GrowthLabs",
    avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 3,
    content: "I was skeptical about AI tools, but Synaptic AI won me over. The code reviewer feels like having an expert developer looking over your shoulder.",
    author: "Michael Chen",
    role: "Senior Engineer, DataFlow",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 4,
    content: "We've integrated Synaptic AI across our entire development team. The ROI has been incredible - better code quality and faster reviews.",
    author: "Jessica Miller",
    role: "CTO, Innovate Inc",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 5,
    content: "The cold email generator has helped us land three major clients in just the first month. It's like having an expert copywriter on staff.",
    author: "David Wilson",
    role: "Business Development, StartUp Solutions",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-20 bg-primary-900 text-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="mb-4">What Our Users Say</h2>
          <p className="text-lg text-primary-100 opacity-80">
            Hear from developers and businesses who have transformed their workflows with Synaptic AI.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <blockquote className="text-center">
                    <div className="relative text-2xl font-medium mb-8 px-8">
                      <svg className="absolute top-0 left-0 w-8 h-8 text-primary-600 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative z-10">{testimonial.content}</p>
                      <svg className="absolute bottom-0 right-0 w-8 h-8 text-primary-600 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M22.648 28C27.544 24.544 31 18.88 31 12.64c0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48 3.264-3.456 7.104-6.528 9.024L6.136 28z" />
                      </svg>
                    </div>
                    <footer className="flex items-center justify-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-4" 
                      />
                      <div className="text-left">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-primary-200">{testimonial.role}</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-primary-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-primary-800 hover:bg-primary-700 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-primary-800 hover:bg-primary-700 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;