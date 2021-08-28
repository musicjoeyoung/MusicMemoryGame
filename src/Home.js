import React from "react";
//import Navbar from "./Navbar";
import About from "./About";
import Instructions from "./Instructions";
import mainLogo from "./images/mainLogo.png";

export default function Home() {
  return (
    <div>
      <img
        src={mainLogo}
        id="mainLogo"
        alt="birds on power lines as music notes with 'Music Memory'"
      />

      <a id="enterGame" href="/piano">
        <h2>Begin!</h2>
      </a>

      <Instructions />
      <About />
    </div>
  );
}
