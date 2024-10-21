import React from 'react'
import heroImg from "../../../assets/heroImg.png"
import { m, motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,

    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 1,
        staggerChildren: 0.1
    }
}
}

const sliderVariants = {
    initial : {
        x: 0
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
        }
    }
}

const Hero = () => {
  return (
    <div className='hero relative h-calc-100vh-100px bg-hero-gradient'>
        <div className="wrapper max-w-[1366px] h-[100%] m-auto ">
            <motion.div initial="initial" animate="animate" variants={textVariants} className="textContainer h-[100%] flex flex-col justify-center gap-[20px]">
                <motion.h2 initial="initial" animate="animate" variants={textVariants} className=' font-bold text-2xl text-purple tracking-extra-wide font-inter'>Welcome to AeonTech</motion.h2>
                <motion.h1 initial="initial" animate="animate" variants={textVariants} className='text-5xl font-poppins'>Your Digital Partner</motion.h1>
            </motion.div>
        </div>
        {/* sliding text */}
        <motion.div initial="initial" animate="animate" variants={sliderVariants} className='absolute text-[50vh] w-[50%] font-extralight text-richblack-700 opacity-[0.3] -bottom-[143px] whitespace-nowrap '>
            Writer Content Creator Influencer
        </motion.div>
        <div className='imageContainer absolute top-0 right-0'>
            <img className="h-[600px]" src={heroImg}/>
        </div>
    </div>
  )
}

export default Hero