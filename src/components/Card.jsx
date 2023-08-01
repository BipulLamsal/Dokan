import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={"" + item.id}>
              <div
      className="bg-white rounded-xl shadow-md overflow-hidden relative cursor-pointer"
      key={item.id}
    >
      <img
        className="object-cover object-center h-56 w-full"
        src={item.image}
      ></img>
      <button className="text-white px-4 py-2 rounded-full focus:outline-none absolute top-4 right-4 cart-btn ">
        <FontAwesomeIcon icon={faShoppingCart} className="p-2 bg-blue-500 rounded-sm cursor-pointer"/>
      </button>
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {item.title}
        </h3>
        <span className="text-gray-600">${item.price}</span>
      </div>
    </div>

    </Link>
  );
}

export default Card;
