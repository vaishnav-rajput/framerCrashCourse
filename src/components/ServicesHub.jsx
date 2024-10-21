import React, {useRef} from "react";
import {motion, useTransform, useScroll} from 'framer-motion'
const ServicesHub = () => {

    const targetRef = useRef(null)

      const {scrollYProgress} = useScroll({target: targetRef,
        offset: ["0 0.5", "0.4 0" ]
      })
      const custwidth = useTransform(scrollYProgress, 
        [0, 0.2],
        ['0px', '600px'],
        
      )
      const rotate = useTransform(
        scrollYProgress,
        [0, 0.1],
        ["0deg", "-20deg"]
      )
    return (
        <div ref={targetRef} className="relative  h-[700px] select-none w-full bg-gray-100">
        {/* Center Image */}
        <motion.div className="md-hidden" initial={{width: 0}} animate={{width: '480px'}} transition={{duration: 1}} style={{ position: 'absolute',

        height: '2px',
        backgroundColor: 'white',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -50%) rotate(-25deg)',
        transformOrigin: 'left center'}}></motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="./hub.png" alt="Center" className="w-48 h-48 object-cover rounded-full" />
          
        </div>
        {/* Surrounding Images */}
        {/* Top-left Corner */}
        <div className="absolute top-1 left-3 m-4">
          <img src="./computer.png" alt="Top Left" className="w-40 h-40 object-cover rounded-md" />
        </div>
        {/* Left-middle */}
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 m-4">
          <img src="./computer.png" alt="Left Middle" className="w-40 h-40 object-cover rounded-md" />
        </div>
        {/* Bottom-left Corner */}
        <div className="absolute bottom-0 left-3 m-4">
          <img src="./computer.png" alt="Bottom Left" className="w-40 h-40 object-cover rounded-md" />
        </div>
        {/* Top-right Corner */}
        <div className="absolute top-0 right-[200px] m-4">
          <img src="./computer.png" alt="Top Right" className="w-40 h-40 object-cover rounded-md" />
        </div>
        {/* Right-middle */}
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 m-4">
          <img src="./computer.png" alt="Right Middle" className="w-40 h-40 object-cover rounded-md" />
        </div>
        {/* Bottom-right Corner */}
        <div className="absolute bottom-0 right-3 m-4">
          <img src="./computer.png" alt="Bottom Right" className="w-40 h-40 object-cover rounded-md" />
        </div>
      </div>
    
    )
}
export default ServicesHub