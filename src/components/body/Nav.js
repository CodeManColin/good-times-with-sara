import React from "react";

export default function Nav(props) {
  const { startMemories, startGetaways, memorySlides, getawaySlides } = props;

  // console.log(`Nav-Getaway: ${getawaySlides}`);
  // console.log(`Nav-Memory ${memorySlides}`);
  return (
    <nav className="Nav">
      <h3
        onClick={startMemories}
        className={memorySlides ? "nav-memories-clicked" : "nav-memories"}
      >
        Memories
      </h3>
      <h3
        onClick={startGetaways}
        className={getawaySlides ? "nav-getaways-clicked" : "nav-getaways"}
      >
        Getaways
      </h3>
    </nav>
  );
}
