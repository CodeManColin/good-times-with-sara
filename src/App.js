
import React, {useState} from "react";
import './App.css';

import ImageJournal from "./components/ImageJournal";


function App() {
 
 const [memorySlides, setMemorySlides] = useState(false);

 const startMemories = () => {
   setMemorySlides(prevMemory => !prevMemory);
 }

 
  return (
    <div className="App">
      <header className="App-header">
      <h1>Good times with Sara</h1>
         <nav className="App-nav">
          <h3 onClick={startMemories} className="App-nav-memories">Memories</h3>
          <h3 className="App-nav-getaways">Getaways</h3>
         </nav>
       </header>
    <section className="App-section-1">
    <h1>Image Journal</h1>
  {memorySlides === true ? <ImageJournal /> : null}
    </section>
    </div>
  );
}

export default App;
