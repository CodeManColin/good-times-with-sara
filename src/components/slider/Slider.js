import React, { useState } from "react";
import SliderMemories from "./SliderMemories";
import SliderGetaways from "./SliderGetaways";
import Dots from "./Dots";
import memories from "../../images/memoriesImageArray";
import getaways from "../../images/getawaysImageArray";

export default function Slider({ memorySlides, getawaySlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider-container">
      <SliderMemories
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        memories={memories}
        memorySlides={memorySlides}
      />

      <SliderGetaways
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        getaways={getaways}
        getawaySlides={getawaySlides}
      />
      <Dots
        activeIndex={activeIndex}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
        memories={memories}
        getaways={getaways}
        memorySlides={memorySlides}
        getawaySlides={getawaySlides}
      />
    </div>
  );
}
