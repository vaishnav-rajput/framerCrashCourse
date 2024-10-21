import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Line = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Width of the line increases from 0% to 100% as you scroll
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-[400px] bg-gray-100">
        service
    </div>
  );
}

export default Line;
