import React, { useContext } from "react";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useAPI from "../utils/useAPI.jsx";
import { CategoryContext, FilterContext } from "../pages/Shop";
import filterDisplay from "../utils/filterDisplay";

function Display() {
  const { selected } = useContext(CategoryContext);
  const { filter } = useContext(FilterContext);
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products");
  filterDisplay(data, filter);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {data.map((item) => {
        return (
          <>
            {item.category == selected ? (
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden relative"
                key={item.id}
              >
                <img
                  className="object-cover object-center h-56 w-full"
                  src={item.image}
                ></img>
                <button className="text-white px-4 py-2 rounded-full focus:outline-none absolute top-4 right-4">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-gray-600">${item.price}</span>
                </div>
              </div>
            ) : selected == "all" ? (
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden relative"
                key={item.id}
              >
                <img
                  className="object-cover object-center h-56 w-full"
                  src={item.image}
                ></img>
                <button className="text-white px-4 py-2 rounded-full focus:outline-none absolute top-4 right-4">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-gray-600">${item.price}</span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        );
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
  );
}

export default Display;
