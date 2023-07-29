import React from 'react'

function Loading() {
  return (

    <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden relative animate-pulse">
    <div className="bg-gray-400 h-56 w-full"></div>
    <button className="text-white px-4 py-2 rounded-full focus:outline-none absolute top-4 right-4">
      <i className="fas fa-shopping-cart"></i>
    </button>
    <div className="p-4 flex items-center justify-between">
      <div className="bg-gray-300 h-6 w-2/3"></div>
      <div className="bg-gray-300 h-6 w-1/3"></div>
    </div>
  </div>
  )
}

export default Loading