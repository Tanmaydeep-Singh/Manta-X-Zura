import React from 'react'
import QuestionBlock from './questionBlock'
import OptionSection from './optionSection'

function QuizBoard() {
    return (
        <div className='flex flex-col justify-around  w-[96vw]  md:w-[80vw] lg:w-[60vw] bg-slate-100 md:h-[70vh]  rounded-xl text-black p-10 '>
                <QuestionBlock />
                <OptionSection />
        </div>
    )
}

export default QuizBoard