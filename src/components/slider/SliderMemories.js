import React from "react";

import Arrows from "./Arrows";

export default function SliderMemories({
  activeIndex,
  setActiveIndex,
  memorySlides,
  memories,
}) {
  const len = memories.length - 1;

  return (
    <section className={memorySlides ? "Slider-Content" : "Slider-Off"}>
      <h3 className="slider-title">So Many Memories...</h3>
      {memories.map((memory, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={memory.image} alt="Getaway" />
        </div>
      ))}
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </section>
  );
}
