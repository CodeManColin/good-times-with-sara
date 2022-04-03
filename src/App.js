import React, { useState } from "react";
import "./App.css";

import Slider from "./components/slider/Slider";
import Header from "./components/body/Header";
import Footer from "./components/body/Footer";

import heartLogo from "./images/logos/heart-logo.jpg";

import { FaTree } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";

function App() {
  const [memorySlides, setMemorySlides] = useState(false);
  const [getawaySlides, setGetawaySlides] = useState(false);

  const startMemories = () => {
    setMemorySlides((prevMemory) => !prevMemory);
    console.log("Memories Clicked");
    // console.log(`Memory Slides Value: ${memorySlides}`);
    if (getawaySlides) {
      setGetawaySlides((prevGetaway) => !prevGetaway);
    }
  };

  const startGetaways = () => {
    setGetawaySlides((prevGetaway) => !prevGetaway);
    console.log("Getaway Clicked");
    // console.log(`Getaway Slides Value: ${getawaySlides}`);
    if (memorySlides) {
      setMemorySlides((prevMemory) => !prevMemory);
    }
  };
  // console.log(`Memory-APP Slides Value: ${memorySlides}`);
  console.log(`Getaway-APP Slides Value: ${getawaySlides}`);
  return (
    <div className="App">
      <Header
        startMemories={startMemories}
        startGetaways={startGetaways}
        memorySlides={memorySlides}
        getawaySlides={getawaySlides}
      />
    
      <section className="image-journal">
        <div className="image-journal-icon-container">
          <FaShuttleVan size={30} className="image-journal-icon" />
          <FaTree size={30} className="image-journal-icon-left" />
          <h3 className="image-journal-title">Image Journal</h3>
          <FaRoad size={30} className="image-journal-icon-right" />
          <GiLovers size={30} className="image-journal-icon" />
        </div>
        {memorySlides || getawaySlides ? (
          <Slider memorySlides={memorySlides} getawaySlides={getawaySlides} />
        ) : (
          <img className="heart-placeholder" src={heartLogo} alt="heart-logo" />
        )}
      </section>
    
      <Footer />
    </div>
  );
}

export default App;
