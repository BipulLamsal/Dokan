import React, { useState, createContext, useContext } from "react";
import Category from "../components/Category";
import Search from "../components/Search";
import Display from "../components/Display";
import Checkout from "../components/Checkout";
import Navigation from "../components/Navigation";
import { CartContext } from "../Router";

export const CategoryContext = createContext();
export const FilterContext = createContext();

function Shop() {
  const [selected, setSelected] = useState("all");
  const [filter, setFilter] = useState("name");
  const {checkout} = useContext(CartContext)


  return (
    <CategoryContext.Provider
      value={{ selected, setSelected }}
    >
      <Navigation></Navigation>
      <div className="md:mx-40 mx-5">
        {checkout && <Checkout />}
        <Category />
        <FilterContext.Provider value={{ filter, setFilter }}>
          <Search></Search>
          <Display/>
        </FilterContext.Provider>
      </div>
    </CategoryContext.Provider>
  );
}

export default Shop;
