import React from 'react'
import group from '../assets/Group.png'

const Drawer = () => {
  return (
    <div>
        <div className="drawer lg:drawer-open mt-[120px] ml-[51px]">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label> */}
  </div>
  <div className="drawer-side rounded-2xl ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-[#FFFFFF1A] text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
    <div className='flex items-center gap-[10px] mb-[50px] font-semibold text-[26px]'>
        <img src={group} alt="" className='w-[29px] h-[17px] mt-[41px]' />
        <h2 className='mt-[40px]'>Filters</h2>
    </div>  
  
      <li className='text-base font-medium border-b-1 mb-4 pb-3'><a>Status</a></li>
      <li className='text-base font-medium border-b-1 mb-4 pb-3'><a>Price</a></li>
      <li className='text-base font-medium border-b-1 mb-4 pb-3'><a>Collections</a></li>
      <li className='text-base font-medium border-b-1 mb-4 pb-3'><a>Chains</a></li>
      <li className='text-base font-medium mb-4'><a>Categories</a></li>

    </ul>
  </div>
</div>
    </div>
  )
}

export default Drawer