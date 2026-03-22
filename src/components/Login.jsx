import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
function Login({setToken}) {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const onSubmitHandler = async (e)=>{
  try{
 e.preventDefault();
   const response = await axios.post(backendUrl + '/api/user/adminLogin',{email,password})
   if(response.data.success){
    setToken(response.data.token)
   }
   else{
    toast.error(response.data.message)
   }

  }
  catch(error){
  console.log(error)
  toast.error(error.message)
  }
  }
  return (
    <div className='min-h-screen flex items-center justify-center' >
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='font-bold text-2xl mb-3'>Admin panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72' >
            {/* <p className='font-medium mb-3 text-gray-600 text-sm'>Name</p> */}
            {/* <input onChange={(e) => setName(e.target.value)} value={name} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="text" placeholder='Enter your name' required /> */}
            <div className='mb-3 min-w-72'>
            <p className='font-medium mb-3 text-gray-600 text-sm'>Email Adress</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email}  className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@gmail.com' required />
            </div>
            <div className='mb-3 min-w-72'>
            <p className='font-medium mb-3 text-gray-600 text-sm'>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password}  className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
            </div>
            <button   className='border-2 px-6 py-2 border-gray-700 bg-gray-500 rounded-md text-white w-full hover:text-yellow-500 cursor-pointer' type='submit'> Login</button>
           
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
