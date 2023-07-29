import React from "react";
import Category from "../components/Category";
import Search from "../components/Search";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useAPI from "../utils/useAPI.jsx";

function Shop() {
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products");
  return (
    <div className="md:mx-40 mx-5">
      <Category />
      <Search></Search>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {data.map((item)=>{
          return(
            <div className="bg-white rounded-xl shadow-md overflow-hidden relative" key={item.id}>
            <img
              className="object-cover object-center h-56 w-full"
              src={item.image}
            ></img>
            <button className="text-white px-4 py-2 rounded-full focus:outline-none absolute top-4 right-4">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <div className="p-4 flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-800">{item.title}</h3>
              <span class="text-gray-600">${item.price}</span>
            </div>
          </div>
          )
        })}

        {loading && (
          <>
            {" "}
            <Loading></Loading>
            <Loading></Loading>
            <Loading></Loading>
            <Loading></Loading>
          </>
        )}
      </div>
    </div>
  );
}

export default Shop;
