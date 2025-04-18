import React from 'react'
import Asidebar from './Asidebar'
import Musicbar from './Musicbar'
import Playerbar from './Playerbar'

const MusicContainer = () => {
  return (
  <main className='h-[80vh] w-full flex gap-2 px-2 py-4 '>
  <Asidebar/>
  <Musicbar/>
  <Playerbar/>
  </main>
  )
}

export default MusicContainer