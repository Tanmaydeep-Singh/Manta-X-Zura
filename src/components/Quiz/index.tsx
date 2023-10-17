import React, { useState } from 'react'
import QuizBoard from './QuizBoard'

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
            <button
              type='button'
              className='btn btn-primary m-2'
              onClick={startQuiz}
            >
              Start Quiz
            </button>
          </div>
        )}
      </div>
    );
}

export default Quiz