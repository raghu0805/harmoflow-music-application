import React, { useState } from 'react'
import { IoNotifications } from "react-icons/io5";
import { TbMoodSpark } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import PopupCard from './PopupCard';
import { __AUTH } from '../firebaseConfig/firebaseConfig';
import { TiTick } from 'react-icons/ti';


const Menu = () => {
  let [showPopup,setShowPopup]=useState(false)
  toast.success(showPopup)
 


  
  //to hide or show the signup //login buttons
  let accessToken = localStorage.getItem("User_Token_id");

  let [theme, setTheme] = useState("Dark");
  let ToggleTheme = () => {
    if (theme == "Dark") {
      setTheme("Light")
      toast.info(theme)
    }
    else {
      setTheme("Dark");
      toast.info(theme)
    }
  }
  let handleMoodSubmit=(e)=>{
    e.preventDefault();
    setShowPopup(false)
    console.log("hello world")
  }



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
          angry:false
  
      })
      //just destructuring for easy assessability da

      let {happy,hope,productive,relaxed,sleep,study,energetic,driving,party,romantic,sad,angry}=userMood;
      let handleSelectMood = (mood) => {
        let currentvalue = userMood[mood];
        setUserMood({ ...userMood, [mood]: !currentvalue });
        console.log(userMood[mood])
      };
  return (
    <main   className='h-full w-[50%] text-white/90 font-semibold'>
      <ul className='h-full w-full flex justify-around items-center'>
       {accessToken && <li className="flex items-center gap-1 cursor-pointer">Notification<IoNotifications className='text-[20px] ' /></li>} 

        <li onClick={ToggleTheme} className="flex items-center gap-1 cursor-pointer">{theme == "Dark" ? <>Light Theme <MdLightMode className='text-[20px] ' /></> : <>Dark Theme <MdDarkMode className='text-[20px] ' /></>} </li>

       {accessToken &&<li onClick={()=>{setShowPopup(true)}} className='relative cursor-pointer text-white '>
          <div >
            <span className=' border border-white flex items-center gap-1'>
              <h1 className="text-white">Mood</h1>
              <TbMoodSpark className='text-[20px]' />
            </span>



            {showPopup && (<><span onClick={(e) => e.stopPropagation()} className='absolute -right-30 top-10 z-10 bg-white text-black rounded shadow-lg'>
                <section className="h-[300px] w-[330px] bg-white text-black rounded-3xl p-2">
                      <h1 className='py-2 font-semibold px-4'>Current Mood</h1>
                      <article className='flex flex-wrap p-2 gap-x-2'>
                {/* Positive / Uplifting */}
                
                <span onClick={() => handleSelectMood("happy")} className='relative border flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md '>
                  <div>😊</div>
                  <h1>Happy</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{happy&& <TiTick className=" text-xl text-white"/>}</div> 
                  
                </span>
                <span  onClick={()=>handleSelectMood("hope")} className=' relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow rounded-md'>
                  <div>🌅</div>
                  <h1>Hope</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{hope && <TiTick className=" text-xl text-white"/>}</div> 
                </span>
                <span onClick={() => handleSelectMood("productive")} className='relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow rounded-md'>
                  <div>💼</div>
                  <h1>Productive</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{productive && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
              
                {/* Calm / Chill */}
                <span onClick={() => handleSelectMood("relaxed")} className='relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>😌</div>
                  <h1>Relaxed</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{relaxed && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
                <span onClick={() => handleSelectMood("sleep")} className='relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>💤</div>
                  <h1>Sleep</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{sleep && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
                <span onClick={() => handleSelectMood("study")} className='relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>📚</div>
                  <h1>Study</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{study && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
              
                {/* Energetic / Active */}
                <span onClick={() => handleSelectMood("energetic")} className=' relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>🏋️</div>
                  <h1>Energetic</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{energetic && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
                <span onClick={() => handleSelectMood("driving")} className=' relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>🚗</div>
                  <h1>Driving</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{driving && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
                <span   onClick={() => handleSelectMood("party")} className='relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>🎉</div>
                  <h1>Party</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{party && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
              
                {/* Emotional */}
                <span onClick={() => handleSelectMood("romantic")} className='relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>❤️</div>
                  <h1>Romantic</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{romantic && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
                <span onClick={() => handleSelectMood("sad")} className='relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>😢</div>
                  <h1>Sad</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{sad && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
                <span onClick={() => handleSelectMood("angry")} className='relative flex items-center p-2 gap-2 w-[145px] h-[30px] shadow drop-shadow-amber-50 rounded-md'>
                  <div>😠</div>
                  <h1>Angry</h1>
                  <div className="absolute right-0 h-[20px] bg-black rounded-full">{angry && <TiTick className=" text-xl text-white"/>}</div> 

                </span>
              
              </article>
              
              
                      <button onClick={handleMoodSubmit} className="h-[30px] w-[145px] bg-black text-white rounded-md ml-20 mt-2 duration-150 hover:bg-gray-800 ">Continue</button>
                  </section>
            </span></>)}
            
            
          </div>
        </li>}
   

        <li >
          <select name="lang" id="lang" className='cursor-pointer outline-none' >
            <option value="tamil" className='bg-black'>Tamil</option>
            <option value="english" className='bg-black'>English</option>
            <option value="hindi" className='bg-black'>Hindi</option>
          </select>
        </li>
        {accessToken ? ("") : (<> <li className='h-[40px] w-[100px] text-black bg-white text-center py-2 rounded-full cursor-pointer'><NavLink to="/login">Login</NavLink></li>

          <li className='h-[40px] w-[100px] bg-white text-black text-center py-2 rounded-full cursor-pointer'><NavLink  to="/signup">Signup</NavLink></li></>)}

      </ul>

    </main>
  )
}

export default Menu