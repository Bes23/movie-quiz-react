import React from 'react'
import { useEffect } from 'react'
import { Question, Answer, ResultContainer, Button } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextQuestion } from '../store/slices/quizSlice'
import { fetchQuestions } from '../store/slices/quizSlice'

const Quiz = () => {
  const dispatch = useDispatch()
  const { questions, currentQuestionIndex, currentAnswer, open, status } =
    useSelector((state) => state.quiz)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuestions())
    }
  }, [status, dispatch])

  const currentQuestion = questions[currentQuestionIndex]

  if(status === 'loading') {
    return <span className="loader"></span>
  }

  if (status === 'succeeded') {
    return (
      <div
        className={`w-[90vw] sm:w-[550px] p-4 sm:p-8 translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] opacity-0 pointer-events-none shadow-md rounded-lg bg-[#2c2d33] ${
          open &&
          'opacity-100 transition-opacity duration-300 ease-in pointer-events-auto delay-200'
        }`}
      >
        {currentQuestion ? (
          <>
            <h1 className='sm:text-[2rem] text-white text-center capitalize'>
              movie{' '}
              <span className='text-gold font-bold'>
                {currentQuestionIndex + 1}
              </span>
              /{questions.length}
            </h1>
            <Question {...currentQuestion} />
            <div className='grid grid-cols-2 gap-5'>
              {currentQuestion.answers.map((answer, index) => (
                <Answer
                  key={index}
                  answer={answer}
                  currentQuestion={currentQuestion}
                />
              ))}
            </div>
            <div className='text-center mt-5 sm:my-5'>
              <Button
                onClick={() => dispatch(handleNextQuestion())}
                disabled={!currentAnswer}
              >
                {currentQuestionIndex === questions.length - 1
                  ? 'finish quiz'
                  : 'next question'}
              </Button>
            </div>
          </>
        ) : (
          <ResultContainer questions={questions} />
        )}
      </div>
    )
  } 

  if(status === 'failed') {
    return <h1>wqeq</h1>
  }
  
}

export default Quiz
