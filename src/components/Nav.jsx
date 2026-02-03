import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Nav = () => {
  let {input, setInput, cate, setCate , showCart, setShowCart} = useContext(dataContext)
 useEffect(()=>{
  let newlist = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
  setCate(newlist)
 },[input])
 let items = useSelector(state=>state.cart)
 console.log(items);
 
  return (
    <div>
      
<div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8 '>
 
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-b-md shadow-xl'>
        
        <MdFastfood className='w-8 h-8 text-green-500'/>
        
      </div>
      
      <form className='w-[45%] h-[40px] bg-amber-50 flex items-center px-5 gap-5 rounded-md shadow-xl md:w-[70%] 'onSubmit={(e)=>e.preventDefault()}>
       <IoSearch className='h-6 w-6 text-green-500 r'/>
       <input className='w-full outline-none text-[16px] md:text-[20px]' type='text' placeholder='Search Items...' onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      <div className='w-[66px] h-[60px] bg-white flex justify-center items-center rounded-b-md shadow-xl relative' onClick={()=>{
        setShowCart(true)
      }}> 
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px ]'>{items.length}</span>
        <FaShoppingBag className='w-8 h-8 text-green-500 cursor-pointer' />
      </div>

    </div>

    </div>
      )
}

export default Nav