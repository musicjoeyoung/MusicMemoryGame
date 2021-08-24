import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Music Memory Game!</h1>
      <h2>
        <a href="/game">Enter the game</a>
      </h2>
      <h2>About</h2>
    </div>
  );
}
