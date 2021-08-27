import React from "react";
import website from "./images/website.png";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import joeyoung from "./images/joeYoungLinkedin.jpeg";

export default function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <div className="aboutText">
        <p>
          <span>Created by: </span>Joe Young
        </p>
        <img id="bioImg" src={joeyoung} />
        <p>
          <span>Built: </span>During a Mintbean Hackathon
        </p>
        <p>
          <span>Github Repo: </span>
          <a href="https://github.com/musicjoeyoung/MusicMemoryGame">
            https://github.com/musicjoeyoung/MusicMemoryGame
          </a>
        </p>
        <p>
          <span>Technologies Used: </span>React, Tone.js
        </p>
        <p>
          <span>Description: </span>My goal was to make a game that tests the
          user's ability to strengthen their tonal and visual memory.
        </p>
        <p>
          <span>Honest Self-Assessment: </span>I had far less time to work on
          this than I would have preferred. With a newborn at home, I was only
          able to devote about an hour or so each day.
        </p>
      </div>
      <div classname="socialMedia">
        <a href="http://www.josephmyoung.com">
          <img id="socialIcon" src={website} />
        </a>
        <a href="https://github.com/musicjoeyoung">
          <img id="socialIcon" src={github} />
        </a>
        <a href="https://twitter.com/musicjoeyoung">
          <img id="socialIcon" src={twitter} />
        </a>
        <a href="https://www.linkedin.com/in/joseph-m-young/">
          <img id="socialIcon" src={linkedin} />
        </a>
      </div>
    </div>
  );
}
