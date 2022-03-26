import React from 'react'


export default function Arrows( {prevSlide, nextSlide} ) {
// console.log(prevSlide)
   return (
       <div className="Arrows">
           <span className="prev" onClick={prevSlide}>
            &#10094;
           </span>   
           <span className="next" onClick={nextSlide}>
           &#10095;
          </span>  
        </div>
  )
}
