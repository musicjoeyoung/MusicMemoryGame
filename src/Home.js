import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Instructions from "./Instructions";

export default function Home() {
  return (
    <div>
      <Navbar />

      <a id="enterGame" href="/game">
        <h2>Enter!</h2>
      </a>

      <Instructions />
      <About />
    </div>
  );
}
