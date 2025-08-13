import React from 'react'
import images from './images/index'
import Box from './components/box'
const App = () => {
  return (
    <div className="bg-navy-950 font-rubik min-h-screen p-8
      md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4">
      <div className="outerbox  md:h-[600px] md:w-[300px] md:row-span-2 bg-navy-900 rounded-3xl w-[400px] h-[200px] ">

        <div className="innerbox bg-purple-600 md:h-[400px] md:w-[300px] flex justify-start md:flex-col md:justify-center md:items-start pl-8 gap-6 items-center rounded-3xl  h-[130px]">
          <figure >
            <img src={images.user} alt="user-image" className='h-20 border-white rounded-full border-4' />
          </figure>
          <div className="content text-navy-200">
            <p className=''>Report for</p>
            <h1 className='text-white font-thin text-3xl'>Jeremy Robson</h1>
          </div>

        </div>
        <div className='flex justify-evenly md:flex-col md:items-start md:ml-5 md:gap-6 items-center mt-5 text-navy-200 text-lg'>
        <p className=' hover:text-white'>Daily</p>
        <p className=' hover:text-white'>Weekly</p>
        <p className=' hover:text-white'>Monthly</p>
        </div>
      </div>
      <Box name="Work" color="bg-orange-300" pic={images.work} hrs='32' last='36'/>
      <Box name="Play" color="bg-blue-300" pic={images.play} hrs='10' last='8'/>
      <Box name="Study" color="bg-pink-400" pic={images.study} hrs='4' last='7'/>
      <Box name="Exercise" color="bg-green-400" pic={images.exercise} hrs='4' last='5'/>
      <Box name="Social" color="bg-purple-700" pic={images.social} hrs='5' last='10'/>
      <Box name="Self Care" color="bg-yellow-300" pic={images.care} hrs='2' last='2'/>
    </div>
  )
}

export default App
