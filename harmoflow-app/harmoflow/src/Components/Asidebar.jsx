import React, { useState } from 'react'
import { RiAddBoxFill } from "react-icons/ri";
import { toast } from 'react-toastify';

const Asidebar = () => {
  let [playliststate,setplayliststate]=useState(false)
  let handleClick=(e)=>{
    e.preventDefault()
    setplayliststate(!playliststate)
    // toast.success(`Button clicked successfully ${playliststate}`)

  }
  return (

    <aside className="w-[22%] h-[100%] overflow-y-auto bg-gray-900/40 text-white p-6 space-y-4 rounded-[6px] ">
      <section className={playliststate?"h-[80%] overflow-hidden":"h-[10%]"} id="playlist">
        <h2 onClick={handleClick} className="text-xl font-bold mb-4 w-full flex items-center justify-around hover:bg-red-300 hover:rounded-lg cursor-pointer">
          🎛️ Your Hub <span className="ml-2"><RiAddBoxFill /></span>
        </h2>
       {playliststate?(<main><article className=' h-[40%] w-full bg-gray-500/40 px-5 py-3 rounded-lg'>
          <h1 className='font-bold'>Create Your Vibe</h1>
          <h2 className='font-normal'>Mix your favorite songs, name your playlist, and make it truly yours.</h2>
          <button className='h-[35px] bg-black rounded-full px-5  mt-3'>Create Playlist</button>

        </article>
        <article className='h-[40%] w-full bg-gray-500/40 px-5 py-3 rounded-lg mt-3'>
          <h1 className='font-bold'>Share the Vibe</h1>
          <h2 className='font-normal'>  Send your playlist to friends and let them hear what you’re feeling.</h2>
          <button className='h-[35px] bg-black rounded-full px-8  mt-3'>Share Now</button>
        </article></main>):("")}

      </section>


      <section >
        <h2 className="text-xl font-bold mb-4">🎧 Flowspace</h2>
        <ul className="space-y-3">
          <li className="hover:bg-[#703f20] rounded-lg p-2 cursor-pointer">🌟 New Releases</li>
          <li className="hover:bg-[#703f20] rounded-lg p-2 cursor-pointer">❤️ Liked Songs</li>
          <li className="hover:bg-[#703f20] rounded-lg p-2 cursor-pointer">📁 My Playlists</li>
          <li className="hover:bg-[#703f20] rounded-lg p-2 cursor-pointer">🎙️ Podcasts</li>
          <li className="hover:bg-[#703f20] rounded-lg p-2 cursor-pointer">📻 Radio</li>

          <li className="hover:bg-[#703f20] rounded-lg p-2 cursor-pointer">✨ Create Playlist</li>
        </ul>

      </section>
    </aside>


  )
}

export default Asidebar