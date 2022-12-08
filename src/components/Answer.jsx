import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAnswer } from '../store/slices/quizSlice'

const Answer = ({ answer, currentQuestion }) => {
  const dispatch = useDispatch()
  const { currentAnswer } = useSelector((state) => state.quiz)

  const correctAnswer = currentQuestion.answers.find(
    (answer) => answer.isAnswerCorrect
  )

  const isCorrectAnswer = currentAnswer && answer === correctAnswer
  const isWrongAnswer = currentAnswer === answer && answer !== correctAnswer

  return (
    <button
      className={`h-[65px] w-full px-2 py-2 sm:text-[1.3rem] text-gold capitalize font-bold bg-white rounded-md ${
        currentAnswer && 'pointer-events-none'
      } ${isCorrectAnswer && 'bg-green'} ${isWrongAnswer && 'bg-red'}`}
      onClick={() => dispatch(handleAnswer(answer))}
    >
      {answer.answerText}
    </button>
  )
}

export default Answer
