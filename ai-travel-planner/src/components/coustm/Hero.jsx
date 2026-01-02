import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="pt-22 min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-3xl bg-white/60 backdrop-blur-xl shadow-xl rounded-2xl p-12 border border-white/40">

        <h3 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-snug">
          Discover ,<span className="text-orange-700">Your Next Adventure Effortlessly</span>
        </h3>

        <p className="mt-6 text-xl md:text-2xl font-medium text-gray-700">
          Your smart companion for finding perfect destinations, hotels, and experiences in just a few clicks.
        </p>

        <Link to={"/creat-trip"}>
          <button className="mt-8 px-10 py-4 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition duration-300">
            Find Your Place
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Hero;
