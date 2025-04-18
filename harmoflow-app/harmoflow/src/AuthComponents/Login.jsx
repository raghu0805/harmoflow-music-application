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
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { __AUTH, __DB } from '../firebaseConfig/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';


const Login = () => {
  const hour = new Date().getHours();
  let navigate=useNavigate()
  let [showPassword,setShowPassword]=useState(true)
  let [userDetails,setUserDetails]=useState({
    email:"",
    password:""
  })
  //destructing the details
  let {email,password}=userDetails;
  let handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUserDetails({...userDetails,[name]:value})

  }

  let handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(userDetails)
    try {
      //signInWithEmailAndPassword- it will check the email,hashed password in the auth. if it is there it will signup
      let authResult = await signInWithEmailAndPassword(__AUTH, email, password);
      console.log(authResult)
      let user = authResult.user;
      console.log(user.accessToken)
      //store the accessToken in the localStorage
      window.localStorage.setItem("User_Token_id",user.accessToken)
      //getting data from the firestore db
      let docRef = doc(__DB, "userdata", user.uid);
      let docSnap = await getDoc(docRef);
      console.log("docSnap:",docSnap)
      //if data is there the print the data
      if (docSnap.exists()) {
        console.log("User data:", docSnap.data());
      } else {
        console.log("No user data found for this UID");
      }
      navigate("/")
    } catch (error) {
      toast.error(error.message);
    }
    // 
  }

      let GoogleLogin=()=>{
        try {
        
          let provider=new GoogleAuthProvider();
          signInWithPopup(__AUTH,provider).then(async (result)=>{
            console.log(result.user.accessToken)
            console.log(result)
            //store the accessToken in the localStorage
            window.localStorage.setItem("User_Token_id",result.user.accessToken)
            let GoogleData={
              email:result.user.email,
              username:result.user.displayName
            }
  
            if(result){
              let docRef= doc(__DB,"userdata",result.user.uid);
              console.log(result.user.uid);
              await setDoc(docRef,GoogleData);
              toast.success("Data stored successfully")
            }
          });
    
          toast.success("login with google successfully");
          navigate("/")
        } catch (error) {
          toast.error(error.message) 
        }
      }
  // let FacebookLogin=()=>{
  //   try {
  //     let provider=new FacebookAuthProvider();
  //     signInWithPopup(__AUTH,provider).then(async (result)=>{
  //       console.log(result)
  //     });
  //     toast.success("login with facebook successfully");
  //     navigate("/")
  //   } catch (error) {
  //     toast.error(error.message) 
  //   }
  // }
  let ShowToggle=()=>{
  setShowPassword(!showPassword);
  }
  return (
    // 
    <section className='h-[100vh] w-[100vw] overflow-hidden bg-gradient-to-t from-[#b59a9a] to-[#000000]'>
      <main className=" h-[85%] w-[85%]  flex  px-40 bg-radial from-[#FD7B0D] from-20% to-[#F83412] rounded-xl mt-10 ml-30">
        <article className="h-[100%] w-[100%]   rounded-bl-4xl rounded-tl-4xl overflow-hidden  ">
          <h1 className='text-center text-white font-bold text-4xl  mt-10'>Harmoflow </h1>
          <h2 className='text-center  text-white text-2xl font-stretch-90%'>where your sound becomes a story.</h2>
          <img src={Dope} alt=" image is broken" className='h-[100%] w-full relative  bottom-20' />
        </article>
        <article className="h-[100%] w-[100%]  size-18  rounded-tr-4xl rounded-br-4xl ml-20  ">
          {/* <img src={Dope} alt="image broken" className="h-[20%] w-full border bg-red-800 "/> */}
          <form action="" className="h-[85%] mt-15 px-20 py-20  rounded-xl shadow-[0_0_15px_10px_rgba(155,123,111,123)] flex flex-col justify-center items-center" >
          <h1 className='text-center text-white font-bold text-2xl mt-10  w-[315px]'>Log back in and let’s create </h1>
            <div className='flex flex-col mt-5'>
              {/* <label htmlFor="email" className='text-white'>Email</label> */}
              <span className='relative mt-2'>
                <IoMdMail className='absolute  left-1 h-full w-[20px] text-white' />
                <input onChange={handleChange} name="email" value={email}  type="text" placeholder="Email" className="outline px-7 py-1 rounded-xs font-normal placeholder-white text-white " />
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
            <button onClick={handleSubmit} className="border w-63 h-[80px] mt-3 py-1 font-semibold text-white bg-[#000000] rounded-lg border-none hover:bg-white hover:text-black transition-all duration-75">Login</button><br></br>

            <h1 className=' text-white  '>Or login with</h1>
           <div className="w-[130px] flex flex-col items-center justify-around gap-3 mt-2 ">
                  <NavLink onClick={GoogleLogin} className="flex bg-white p-2 gap-3 rounded-md w-[220px]"><FcGoogle className="text-xl cursor-pointer" />Signup with Google</NavLink>
                  {/* <NavLink  className="flex bg-white p-2 gap-3 rounded-md w-[220px]"><FaFacebookF className="text-[#4867AA] text-xl cursor-pointer" />Signup with Facebook</NavLink> */}
                </div>
            <p className="text-white  mt-3 mb-10">
              Don't have an account? <NavLink to={"/signup"} className="text-blue-400 underline ">Sign up</NavLink>
            </p>
          </form>
        </article>
      </main>

    </section>
  )
}

export default Login