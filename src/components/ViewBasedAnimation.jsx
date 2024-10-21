import React, { useEffect, useRef } from 'react'
import {motion, useInView} from "framer-motion"

const ViewBasedAnimation = () => {

    const ref = useRef(null)

    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        
    }, [isInView])

    //if you want to trigger multiple animation at the same time use whileInView

 
  return (
    <>
        <div className='h-[150vh] '/>
        <motion.div className='h-[100vh] bg-black' 
            initial={{opacity:0}}
            style={{transition: "1s backgroundColor" }}
            whileInView={{opacity:1, backgroundColor: "red"}}
            transition={{duration: 1, ease: "easeIn"}}
        >

        </motion.div>
        <motion.div className='h-[100vh] bg-black' 
            // initial={{opacity:0}}
            ref={ref}
            style={{background: isInView ? "blue" : "red"}}
            // whileInView={{opacity:1, backgroundColor: "red"}}
            transition={{duration: 1    , ease: "easeIn"}}
        >

        </motion.div>
    </>
  )
}

export default ViewBasedAnimation