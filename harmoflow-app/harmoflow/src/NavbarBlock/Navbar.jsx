import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Menu from './Menu'

const Navbar = () => {
  return (
    <header className=" h-[79px] w-[100vw] shadow shadow-amber-50  flex">
        <Logo/>
        <Search/>
        <Menu/>
    </header>
  )
}

export default Navbar