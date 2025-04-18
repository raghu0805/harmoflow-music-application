import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const Musicbar = () => {

  let {data_notes,userinformation}=useContext(AuthContext);
  let time=new Date().getHours();

  let greeting=''
  if(time <12){
    greeting="Good Morning Raghu"
  }
  else if(time<15){
    greeting="Good Afternoon Raghu"
  }
  else if(time<18){
    greeting="Good Evening Raghu" 
  }
  else{
    greeting="Good Night Raghu!"
  }


  return (
   
      <div className='w-[63%] bg-gray-900/300 rounded-[6px] text-2xl text-white font-semibold'>{greeting} </div>
  )
}

export default Musicbar