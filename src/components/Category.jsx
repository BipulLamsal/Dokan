import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Category() {
    const cards = [
        { id: 1, title: "All", content: "Card 1 content" },
        { id: 2, title: "Men's Clothing", content: "Card 2 content" },
        { id: 3, title: "Woman's Clothing", content: "Card 3 content" },
        { id: 4, title: "Electonics", content: "Card 4 content" },
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
        <div class="rounded-lg shadow-lg p-4 category-card">
            <h1 class="text-sm font-semibold mt-2 text-white">{card.title}</h1>
        </div>
      ))}
    </Slider>
    </div>
  )
}

export default Category