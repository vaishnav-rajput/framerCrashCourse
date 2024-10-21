import React from 'react'
import { motion } from 'framer-motion';

const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }
}

const Links = () => {

    const items = [
        "Home",
        "About Us",
        "Products",
        "Services",
        "Solutions",
        "Career",
        "Contact"
    ]
  return (
    <motion.div variants={variants} className=' absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-[20px] text-lg'>
        {
            items.map((item, index) => (
                <motion.a 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                href={`/${item}`} key={index} variants={itemVariants}>{item} </motion.a>
            ))
        }
    </motion.div>
  )
}

export default Links