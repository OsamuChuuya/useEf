import React from 'react'
import logo from '../assets/logo.png'
import bell from '../assets/bell.png'
import message from '../assets/message.png'
import chel from '../assets/chel.png'
const Nav = ({ search, setSearch }) => {
  return (
    <nav className='w-full px-[51px] py-[28px] flex justify-between  items-center '>
        <div className='flex items-center gap-[40px]'>
            <img src={logo} alt="" />
            <input type="text" placeholder='Search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
             className='w-[358px] border-1 h-[48px] rounded-3xl px-4 '/>
            <ul className='flex gap-4 text-white font-semibold'>
                <li>Home</li>
                <li>Explore</li>
            </ul>
        </div>
        <div className='flex items-center gap-[20px]'>
            <img src={bell} alt="" />
            <img src={message} alt="" />
            <div className='w-[147px] h-[49px] text-center content-center border-1'>Wallet</div>
            <img src={chel} alt="" />
        </div>

    </nav>
  )
}

export default Nav