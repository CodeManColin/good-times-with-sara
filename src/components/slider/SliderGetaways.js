import React from 'react'

import Arrows from "./Arrows"


export default function SliderGetaways( {activeIndex, setActiveIndex, getawaySlides, getaways} ) {
 
    const len = getaways.length - 1;
 
    return (
        <section className={getawaySlides ? "Slider-Content" : "Slider-Off"}>
         <h3 className="slider-title">So Many Getaways...</h3>
        {getaways.map((getaway, index) => (
             <div
             key={index}
             className={index === activeIndex ? "slides active" : "inactive"}
             >
                 <img className="slide-image" src={getaway.image} alt="Getaway" />
             </div>
        ))}
          <Arrows 
        prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
    </section>
  );
}
