import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="flex items-center space-x-4 bg-gray-800 p-6 rounded-md shadow-lg hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-4xl text-blue-400">{icon}</span>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
