import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import { food_items } from "../food"
import Categories from '../category'
import { dataContext } from '../context/UserContext'
import { RxCross1 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
// import Categories from '../category'
function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

  function filter(category) {
    if (category === "All") {
      setCate(food_items)
    } else {
      let newList = food_items.filter((item) => (item.food_category === category))
      setCate(newList)
    }
  }

  let items = useSelector(state => state.cart)
  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  console.log(subtotal);
  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100
  let total = Math.floor(subtotal + deliveryFee + taxes)

  return (
    <div className='bg-slate-200 w-[100%] min-h-screen'>
      <Nav />
      {!input ? <div className='flex  flex-wrap justify-center items-center gap-3 w-[100%]'>
        {Categories.map((item) => {
          return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-300 cursor-pointer transition-all duration-200' onClick={() => filter(item.name)}>
            {item.icon}
            {item.name}

          </div>
        })}
      </div> : null}
      <div className=" flex flex-wrap gap-4 justify-center items-center pt-4 pb-2">
        {cate.length>1?cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))
:<div className='text-green-400 text-3xl font-extrabold mt-30'>No Dish Found...</div>}
      </div>
      <div className={`w-full md:w-[30vw] h-full fixed top-0 right-0 bg-white shadow-xl p-5 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart ? "translate-0" : "translate-x-full"}`}>
        <header className='w-full flex justify-between items-center'>
          <span className='text-green-400 text-[22px] font-semibold'>order items</span>
          <RxCross1 className='text-green-400 text-[22px] font-semibold w-[20px] h-[20px] cursor-pointer hover:text-gray-600' onClick={() => setShowCart(false)} />
        </header>
        {/* <Card2/> */}
        {items.length>0? <>
          <div className='w-full mt-8 flex flex-col gap-5 '>
            {items.map((item) => (
              <Card2
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))}

          </div>
          <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-5'>

            <div className="w-full flex  justify-between items-center ">
              <span className='text-gray-600 font-semibold text-lg'>SubTotal</span>
              <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>
            </div>

            <div className="w-full flex  justify-between items-center ">
              <span className='text-gray-600 font-semibold text-lg'>Deliery Fee</span>
              <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
            </div>
            <div className="w-full flex  justify-between items-center ">
              <span className='text-gray-600 font-semibold text-lg'>Taxes</span>
              <span className='text-green-400 font-semibold text-lg'>Rs {taxes}/-</span>

            </div>
          </div>
          <div className="w-full flex  justify-between items-center p-5">
            <span className='text-gray-600 font-semibold text-2xl'>Total</span>
            <span className='text-green-400 font-semibold text-2xl'>Rs {total}/-</span>

          </div>
          <button className=' w-[80%] p-3 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all text-xl' onClick={()=>{
            toast.success("Order placed..")
          }}>Place Holder</button>
        </>:<div className='text-green-400 font-extrabold text-3xl mt-50'>Empty Card....</div>}
       
      </div>

    </div>
  )
}

export default Home
