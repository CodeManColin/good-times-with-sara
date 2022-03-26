import React, { useState } from "react";
import "./App.css";

import Slider from "./components/slider/Slider";
import Header from "./components/body/Header";
import Footer from "./components/body/Footer";

import heartLogo from "./images/logos/heart-logo.jpg";

function App() {
  const [memorySlides, setMemorySlides] = useState(false);
  const [getawaySlides, setGetawaySlides] = useState(false);

  const startMemories = () => {
    setMemorySlides((prevMemory) => !prevMemory);
    if (getawaySlides) {
      setGetawaySlides((prevGetaway) => !prevGetaway);
    }
  }

  const startGetaways = () => {
    setGetawaySlides((prevGetaway) => !prevGetaway);
    if (memorySlides) {
      setMemorySlides((prevMemory) => !prevMemory);
    }
  };

  return (
    <div className="App">
      <Header
        startMemories={startMemories}
        startGetaways={startGetaways}
        memorySlides={memorySlides}
        getawaySlides={getawaySlides}
      />
      <section className="image-journal">
        <h3 className="image-journal-title">Image Journal</h3>
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
