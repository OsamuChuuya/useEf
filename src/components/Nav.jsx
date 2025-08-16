import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import bell from '../assets/bell.png';
import message from '../assets/message.png';
import chel from '../assets/chel.png';
import { Counter } from '../context/CounterContext';

const Nav = ({ search, setSearch }) => {
  const { product } = useContext(Counter);

  return (
    <nav className='w-full px-[51px] py-[28px] flex justify-between items-center '>
      <div className='flex items-center gap-[40px]'>
        <img src={logo} alt="" />
        <input
          type="text"
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-[358px] border-1 h-[48px] rounded-3xl px-4 '
        />
        <ul className='flex gap-4 text-white font-semibold'>
          <li>Home</li>
          <li>Explore</li>
        </ul>
      </div>
      <div className='flex items-center gap-[20px] relative'>
        <img src={bell} alt="" />
        <img src={message} alt="" />
        {product > 0 && (
          <span className='absolute  left-60 bottom-1 bg-red-700 text-white text-xs px-2 py-1 rounded-full'>
            {product}
          </span>
        )}
        <div className='w-[147px] h-[49px] text-center content-center border-1'>Wallet</div>
        <img src={chel} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
