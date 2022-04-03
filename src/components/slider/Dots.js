import React from "react";

export default function Dots({
  activeIndex,
  onclick,
  memories,
  getaways,
  memorySlides,
  getawaySlides,
}) {
  if (memorySlides) {
    return (
      <div className="Dots">
        {memories.map((slide, index) => (
          <span
            key={index}
            className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
            onClick={() => onclick(index)}
          ></span>
        ))}
      </div>
    );
  } else if (getawaySlides) {
    return (
      <div className="Dots">
        {getaways.map((slide, index) => (
          <span
            key={index}
            className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
            onClick={() => onclick(index)}
          ></span>
        ))}
      </div>
    );
  }
}
