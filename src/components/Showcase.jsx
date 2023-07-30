import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import useAPI from "../utils/useAPI";

function Showcase() {
  const { productID } = useParams();
  const { data, loading, error } = useAPI(
    "https://fakestoreapi.com/products/".concat(productID)
  );
  return (
    <>
      <Navigation></Navigation>
      <div className="md:mx-40 mx-5">
        {loading && (
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="loader border-4 border-t-4 border-gray-400 rounded-full h-12 w-12 animate-spin"></div>
          </div>
        )}
        <div class="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
          <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto relative md:text-left">
            <div class="md:flex items-center -mx-10">
              <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                  <img
                    src={data.image}
                    class="w-full relative z-10"
                    alt=""
                  ></img>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                  <h1 class="font-bold uppercase text-2xl mb-5">
                    {data.title}
                  </h1>
                  <p class="text-sm">{data.description}</p>
                </div>

                <div>
                  <div class="inline-block align-bottom mr-5">
                    <span class="text-2xl leading-none align-baseline">$</span>
                    <span class="font-bold text-5xl leading-none align-baseline">
                      {data.price}
                    </span>
                  </div>
                  <div class="inline-block align-bottom">
                    <button class="bg-blue-600 opacity-75 hover:opacity-100 text-blue-300 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                      <i class="mdi mdi-cart -ml-2 mr-2"></i> Add To Bag
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
