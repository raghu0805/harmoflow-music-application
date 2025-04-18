import React, { useEffect, useState } from 'react'
import { TiTick } from "react-icons/ti";
const PopupCard = () => {

      
    let [userMood,setUserMood]=useState({
        happy:false,
        hope:false,
        productive:false,
        relaxed:false,
        sleep:false,
        study:false,
        energetic:false,
        driving:false,
        party:false,
        romatic:false,
        sad:false,
        energy:false

    })
    let handleClick=(mood)=>{
      
        console.log(mood)
        let currentvalue=userMood[mood]
        console.log(userMood[mood])
        setUserMood({...userMood,[mood]:!currentvalue})
        console.log(userMood)

    }
  

  return (
 

    
    <section className="h-[300px] w-[330px] bg-white text-black rounded-3xl p-2">
        <h1 className='py-2 font-semibold px-4'>Current Mood</h1>
        <article className='flex flex-wrap p-2 gap-x-2'>
  {/* Positive / Uplifting */}
  
  <span onClick={() => handleClick("happy")} className='border flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md relative'>
    <div>😊</div>
    <h1>Happy</h1>
    <div className="absolute right-0 h-[20px] bg-black rounded-full"><TiTick className=" text-xl text-white"/></div> 
    
  </span>
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow rounded-md'>
    <div>🌅</div>
    <h1>Hope</h1>
  </span>
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow rounded-md'>
    <div>💼</div>
    <h1>Productive</h1>
  </span>

  {/* Calm / Chill */}
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>😌</div>
    <h1>Relaxed</h1>
  </span>
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>💤</div>
    <h1>Sleep</h1>
  </span>
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>📚</div>
    <h1>Study</h1>
  </span>

  {/* Energetic / Active */}
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>🏋️</div>
    <h1>Energetic</h1>
  </span>
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>🚗</div>
    <h1>Driving</h1>
  </span>
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>🎉</div>
    <h1>Party</h1>
  </span>

  {/* Emotional */}
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>❤️</div>
    <h1>Romantic</h1>
  </span>
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>😢</div>
    <h1>Sad</h1>
  </span>
  <span className='flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
    <div>😠</div>
    <h1>Angry</h1>
  </span>

</article>


        <button  className="h-[30px] w-[145px] bg-black text-white rounded-md ml-20 mt-2 duration-150 hover:bg-gray-800 ">Continue</button>
    </section>
  )
}

export default PopupCard