import React from 'react'
import HarmoLogo from '../../src/assets/harmoflow-logo.png'
import { GoHomeFill } from "react-icons/go";

const Logo = () => {
  return (
    <figure className="h-full w-[16%] flex justify-evenly ">
        <img src={HarmoLogo} alt="" className='h-full  py-3' />
        <GoHomeFill className="h-full text-4xl text-white"/>
     

    </figure>
  )
}

export default Logo