import React from "react";
//import Navbar from "./Navbar";
import About from "./About";
import Instructions from "./Instructions";

export default function Home() {
  return (
    <div>
      <div className="space"></div>
      <div id="enterGameDiv">
        <a id="enterGame" href="/piano">
          <h1>Begin!</h1>
        </a>
      </div>
      <Instructions />
      <About />
    </div>
  );
}
