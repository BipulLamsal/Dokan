import React, { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import useAPI from "../utils/useAPI";
import Checkout from "./Checkout";
import { CartContext } from "../Router";

function Showcase() {
  const { checkout, cart, setCart } = useContext(CartContext);
  const { productID } = useParams();
  const { data, loading, error } = useAPI(
    "https://fakestoreapi.com/products/".concat(productID)
  );

  const [cartItem, setCartItem] = useState({
    id:data.id,
    title: data.title,
    price: data.price,
    quantity: 1,
    image: data.image,
  });
  useEffect(() => {
    setCartItem({
      id:data.id,
      title: data.title,
      price: data.price,
      quantity: 1,
      image: data.image,
    });

  }, [data]);

  const handleClickCart = () => {
    let check = false;
    if (cart.length == 0) {
      setCart([cartItem]);
    } else {
      const newcart = cart.map((obj) => {
        if (obj.title == cartItem.title) {
          check = false;
          return { ...obj, quantity: obj.quantity + 1 };
        } else {
          check = true;

          return obj;
        }
      });
      setCart(newcart);
      localStorage.setItem('cartItems', JSON.stringify(newcart))
      if (check) {
        setCart([...cart, cartItem]);
      }
    }
  };

  return (
    <>
      <Navigation></Navigation>
      {checkout && <Checkout />}
      <div className="md:mx-40 mx-5">
        <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
          <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto relative md:text-left">
            {loading && (
              <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="loader border-4 border-t-4 border-gray-400 rounded-full h-12 w-12 animate-spin"></div>
              </div>
            )}
            <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                  <img
                    src={data.image}
                    className="w-full relative"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>
                </div>

                <div>
                  <div className="inline-block align-bottom mr-5">
                    <span className="text-2xl leading-none align-baseline">
                      $
                    </span>
                    <span className="font-bold text-5xl leading-none align-baseline">
                      {data.price}
                    </span>
                  </div>
                  <div className="inline-block align-bottom">
                    <button
                      className="bg-blue-600 opacity-75 hover:opacity-100 text-blue-300 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                      onClick={handleClickCart}
                    >
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> Add To Bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
