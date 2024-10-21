import React, { useState } from 'react'
import Links from './Links'
import ToggleButton from './ToggleButton'
import { motion } from 'framer-motion'

const Sidebar = () => {
  const [open, setOpen]  = useState(false)

  const variants = {
    open:{
      clipPath: "circle(1200px at 50px 50px )",
      transition: {
        type: "spring",
        stiffness: 20
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }


  return (
    <motion.div animate={open ? "open" : "closed"} className=' flex flex-col items-center bg-white text-black '>

        <motion.div variants={variants} className=" z-999 fixed bottom-0 top-0 left-0 w-[300px] bg-white ">
        <Links/>
        </motion.div>
        <ToggleButton className="z-999" setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar 