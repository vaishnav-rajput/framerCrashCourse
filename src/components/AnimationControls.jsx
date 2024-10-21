import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const animationVariants={
    initial: {opacity:0},
    visible: {opacity:1},
    flip: {rotate: "360deg", opacity:1}
}

const AnimationControls = () => {

    const flipControls = useAnimationControls()

    const handleClick = () =>{
        flipControls.start("flip")
    }
  return (
    <div  className='flex flex-col justify-center items-center h-[100vh] gap-3'>
        <motion.div
            variants={animationVariants}
            initial="initial"
            animate={flipControls}
            transition={{
                duration:1,
                ease: "easeOut"
            }}
            className='bg-black w-[200px] h-[200px]'
        >
        </motion.div>
        <motion.button variants={animationVariants} onClick={handleClick} className='text-white bg-blue-500 p-5 rounded-md'>Flip it</motion.button>
    </div>
  )
}

export default AnimationControls