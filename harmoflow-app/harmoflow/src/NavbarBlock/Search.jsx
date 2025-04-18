import React from 'react'
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { MdOutlineSearch } from "react-icons/md";
const Search = () => {
  return (
    <article className='h-full w-[40%]  flex  items-center justify-evenly relative'>
        <input type="text" placeholder='Search a song to Play?' className='h-[56%] w-[70%] text-white bg-[#703f20]/50  font-semibold  rounded-full outline-none px-7 placeholder-white/90' />
        <MdOutlineSearch className="absolute right-38 text-2xl text-white"/>
        <FaRegCircleQuestion className="h-full text-[32px] text-white ml-3 "/>
    </article>
  )
}

export default Search