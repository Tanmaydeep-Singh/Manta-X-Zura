import React, { useState } from 'react'
import QuizBoard from './QuizBoard'
import { motion } from 'framer-motion';

function Quiz() {
    const [quizState, setQuizState] = useState(false);

    const startQuiz = () => {
      setQuizState(true);
    };
  
    return (
      <div>
        {quizState ? (
          <QuizBoard />
        ) : (
          <div>
            <h1>QUIZ</h1>
            <motion.button
              type='button'
              className='btn btn-primary'
              onClick={startQuiz}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Start Quiz
            </motion.button>
          </div>
        )}
      </div>
    );
}

export default Quiz