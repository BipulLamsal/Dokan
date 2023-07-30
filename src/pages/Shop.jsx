import React, { useState, useContext, createContext } from "react";
import Category from "../components/Category";
import Search from "../components/Search";
import Display from "../components/Display.jsx";

export const CategoryContext = createContext();
export const FilterContext = createContext();
function Shop() {
  const [selected, setSelected] = useState("all");
  const [filter, setFilter] = useState("name");

  return (
    <div className="md:mx-40 mx-5">
      <CategoryContext.Provider value={{ selected, setSelected }}>
        <Category />
        <FilterContext.Provider value={{ filter, setFilter }}>
          <Search></Search>
          <Display />
        </FilterContext.Provider>
      </CategoryContext.Provider>
    </div>
  );
}

export default Shop;
