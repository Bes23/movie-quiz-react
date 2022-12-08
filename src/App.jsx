import './App.css'
import { Quiz, Intro } from './components'

function App() {
  return (
    <div className='w-full h-screen grid place-content-center bg-grey font-primary overflow-hidden'>
      <Intro />
      <Quiz />
    </div>
  )
}

export default App
