import React, { useEffect, useState } from "react";
import SliderMemories from "./SliderMemories";
import SliderGetaways from "./SliderGetaways";
import Dots from "./Dots";
import memories from "../../images/memoriesImageArray";
import getaways from "../../images/getawaysImageArray";

export default function Slider({ memorySlides, getawaySlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex);
    });
    return () => clearInterval(interval);
  }, [activeIndex]);

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
        memories={memories}
        getaways={getaways}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}
