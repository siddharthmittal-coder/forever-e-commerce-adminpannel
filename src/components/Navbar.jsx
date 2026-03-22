import React from 'react'
import {assets} from '../assets/admin_assets/assets'
import { toast } from 'react-toastify'
function Navbar({setToken}) {
  const loggedOut = () =>{
    setToken('')
    toast.success('Logout Successfully')
  }
  return (
    <div className='w-full flex items-center py-2 px-[4%] justify-between'>
    <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
    <button onClick={loggedOut} className='bg-gray-500 h-10 text-white px-6 py-3 sm:py-2 sm:px-7 rounded-full text-xs sm:text-sm cursor-pointer'>Logout</button>
  
    </div>
  )
}

export default Navbar

