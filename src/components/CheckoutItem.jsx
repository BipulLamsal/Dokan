import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Router'

const handleRemove = (id,cart,setCart) =>
{
let newCart = cart.map((item)=>{
  if (item.id == id)
  {
    return({...item,quantity:item.quantity - 1})
  }
  else
  {
    return (item)
  }
}
)
setCart(newCart)


}


function CheckoutItem({id,title,quantity,price,image}) {
  const {cart,setCart} = useContext(CartContext)

  return (
    <li className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img src={image} alt="Cart Image" className="h-full w-full object-cover object-center"></img>
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{title}</a>
          </h3>
          <p className="ml-4">${price}</p>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty {quantity}</p>

        <div className="flex">
          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>handleRemove(id,cart,setCart)}>Remove</button>
        </div>
      </div>
    </div>
  </li>
  )
}

export default CheckoutItem