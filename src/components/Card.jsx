import React from 'react'
import image1 from "../assets/image1.avif"
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import {toast} from "react-toastify"

function Card ({ name, image, id, price, type }) {
  let dispatch =useDispatch()
  return (
    <div className='w-[220px] h-[350px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400'>
      <div className='w-[100%] h-[80%] overflow-hidden '>
        <img src={image} alt="" className='object-cover' />
      </div>
      <div className='text-2xl font-semibold'>
        {name}
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-bold text-green-500'>Rs {price}/</div>
        <div className='flex justify-center items-center gap-1 text-green-500 font-bold text-lg'>{type==="veg"?<LuLeafyGreen />: <GiChickenOven />}<span>{type}</span></div>
      </div>
        <button className='w-full p-3 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all 'onClick={()=>{dispatch(AddItem({id:id, name:name,price:price,image:image,qty:1}));
        toast.success("item added")}
      }>Add to dish</button>
    </div>
  )
}

export default Card