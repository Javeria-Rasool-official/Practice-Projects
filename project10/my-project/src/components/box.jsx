import React from 'react'
import images from '../images/index'

const Box = ({pic,hrs,last,name,color}) => {
  return (
    
     <div className={`outerbox  ${color} relative z-0 flex flex-col rounded-3xl  w-[400px] md:w-[300px] h-[200px] md:h-[100px] `}>
     
           
             <figure className='place-self-end z-0'>
              <img src={pic} alt="" />
             </figure>
      <div className="innerbox bg-navy-900 hover:bg-purple-500 cursor-pointer flex justify-start pl-8 z-10 absolute gap-6 items-center rounded-3xl top-14  h-[150px] w-[400px] md:w-[300px]">
               
               <div className="content text-white grid grid-cols-2 gap-x-[60px] md:gap-x-0 mr-2">
                 <p className='font-semibold'>{name}</p>
                 <img src={images.dot} alt="" className='pl-[100px]'/>
                 <h1 className='text-white font-thin text-4xl'>{hrs}hrs</h1>
                 <p className='text-navy-200'>Last Week - {last}hrs</p>
               </div>
     
             </div>

           </div>
           
  )
}

export default Box
