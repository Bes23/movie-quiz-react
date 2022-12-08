import React from 'react'

const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      className='px-4 py-2 sm:text-[1.3rem] text-white font-bold capitalize bg-gold rounded-md place-self-center'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
