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
        <img id="bioImg" src={joeyoung} alt="headshot of Joe Young" />
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
          <span>Goals: </span>Right now there isn't true "win/lose" conditions,
          but rather "good job/wrong answer" conditions. I plan adding the
          functionality that keeps track of wrong guesses, apply a limit to them
          (before the user has to start over), and keep track of how many
          melodies they got right or wrong.
          <br />
          Visually the user will not be able to view the next level of melodies
          until successfully completing the prior one.
          <br />A function will be added that will randomly generate melodies as
          to not have to manually create them and muddy up the code.
          <br />
          Users will be able to save their progress and resume their progression
          at any time.
        </p>
      </div>
      <div className="socialMedia">
        <a href="http://www.josephmyoung.com">
          <img id="socialIcon" src={website} alt="social media icon: website" />
        </a>
        <a href="https://github.com/musicjoeyoung">
          <img id="socialIcon" src={github} alt="social media icon: github" />
        </a>
        <a href="https://twitter.com/musicjoeyoung">
          <img id="socialIcon" src={twitter} alt="social media icon: twitter" />
        </a>
        <a href="https://www.linkedin.com/in/joseph-m-young/">
          <img
            id="socialIcon"
            src={linkedin}
            alt="social media icon: linkedin"
          />
        </a>
      </div>
    </div>
  );
}
