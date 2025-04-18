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
  return (
    <main className='h-full w-[50%] text-white/90 font-semibold'>
      <ul className='h-full w-full flex justify-around items-center'>
       {accessToken && <li className="flex items-center gap-1 cursor-pointer">Notification<IoNotifications className='text-[20px] ' /></li>} 

        <li onClick={ToggleTheme} className="flex items-center gap-1 cursor-pointer">{theme == "Dark" ? <>Light Theme <MdLightMode className='text-[20px] ' /></> : <>Dark Theme <MdDarkMode className='text-[20px] ' /></>} </li>

       {accessToken &&      <li onClick={()=>setShowPopup(!showPopup)} className='relative cursor-pointer text-white '>
          <div >
            <span className='flex items-center gap-1'>
              <h1 className="text-white">Mood</h1>
              <TbMoodSpark className='text-[20px]' />
            </span>


            {/* Popup should be absolutely positioned below */}
            {showPopup && (<><span className='absolute -right-30 top-10 z-10 bg-white text-black rounded shadow-lg'>
              <PopupCard />
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