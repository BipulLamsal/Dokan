import React from 'react'


function CheckoutItem({title,quantity,price,image}) {
  return (
    <li class="flex py-6">
    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img src={image} alt="Cart Image" class="h-full w-full object-cover object-center"></img>
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{title}</a>
          </h3>
          <p class="ml-4">${price}</p>
        </div>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-500">Qty {quantity}</p>

        <div class="flex">
          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
        </div>
      </div>
    </div>
  </li>
  )
}

export default CheckoutItem