import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUserCheck, FaLightbulb, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}

      <Navbar />

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center py-20">
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-gray-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empower Your Learning Journey
        </motion.h1>
        <p className="text-lg text-gray-400 max-w-xl">
          Discover interactive courses, track your progress, and connect with
          mentors to achieve your goals.
        </p>
        <Link to="/signup">
          <motion.button
            className="mt-6 bg-blue-500 px-8 py-3 text-lg rounded-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Sign Up Now
          </motion.button>
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl text-center font-bold text-gray-300 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <FaRocket />,
              title: "Fast Learning",
              text: "Interactive courses to speed up learning.",
            },
            {
              icon: <FaUserCheck />,
              title: "Expert Mentors",
              text: "Get guidance from experienced mentors.",
            },
            {
              icon: <FaLightbulb />,
              title: "Smart Learning",
              text: "AI-powered insights for better education.",
            },
            {
              icon: <FaLock />,
              title: "Secure Platform",
              text: "Your data and progress are safe with us.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-400 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-400">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold text-gray-300 mb-6">About Us</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          SeeCodes is an innovative platform designed to enhance your learning
          experience. Join thousands of students in gaining skills, knowledge,
          and mentorship to excel in your career.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-300">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Sign up now and explore our interactive courses.
        </p>
        <Link to="/signup">
          <motion.button
            className="mt-6 bg-blue-500 px-8 py-3 text-lg rounded-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Sign Up
          </motion.button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 text-center text-gray-400">
        © 2025 SeeCodes. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
