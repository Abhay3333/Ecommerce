import React, { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Dumbell1 from '../Assets/Dumbell1.jpg'
import CardioMachine from '../Assets/CardioMachine.jpg'
const Cart = () => {
  //State variables (track on product quantitites)
  const [product1Quantity,setProduct1Quantity]= useState(1)
  const [product2Quantity,setProduct2Quantity]= useState(1)
  const [product1Price,setProduct1Price]=useState(400)
  const [product2Price,setProduct2Price]=useState(400)


  //increment quantity of the prod.
  const incrementProductQuantity=(product) =>{
    if (product=='product1') {
      setProduct1Quantity(product1Quantity+1)
      setProduct1Price(product1Price+400)
    } else if(product=='product2'){
      setProduct2Quantity(product2Quantity+1)
      setProduct2Price(product2Price+400)
    }
  }
  //Decrement
  const decrementProductQuantity=(product) =>{
    if (product=='product1' && product1Quantity>1) {
      setProduct1Quantity(product1Quantity-1)
      setProduct1Price(product1Price-400)
    } else if(product=='product2' && product2Quantity>1){
      setProduct2Quantity(product2Quantity-1)
      setProduct2Price(product2Price-400)

    }
  }

  //Total Price
  const totalPrice = product1Price * product1Quantity + product2Price * product2Quantity;


  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-700 '>
    <NavBar/>
    <div className="-mb-10">
  <div className="flex shadow-md my-10">
    <div className="w-3/4 bg-white px-10 py-10 bg-gradient-to-r from-gray-800 to-gray-700">
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl text-slate-100">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl text-slate-100">3 Items</h2>
      </div>
      <div className="flex mt-10 mb-5">
        <h3 className="font-semibold text-slate-100 text-xs uppercase w-2/5">Product Details</h3>
        <h3 className="font-semibold  text-gray-100 text-xs uppercase w-1/5 text-center">Quantity</h3>
        <h3 className="font-semibold  text-gray-100 text-xs uppercase w-1/5 text-center">Price</h3>
        <h3 className="font-semibold  text-gray-100 text-xs uppercase w-1/5 text-center">Total</h3>
      </div>
      <div className="flex items-center  -mx-8 px-6 py-5">
        <div className="flex w-2/5"> {/* product */}
          <div className="w-20">
            <img className="h-24" src={Dumbell1} alt='' />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-slate-100 text-sm">Dumbell Set(2kg)
            </span>
            <span className="text-red-500 text-xs">BullRock</span>
            <a href="#" className="font-semibold hover:text-red-500 text-gray-400 text-xs">Remove</a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <svg className="fill-current text-gray-100 w-3 cursor-pointer" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" onClick={()=>decrementProductQuantity('product1')} />
          </svg>
          <input className="mx-2 border text-center w-8" type="text" value={product1Quantity} readOnly='' />
          <svg className="fill-current text-slate-100 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={()=>incrementProductQuantity('product1')}>
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm text-slate-100">${product1Price.toFixed(2)}</span>
        <span className="text-center w-1/5 font-semibold text-sm text-slate-100">${(product1Price*product1Quantity)}</span>
      </div>
      <div className="flex items-center  -mx-8 px-6 py-5">
        <div className="flex w-2/5"> {/* product */}
          <div className="w-20">
            <img className="h-24" src={CardioMachine} alt />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm text-slate-100">Cardio Machine- Threadmill</span>
            <span className="text-red-500 text-xs">Nike</span>
            <a href="#" className="font-semibold hover:text-red-500 text-gray-400 text-xs">Remove</a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <svg className="fill-current text-gray-100 w-3 cursor-pointer" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" onClick={()=>decrementProductQuantity('product2')} />
          </svg>
          <input className="mx-2 border text-center w-8" type="text" value={product2Quantity} />
          <svg className="fill-current text-gray-100 w-3 cursor-pointer" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" onClick={()=>incrementProductQuantity('product2')} />
          </svg>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm text-slate-100">${product2Price.toFixed(2)}</span>
        <span className="text-center w-1/5 font-semibold text-sm text-slate-100">${(product2Price*product2Quantity)}</span>
      </div>
     
      <a href="#" className="flex font-semibold text-red-600 hover:text-red-500 text-sm mt-10">
        <svg className="fill-current mr-2 text-red-600 hover:text-red-500 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
        Continue Shopping
      </a>
    </div>
    <div id="summary" className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8 text-slate-100">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase text-slate-100">Items 3</span>
        <span className="font-semibold text-sm text-slate-100">{totalPrice}</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase text-slate-100">Shipping</label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
        </select>
      </div>
      <div className="py-10">
        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm text-slate-100 uppercase">Promo Code</label>
        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-slate-100 uppercase rounded-xl">Apply</button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase text-slate-100">
          <span>Total cost</span>
          <span>{totalPrice}</span>
        </div>
        <button className="bg-red-500 font-semibold hover:bg-red-600 py-3 text-sm text-white uppercase w-full rounded-xl">Checkout</button>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default Cart