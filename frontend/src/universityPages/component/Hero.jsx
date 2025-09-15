import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative pt-25 w-full mt-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover h-120 bg-center"
        style={{
          backgroundImage:
            "url('https://www.hud.ac.uk/media/assets/photo/buildings/University-Square-Student-Central-web-banner.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative  flex flex-col justify-center items-center text-center h-full text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
        >
          University of Superlative
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md shadow-black font-bold"
        >
          Empowering students with knowledge, innovation, and a global vision.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Explore More
          </a>
          <div className="mt-6 bg-[#ffff00] text-black font-semibold pb-5 pt-3 px-6 rounded-full shadow-lg">
            <p>Build Your Future With Us</p>
            <p className="font-bold">B-Tech | MBA | MCA | MA | MSc Maths MCOM | BCA | BBA | BA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
