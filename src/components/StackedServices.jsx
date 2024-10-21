import React from 'react';
import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';

const StackingCards = () => {
  const { scrollYProgress } = useScroll();

  // Define animations for each card
  const card1Animation = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const card2Animation = useTransform(scrollYProgress, [0.5, 1], [0, 100]);
  const card3Animation = useTransform(scrollYProgress, [1, 1.5], [0, 100]);
  const card4Animation = useTransform(scrollYProgress, [1.5, 2], [0, 100]);

  return (
    <div className="relative flex flex-col items-center" style={{ height: '500vh' }}>
      <motion.div
        className="absolute w-full h-[300px] bg-white border border-gray-200 shadow-md rounded-lg p-4 flex items-center"
        style={{ y: card1Animation, zIndex: 4 }}
      >
        <h2 className="text-xl font-bold mb-2">Card 1</h2>
        <p>Content for Card 1</p>
      </motion.div>

      <motion.div
        className="absolute w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 flex items-center"
        style={{ y: card2Animation, zIndex: 3 }}
      >
        <h2 className="text-xl font-bold mb-2">Card 2</h2>
        <p>Content for Card 2</p>
      </motion.div>

      <motion.div
        className="absolute w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 flex items-center"
        style={{ y: card3Animation, zIndex: 2 }}
      >
        <h2 className="text-xl font-bold mb-2">Card 3</h2>
        <p>Content for Card 3</p>
      </motion.div>

      <motion.div
        className="absolute w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 flex items-center"
        style={{ y: card4Animation, zIndex: 1 }}
      >
        <h2 className="text-xl font-bold mb-2">Card 4</h2>
        <p>Content for Card 4</p>
      </motion.div>
    </div>
  );
};

export default StackingCards;
