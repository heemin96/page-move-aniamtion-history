import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
export default function Page2() {
    const navigate = useNavigate();
    const location = useLocation();

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
        <h1>Page2</h1>
        <h1>Page2</h1>
        <h1>Page2</h1>
        <h1>Page2</h1>
        <h1>Page2</h1>
        <h1>Page2</h1>
        <button onClick={(()=> navigate('/page3'))} style={{width:'400px' ,height:'400px'}}>navigate('/page3')</button>
      </motion.div>
      </div>
  )
}
