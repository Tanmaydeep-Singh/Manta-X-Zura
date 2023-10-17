import React from 'react'
import QuestionBlock from './questionBlock'
import OptionSection from './optionSection'
import { motion } from 'framer-motion'

function QuizBoard() {
    return (
        <motion.div className='flex flex-col justify-around  w-[96vw]  md:w-[80vw] lg:w-[60vw] bg-slate-100 md:h-[70vh]  rounded-xl text-black p-10 '
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 , type: "spring", stiffness: 400, damping: 20 }}
        >
                <QuestionBlock />
                <OptionSection />
        </motion.div>
    )
}

export default QuizBoard