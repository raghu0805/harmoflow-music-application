import React, { useState } from 'react'
import Dope from "../../src/assets/music-listen-image.png"
import Image from '../../src/assets/music-listen.jpeg'

import { BiSolidLock } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import { __AUTH, __DB } from '../firebaseConfig/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  //it is used to navigate b/w differnt pages
  let navigate=useNavigate();

  let [showPassword,setShowPassword]=useState(true);
  //it will store the info which are entered by the user in the input field
  let [userData,setUserData]=useState({
    username:"",
    email:"",
    password:""
  })
  //Destructure the userData for more accessibility
  let {username,email,password}=userData;

  //it will track the value entered by the user.-it required name and value attribute in the input-field
  let handleChange=(e)=>{

    let name=e.target.name;
    let value=e.target.value;
    // console.log("name:",name)
    // console.log("value:",value)
    setUserData({...userData,[name]:value})

  }
  //it will create a user into the firebase authentication and store data into the firestore database
  let handleSubmit=async (e)=>{
    //prevent the default behaviour of the webpage
    e.preventDefault();
    //ensure the data is there or not for further procedure
    console.log(userData);
    toast.success("button clicked successfully")
        try {
          //create a user with email and password
         let userCredentials= await createUserWithEmailAndPassword(__AUTH,email,password);
          //send email verfication to verify the email
         await sendEmailVerification(userCredentials.user);
         let user=userCredentials.user;
          //after creating the user, the __AUTH stores the email and password.(it contains many other fields also)
          //extracting only the userDetails
          //if the user details exist then create a document refernce an store it in a db.
          if(user){
            let docRef= doc(__DB,"userdata",user.uid);
            await setDoc(docRef,userData);
            toast.info("Successfully data stored");
            navigate("/login")

          }
          else{
            toast.error("the user is not registered so that we can't store any data");
          }
        } catch (error) {
          toast.error(error.message)
        }
  }

  let GoogleLogin=(e)=>{
    e.preventDefault()
    try {
      let provider=new GoogleAuthProvider();
      signInWithPopup(__AUTH,provider).then(async (result)=>{
        console.log(result)
      //store the accessToken in the localStorage
      window.localStorage.setItem("User_Token_id",user.accessToken)
      });
      toast.success("login with google successfully");
      navigate("/login")
    } catch (error) {
      toast.error(error.message) 
    }
  }

  let ShowToggle=()=>{
  setShowPassword(!showPassword);
  }

  return (
    // 
    <section className='h-[100vh] w-[100vw] overflow-hidden bg-gradient-to-t from-[#b59a9a] to-[#000000]'>
      <main className=" h-[90%] w-[85%]  flex  px-40 bg-radial from-[#FD7B0D] from-20% to-[#F83412] rounded-xl mt-10 ml-30">
      <article className="h-[100%] w-[100%]  size-18  ml-20  ">
          {/* <img src={Dope} alt="image broken" className="h-[20%] w-full border bg-red-800 "/> */}
        

          <form onSubmit={handleSubmit} action="" className=" h-[90%] px-20 py-10  mt-10 rounded-xl shadow-[0_0_15px_10px_rgba(155,123,111,123)] flex flex-col justify-center items-center" >
          <h1 className='text-center text-white font-bold text-4xl  mt-8'>Create Account</h1>
          <h2 className='text-center text-white text-xl mb-6'>Join the Harmoflow community</h2>
            <div className='flex flex-col mt-5'>
              {/* <label htmlFor="email" className='text-white'>Email</label> */}
              <span className='relative mt-2'>
                <IoMdMail className='absolute  left-1 h-full w-[20px] text-white' />
                <input onChange={handleChange} name="username" value={username} type="text" placeholder="UserName" className="outline px-7 py-1 rounded-xs font-normal placeholder-white text-white " />
              </span>

            </div>
            <div className='flex flex-col mt-5'>
              {/* <label htmlFor="email" className='text-white'>Email</label> */}
              <span className='relative mt-2'>
                <IoMdMail className='absolute  left-1 h-full w-[20px] text-white' />
                <input onChange={handleChange} name="email" value={email} type="email" placeholder="Email" className="outline px-7 py-1 rounded-xs font-normal placeholder-white text-white " />
              </span>

            </div>
            <div className='flex flex-col mt-5'>
              {/* <label htmlFor="password">Password</label> */}
              <span className='relative mt-2'>
                <BiSolidLock className='absolute  left-1  h-full w-[20px] text-white' />
                <input onChange={handleChange} name="password" value={password} type={showPassword?"password":"text"} placeholder="Password" className="outline px-7 py-1 rounded-xs font-normal placeholder-white text-white " />
                <span className='absolute right-2 top-2 text-white' onClick={ShowToggle}>{showPassword?<FaEyeSlash/>:<FaEye/>}</span>
              </span>
            </div>
            <h2 className='text-white mt-4 ml-30'>Forget Password?</h2>
            <button  className="border w-63 h-8 mt-3 py-1 font-semibold text-white bg-[#000000] rounded-lg border-none hover:bg-white hover:text-black transition-all duration-75">Signup</button><br></br>

            <h1 className=' text-white  '>Or Signup with</h1>
            <div className="w-[130px] flex flex-col items-center justify-around gap-3 mt-2 ">
              <NavLink onClick={GoogleLogin} className="flex bg-white p-2 gap-3 rounded-md w-[220px]"><FcGoogle className="text-xl cursor-pointer" />Signup with Google</NavLink>
              {/* <NavLink to={"/"} className="flex bg-white p-2 gap-3 rounded-md w-[220px]"><FaFacebookF className="text-[#4867AA] text-xl cursor-pointer" />Signup with Facebook</NavLink> */}
            </div>
            <p className="text-white  mt-3 mb-10">
               Have an account? <NavLink to={"/login"} className="text-blue-400 underline ">Login </NavLink>
            </p>

          </form>
        </article>
        <article className="h-[100%] w-[100%]   rounded-bl-4xl rounded-tl-4xl  overflow-hidden  ">

        <h1 className='text-center text-white font-bold text-4xl  mt-10'>Harmoflow </h1>
        <h2 className='text-center  text-white text-2xl font-stretch-90%'>gives your sound a voice.</h2>
          <img src={Dope} alt=" image is broken" className='h-[100%] w-full relative  bottom-20' />
        </article>
    
      </main>

    </section>
  )
}

export default Signup