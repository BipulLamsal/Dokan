import React, { useContext } from "react";
import Loading from "../components/Loading";
import useAPI from "../utils/useAPI.jsx";
import { CategoryContext, FilterContext } from "../pages/Shop";
import filterDisplay from "../utils/filterDisplay";
import Card from "./Card";

function Display() {
  const { selected } = useContext(CategoryContext);
  const { filter } = useContext(FilterContext);
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products");
  filterDisplay(data, filter);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
      {data.map((item) => {
        return (
          <>
            {item.category == selected ? (
              <Card item={item}></Card>
            ) : selected == "all" ? (
              <Card item={item}></Card>
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
