import Dropdown from './Dropdown'
import React from 'react'

const Minav = () => {
  return (
    <div className='mt-[120px]  px-[51px] py-[28px] flex justify-between items-center'>
        <h3 className='font-normal text-base text-white'>571,632 items</h3>
        <Dropdown/>
    </div>
  )
}

export default Minav