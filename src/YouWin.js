import React from "react";
import youwin from "./images/youwin.jpeg";

export default function YouWin() {
  return (
    <div>
      <div id="youwinTextDiv">
        <h1 id="youwinText">YOU WIN!</h1>
      </div>
      <img src={youwin} alt="You win!" id="youwin" />
      <h2> 🤷‍♂️ I guess the only thing left to do is hire me. 🤷‍♂️</h2>
      <a href="/">
        <h3>You can also navigate back to the homepage...</h3>
      </a>
    </div>
  );
}
