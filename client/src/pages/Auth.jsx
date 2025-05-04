import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would handle form submission with authentication logic
    console.log({ email, password, name: isLogin ? undefined : name });
  };
  
  return (
    <main className="min-h-screen pt-20 bg-neutral-50">
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {isLogin ? 'Welcome Back' : 'Create Your Account'}
            </h1>
            <p className="text-neutral-600">
              {isLogin ? 'Sign in to access your account' : 'Get started with Synaptic AI'}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="name@company.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder={isLogin ? "Enter your password" : "Create a password"}
                  required
                />
                {isLogin && (
                  <div className="text-right mt-1">
                    <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                      Forgot password?
                    </Link>
                  </div>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary btn-lg"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-neutral-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                {' '}
                <Link 
                  to={isLogin ? "/signup" : "/login"} 
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Auth;