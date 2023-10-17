import { motion } from 'framer-motion';
import React from 'react'

function OptionButton( props: { option: string, value:string}) {
    const {option, value } = props;
    console.log("key",option)
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    transition={ { type: "spring", stiffness: 400, damping: 10 } }
    className='btn btn-primary bg-[#00ccff] hover:bg-[#00ccff] text-left w-[90%] font-semibold md:text-xl flex justify-start  '> {option} : {value} </motion.div>
  )
}


export default OptionButton