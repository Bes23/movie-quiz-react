import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startQuiz } from '../store/slices/quizSlice'
import Button from './Button'

const Intro = () => {
  const dispatch = useDispatch()
  const { open } = useSelector((state) => state.quiz)

  return (
    <div
      className={`shadow-md rounded-lg bg-[#2c2d33] p-7 grid place-content-center text-center ${
        open && 'opacity-0 transition-all duration-200'
      }`}
    >
      <h1 className='text-[2rem] text-white font-bold capitalize'>
        fan of movies?
      </h1>
      <p className='text-[1.5rem] text-gold capitalize my-5'>
        guess iconic movies from scenes
      </p>
      <Button onClick={() => dispatch(startQuiz())}>start quiz</Button>
    </div>
  )
}

export default Intro
