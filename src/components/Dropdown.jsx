import React from 'react'

const Dropdown = () => {
  return (
    <div className='flex items-center gap-[20px]'>
        <div className="dropdown dropdown-center ml-[395px]">
            <div tabIndex={0} role="button" className=" border-2 w-[178px] h-[42px] text-center content-center font-normal text-base  m-1 bg-[] ">All Items</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
        <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className=" border-2 w-[178px] h-[42px] text-center content-center font-normal text-base  m-1 bg-[] ">Sort By</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown