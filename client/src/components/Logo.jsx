import React from 'react';

const Logo = ({ size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="url(#paint0_radial)" />
      <path 
        d="M18 22C18 20.8954 18.8954 20 20 20H40C41.1046 20 42 20.8954 42 22V38C42 39.1046 41.1046 40 40 40H20C18.8954 40 18 39.1046 18 38V22Z" 
        fill="white" 
        fillOpacity="0.9"
      />
      <path 
        d="M25 27C25 25.8954 25.8954 25 27 25H33C34.1046 25 35 25.8954 35 27V33C35 34.1046 34.1046 35 33 35H27C25.8954 35 25 34.1046 25 33V27Z" 
        fill="#3B40E3"
      />
      <path 
        d="M30 42C30 40.8954 30.8954 40 32 40H40C41.1046 40 42 40.8954 42 42V42C42 43.1046 41.1046 44 40 44H32C30.8954 44 30 43.1046 30 42V42Z" 
        fill="#0CB6D8"
      />
      <path 
        d="M18 42C18 40.8954 18.8954 40 20 40H28C29.1046 40 30 40.8954 30 42V42C30 43.1046 29.1046 44 28 44H20C18.8954 44 18 43.1046 18 42V42Z" 
        fill="#FF8926"
      />
      <defs>
        <radialGradient 
          id="paint0_radial" 
          cx="0" 
          cy="0" 
          r="1" 
          gradientUnits="userSpaceOnUse" 
          gradientTransform="translate(30 30) rotate(90) scale(30)"
        >
          <stop offset="0.21875" stopColor="#4F5FF2" stopOpacity="0.08" />
          <stop offset="1" stopColor="#4F5FF2" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Logo;