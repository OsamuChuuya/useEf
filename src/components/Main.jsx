import React, { useState } from 'react'
import Nav from './Nav'
import Drawer from './Drawer'
import Minav from './Minav'
import Cards from './Cards'
import Footer from './Footer'
const Main = () => {
  const [search, setSearch]=useState('')
  return (
    <div className='w-[1440px]  bg-white h-[2037px] bg-gradient-to-r from-[#984D38] to-[#181E41] '>
        <Nav search={search} setSearch={setSearch}/>
        <div className='flex'>
          <Drawer/>
          <div>
            <Minav/>
            <Cards search={search}/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Main