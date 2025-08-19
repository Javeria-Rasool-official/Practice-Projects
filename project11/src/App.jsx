import React from 'react'
import Cal from './components/Cal'

const App = () => {
  return (
    <div className='bg-grey-200 h-screen flex flex-col justify-center items-center font-space-mono'>
      <p className='uppercase text-green-900 font-semibold tracking-widest'>splitter</p>
      <Cal/>
    </div>
  )
}

export default App
