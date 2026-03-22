import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { currency } from '../App';
function List({token}) {
  const [list,setList] = useState([]);
  const fetchList = async() =>{
  try {
     const respone = await axios.get(backendUrl +'/api/product/list') 
     if(respone.data.success){
      setList(respone.data.products)
     }
     else{
      toast.error(respone.data.message)
     }
  } 
  catch (error) {
    console.log(error)
    toast.error(error.message)
  }
  }
  const handleDelete = async (id) =>{
    try {
      const response = await axios.post(backendUrl+'/api/product/remove',{id},{headers:{token}})
     if(response.data.success){
      toast.success(response.data.message)
      await fetchList()
     }
     else{
      toast.error(response.data.message)
     }
    } catch (error) {
       toast.error(error.message)
    }
     
  }
  useEffect(() =>{
  fetchList()
  },[])
  return (
    <>
    <p className='mb-2'>All product List</p>
    <div className='flex flex-col gap-2'>
      {/* ----List Title Table---- */}
      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center bg-gray-100 py-2 px-1 text-sm border'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='items-center'>Actions</b>
      </div>
      {/* -----  product list------ */}
      {
        list.map((item,index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 md:grid-cols-[1fr_3fr_1fr_1fr_1fr] py-2 px-1 items-center   text-sm' key={index}>
          <img  className = 'w-12'src={item.image[0]} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{currency}{item.price}</p>
          <p onClick={() =>handleDelete(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
          </div>
        ))
      }
    </div>

    </>
  )
}

export default List
