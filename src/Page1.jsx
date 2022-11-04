import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function Page1() {

    const navigate = useNavigate();


    const pageVariants = {
      initial: {
        opacity: 0,
      },
      in: {
        opacity: 1,
      },
      out: {
        opacity: 0,
      },
    }
  return (
    <div style={{textAlign: 'center'}}>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
           <h1>Page1</h1>
           <h1>Page1</h1>
           <h1>Page1</h1>
           <h1>Page1</h1>
           <h1>Page1</h1>
           <h1>Page1</h1>
           <button onClick={(()=> navigate('/page2'))} style={{width:'400px' ,height:'400px'}}>navigate('/page2')</button>
         </motion.div>
      </div>

  )
}
