import React from "react";
import InstructionsModal from "./InstructionsModal";

export default function Navbar() {
  return (
    <div className="navbar">
      <a id="title" href="/">
        <h1>Music Memory Game!</h1>
      </a>
      <InstructionsModal />
    </div>
  );
}
