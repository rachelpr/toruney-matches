import React from "react";
import Player from "./player";

function PlayerList() {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;
