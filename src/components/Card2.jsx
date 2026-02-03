

// import React from "react";
// import image1 from "../assets/image1.avif";
// import { MdDelete } from "react-icons/md";

// const Card2 = (name,id,price,image,qty) => {
//   return (
//     <div className="w-full max-w-md bg-white rounded-xl shadow-md p-3 flex justify-between">
//       <div className="flex gap-4 items-center ">


//         <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
//           <img
//             src={image}
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="flex flex-col flex-1 gap-3">
//           <h3 className="text-lg font-semibold text-gray-700">
//             {name}
//           </h3>


//           <div className="flex items-center w-fit border rounded-lg overflow-hidden">
//             <button className="w-8 h-8 flex items-center justify-center bg-green-400 hover:bg-gray-200">
//               -
//             </button>

//             <span className="w-10 h-8 flex items-center justify-center text-green-400 text-xl">
//               {qty}
//             </span>

//             <button className="w-8 h-8 flex items-center justify-center bg-green-400 hover:bg-gray-200">
//               +
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col justify-start items-end gap-8">
//         <span className="text-green-400 font-semibold text-xl">Rs {price}/-</span>
//         <MdDelete className="w-[30px] h-[30px] text-red-400"/>
//       </div>
//     </div>
//   );
// };

// export default Card2;

import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DecreamentQty, IncreamentQty, RemoveItem } from "../redux/cartSlice";

const Card2 = ({ name, id, price, image, qty }) => {
  let dispatch = useDispatch()
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-3 flex justify-between">
      <div className="flex gap-4 items-center">
        <div className="w-24 h-24 rounded-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-gray-700">{name}</h3>

          {/* <div className="flex items-center border rounded-lg overflow-hidden">
            <button className="w-8 h-8 bg-green-400">-</button>
            <span className="w-10 h-8 flex items-center justify-center text-green-400 text-xl">
              {qty}
            </span>
            <button className="w-8 h-8 bg-green-400">+</button>
          </div> */}

          <div className="grid grid-cols-3 border rounded-lg overflow-hidden w-[96px] h-8">
            <button
              className="bg-green-400 text-white
               flex items-center justify-center
               text-[16px] leading-[16px] font-bold" onClick={()=>{
               qty>1?dispatch(DecreamentQty(id)):1
               }}
            >
              -
            </button>

            <span
              className="flex items-center justify-center
               text-green-500 text-[14px] font-semibold
               leading-[14px]"
            >
              {qty}
            </span>

            <button
              className="bg-green-400 text-white
               flex items-center justify-center
               text-[16px] leading-[16px] font-bold" onClick={()=>{
                dispatch(IncreamentQty(id))
               }}
            >
              +
            </button>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-end gap-6">
        <span className="text-green-400 font-semibold text-xl">
          Rs {price}/-
        </span>
        <MdDelete className="text-red-400 w-6 h-6 cursor-pointer" onClick={() => dispatch(RemoveItem(id))} />
      </div>
    </div>
  );
};

export default Card2;
