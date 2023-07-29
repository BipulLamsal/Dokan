import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge,faList,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
    <div className="mx-auto mt-10 grid grid-cols-1 gap-4 lg:grid-cols-5 items-center">
    <div className="w-full relative col-span-3 mb-4 lg:mb-0">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-full bg-gray-100 py-2 px-4 pr-12 focus:outline-none focus:bg-white focus:ring focus:border-blue-300"
      ></input>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none">
        Search
      </button>
    </div>

    <div className="flex items-center justify-around col-span-2">
      <div className="flex items-center lg:ml-4">
        <label for="sort-by" className="font-medium">
          Sort By:
        </label>
        <select
          id="sort-by"
          className="ml-2 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
        >
          <option value="name">Name (Ascending)</option>
          <option value="date">Price (Low to High)</option>
          <option value="price">Price (High to Low)</option>
        </select>
      </div>
      <button className="text-blue-500 hover:text-blue-600  px-4 py-2 focus:outline-none ">
      <FontAwesomeIcon icon={faList} />
      </button>
      <button className="text-blue-500 hover:text-blue-600  px-4 py-2 focus:outline-none ">
      <FontAwesomeIcon icon={faTableCellsLarge}/>
      </button>
    </div>
  </div>
  )
}

export default Search