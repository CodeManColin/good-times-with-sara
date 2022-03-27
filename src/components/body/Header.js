import React from "react";

import Nav from "./Nav";

export default function Header(props) {
  const { startMemories, startGetaways } = props;

  return (
    <header className="Header">
      <h1 className="header-title">Good times with Sara</h1>
      <Nav startMemories={startMemories} startGetaways={startGetaways} />
    </header>
  );
}
