import React, { useState, useContext, createContext } from "react";
import Category from "../components/Category";
import Search from "../components/Search";
import Display from "../components/Display.jsx"

export const CategoryContext = createContext()
function Shop() {
  const [selected,setSelected] = useState('all');
  
  return (
    <div className="md:mx-40 mx-5">
      <CategoryContext.Provider value={{selected,setSelected}}>
      <Category />
      <Search></Search>
      <Display/>
      </CategoryContext.Provider>
    </div>
  );
}

export default Shop;
