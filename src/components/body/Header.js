import React from "react";

import Nav from "./Nav";

export default function Header(props) {
  const { startMemories, startGetaways, memorySlides, getawaySlides } = props;

  return (
    <header className="Header">
      <h1 className="header-title">Good times with Sara</h1>
      <Nav
        startMemories={startMemories}
        startGetaways={startGetaways}
        memorySlides={memorySlides}
        getawaySlides={getawaySlides}
      />
    </header>
  );
}
