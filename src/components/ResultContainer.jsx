import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleRestart } from '../store/slices/quizSlice'
import Button from './Button'

const ResultContainer = ({ questions }) => {
  const { score } = useSelector((state) => state.quiz)
  const dispatch = useDispatch()

  return (
    <div className='text-center'>
      <h2 className='text-[1.5rem] text-gold font-bold my-3 capitalize'>
        you've completed quiz
      </h2>
      <h2 className='text-[2rem] text-white my-3 capitalize'>
        you've got <span className='text-gold font-bold'>{score}</span> out of{' '}
        {questions.length} right
      </h2>
      <Button onClick={() => dispatch(handleRestart())}>restart quiz</Button>
    </div>
  )
}

export default ResultContainer
