import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = () => {
  return (
    <div className="relative w-80 h-96 overflow-hidden rounded-lg shadow-lg">
      <motion.div
        className="absolute inset-0 flex flex-col justify-end"
        initial={{ y: 0 }}
        whileHover={{ y: '-100%' }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <img
          src="https://via.placeholder.com/320x180"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="relative bg-white p-4">
          <h2 className="text-center text-xl font-bold mb-2 relative">
            <span className="absolute inset-0" style={{ background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0))', zIndex: -1 }}></span>
            Unified Communication Services
          </h2>
          <p className="text-center text-gray-700">
            Avoid capital investment and adopt alternatives for IT consumption by trusting our experts to help you plan, deploy, and manage your cloud solutions.
          </p>
        </div>
 
        <ul className=" bg-white space-y-2">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        </motion.div>


    </div>
  );
};

export default ServiceCard;

