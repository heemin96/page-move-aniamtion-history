import React from 'react'
import { motion } from 'framer-motion'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
export default function Page3() {
    const navigate= useNavigate();
    
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
           <h1>Page3</h1>
           <h1>Page3</h1>
           <h1>Page3</h1>
           <h1>Page3</h1>
           <h1>Page3</h1>
           <h1>Page3</h1>
           <button onClick={(()=> navigate('/'))} style={{width:'400px' ,height:'400px'}}>navigate('/')</button>
         </motion.div>
      </div>
  )
}
