import React from 'react'
import Thumbnail from '../../src/assets/gym playlist.jpeg'

import { BiSolidLike } from "react-icons/bi";
import { IoIosPlay } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
const Playerbar = () => {
  return (
    <section className='w-[18%] h-full  bg-gray-900/40  rounded-[6px] overflow-hidden'>
      <main className='h-full'>
      <article className=" h-[50%] bg-gradient-to-b from-[#853909] to-white/30 rounded-bl-[40px] rounded-tl-sm rounded-tr-sm rounded-br-[40px] overflow-hidden bg-contain">
      <img src={Thumbnail} alt="thumbnail of the playlist" className="h-full outline-none opacity-85" />
      </article>
      <article className='h-[8%] w-full  flex justify-around mt-2'>
          <div className="w-[50%] flex justify-between">
          <button><BiSolidLike className="text-white text-xl"/></button>
          <button><IoIosShareAlt className="text-white text-xl"/></button>
          <button><MdFileDownload className="text-white text-xl"/></button>
          {/* <button><FaMicrophone className="text-white text-xl"/></button> */}
          </div>
          <button className='mt-1 bg-amber-300 rounded-full h-[35px] w-[35px] flex justify-center items-center'><IoIosPlay className="text-amber-700 text-xl"/></button>
      </article>
      <article className="h-[42%] "></article>

      </main>
    </section>
  )
}

export default Playerbar