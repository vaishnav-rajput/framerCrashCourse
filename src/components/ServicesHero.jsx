import React, { useEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useTransform, useScroll } from 'framer-motion';
import './ServicesHero.css';

const ServicesHero = () => {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setElementTop(ref.current.getBoundingClientRect().top);
      setClientHeight(window.innerHeight);
    }
  }, [ref]);

  const topLine = useTransform(scrollYProgress, [elementTop - clientHeight, elementTop], [0, 1]);
  const bottomLine = useTransform(scrollYProgress, [elementTop, elementTop + clientHeight], [0, 1]);

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div ref={ref} className="relative w-full max-w-5xl mx-auto p-4">
        {/* Center Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="./hub.png" alt="Center" className="w-48 h-48 object-cover rounded-full" />
        </div>
        {/* Surrounding Images */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col space-y-4">
            <motion.div
              className="h-24 w-24 bg-gray-300"
              style={{ scale: topLine }}
            >
              <img src="./computer.png" alt="Image 1" className="h-full w-full object-cover rounded-md" />
            </motion.div>
            <motion.div
              className="h-24 w-24 bg-gray-300"
              style={{ scale: topLine }}
            >
              <img src="./computer.png" alt="Image 2" className="h-full w-full object-cover rounded-md" />
            </motion.div>
            <motion.div
              className="h-24 w-24 bg-gray-300"
              style={{ scale: bottomLine }}
            >
              <img src="./computer.png" alt="Image 3" className="h-full w-full object-cover rounded-md" />
            </motion.div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1 flex flex-col space-y-4">
            <motion.div
              className="h-24 w-24 bg-gray-300"
              style={{ scale: topLine }}
            >
              <img src="./computer.png" alt="Image 4" className="h-full w-full object-cover rounded-md" />
            </motion.div>
            <motion.div
              className="h-24 w-24 bg-gray-300"
              style={{ scale: topLine }}
            >
              <img src="./computer.png" alt="Image 5" className="h-full w-full object-cover rounded-md" />
            </motion.div>
            <motion.div
              className="h-24 w-24 bg-gray-300"
              style={{ scale: bottomLine }}
            >
              <img src="./computer.png" alt="Image 6" className="h-full w-full object-cover rounded-md" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHero;
