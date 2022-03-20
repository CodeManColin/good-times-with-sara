import React from 'react';
import { Slide } from 'react-slideshow-image';


const slideMemories = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

export default MemorySlideshow = () => {
  
    return (
      <div>
          <h3>Memories</h3>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideMemories[0]})`}}>
              <span>Memory 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideMemories[1]})`}}>
              <span>Memory 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideMemories[2]})`}}>
              <span>Memory 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

