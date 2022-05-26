import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav= () => {
      setNav(!nav)
    }

  return (
    <div className='w-full h-[100px] bg-gradient-to-r from-black to-[#2A363B]'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
         <img src={Logo} className='mt-5' alt="Logo" style={{width: '250px'}}/>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-[#99B898] items-center'>
            <li><Link to="hero" smooth={true} duration={500}>
            About</Link></li>
            <li><Link to="events" smooth={true} duration={500}>
            Events
            </Link></li>
            <li><Link to="community" smooth={true} duration={500}>
            Community
            </Link></li>
          </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <FaTimes size={30} className='text-[#E84A5F]' /> : <FaBars size={30} className='text-[#E84A5F]' />}
        </div>
       
        {/* Mobile Menu */}
        <div className={nav ?  'md:hidden w-full bg-gradient-to-r from-black to-[#2A363B] text-[#99B898] absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
          <ul className='text-2xl'>
          <li><Link to="hero" smooth={true} duration={500}>
            About</Link></li>
            <li><Link to="events" smooth={true} duration={500}>
            Events
            </Link></li>
            <li><Link to="community" smooth={true} duration={500}>
            Community
            </Link></li>
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default Navbar