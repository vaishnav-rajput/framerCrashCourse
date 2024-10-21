import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    visible:{opacity:1, x: 500, transition:{type:"spring", stiffness: 100, damping: 50}},
    // the lesser the stiffness the slower the transition
    hidden: {opacity: 0}
}

const Test = () => {

    

  return (
    <div className='course h-[100vh] flex justify-center items-center'>
        <motion.ul>

        </motion.ul>
    </div>
  )
}

export default Test