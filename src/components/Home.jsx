import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] gap-3'>
        <motion.div className='w-[150px] h-[150px] bg-black'>
            
        </motion.div>
        <MotionConfig
          transition={
            {duration: 0.225,
              ease:"easeInOut"
            }
          }
        >
            <motion.button className='px-5 py-5  bg-blue-400 text-black  select-none '
              whileHover={
                {scale:1.05}
              }
              whileTap={{scale:0.95, rotate:30} }
       
            >
                Click Me
            </motion.button>
            <motion.button className='px-5 py-5  bg-blue-400 text-black  select-none '
              whileHover={
                {scale:1.05}
              }
              whileTap={{scale:0.85, rotate:-30, backgroundColor: 'black'} }
            
            >
                Click Me
            </motion.button>
        </MotionConfig>
       
    </div>  
  )
}

export default Home