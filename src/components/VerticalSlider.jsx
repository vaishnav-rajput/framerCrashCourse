import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const images = [
  "./AMCs.png", 
  "./AMCs.png", 
  "./AMCs.png", 
  "./AMCs.png", 
  "./AMCs.png", 
  "./AMCs.png", 
  "./AMCs.png", 
  "./AMCs.png", 
  "./AMCs.png", 
  "./AMCs.png",
  "./AMCs.png"
];

const VerticalSlider = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -1000],
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    });
  }, [controls]);

  return (
    <div className="overflow-hidden w-[300px] h-[500px]">
      <motion.div 
        className="flex flex-col"
        animate={controls}
      >
        {images.concat(images).map((src, index) => (
          <div key={index} className="h-28 mb-2">
            <img src={src} alt={`Slide ${index}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};



export default VerticalSlider
