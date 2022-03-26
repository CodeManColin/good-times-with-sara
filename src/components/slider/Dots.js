import React from 'react'

export default function Dots( {activeIndex, onclick, memories} ) {

  return (
    <div className="Dots">
            {memories.map((slide, index) => (
                <span
                  key={index}
                  className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                  onClick={() => onclick(index)}
                >
                </span>
            ))}
    </div>
  );
}
