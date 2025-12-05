import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 px-6 text-center">
      
      {/* Main Heading with Gradient */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 leading-snug max-w-4xl">
        Discover Your Next Adventure Effortlessly with AI Travel Planner
      </h1>

      {/* Excited Subtext */}
      <p className="mt-6 text-xl md:text-2xl font-semibold text-gray-800 animate-pulse max-w-2xl">
        Your smart companion for finding perfect destinations, hotels, and experiences in just a few clicks! ✈️
      </p>

      {/* Optional Call-to-Action Button */}
      <button className="mt-8 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-300">
        Find Your Place
      </button>

    </div>
  );
}

export default Hero;
