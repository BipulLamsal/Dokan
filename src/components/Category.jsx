import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryContext } from '../pages/Shop';


function Category() {
  const {selected,setSelected} = useContext(CategoryContext)
    const cards = [
        { id: 1, title: "All" },
        { id: 2, title: "Men's Clothing" },
        { id: 3, title: "Women's Clothing"},
        { id: 4, title: "Electronics"},
      ];
    
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      

  return (
    <div className="category-container">
    <h1 class="text-xl font-bold mt-5 p-4">Categories</h1>
    <Slider {...settings} className="">
      {cards.map((card) => (
        <div class="rounded-lg shadow-lg p-4 category-card" onClick={()=> setSelected(card.title.toLocaleLowerCase())}>
            <h1 class="text-sm font-semibold mt-2 text-white">{card.title}</h1>
        </div>
      ))}
    </Slider>
    </div>
  )
}

export default Category