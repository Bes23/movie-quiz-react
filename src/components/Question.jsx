const Question = ({ question }) => {
  return (
    <div className='my-5 sm:h-[200px]'>
      <img src={question} alt='movie scene' className='w-full h-full' />
    </div>
  )
}

export default Question
