import React from 'react';
import heroImage from '../assets/header.png';

function HeroSection() {
  return (
    // <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
    //   <div className="w-full md:w-1/2 space-y-6">
    //     <h1 className="text-4xl md:text-6xl font-bold leading-tight">
    //       Welcome to Outstock Multi-Purposes Prestashop Theme!
    //     </h1>
    //     <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 transition-colors">
    //       VIEW DEMO
    //     </button>
    //   </div>
    //   <div className="w-1/4 md:w-1/2 mt-8 md:mt-0">
    //     <img
    //       src={heroImage}
    //       alt="Fashion model wearing brown sweater"
    //       className="w-full object-cover"
    //     />
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Welcome to Outstock Multi-Purposes Prestashop Theme!
      </h1>
      <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 transition-colors">
        VIEW DEMO
      </button>
    </div>
    <div className="w-1/6  md:w-1/2 mt-8 md:mt-0">
      <img
          src={heroImage}
        alt="Fashion model wearing brown sweater"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  );
}

export default HeroSection;

