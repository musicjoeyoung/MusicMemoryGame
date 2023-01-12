import React, { useState } from "react";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import classnames from "classnames";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import { melody1 } from "./piano.fn";

//https://replit.com/@musicjoeyoung/RandomSetRangeGenerator#index.js
//Look at this number generator to possibly utilize for randomly generating notes to use.

import {
  playNote as pianoPlayNote,
  keyE3Yellow,
  keyE3White,
  keyD3Yellow,
  keyD3White,
  keyC3Yellow,
  keyC3White,
  keyG3Yellow,
  keyG3White,
} from "./piano.fn";
const keyPress = {
  keyE3Yellow,
  keyE3White,
  keyD3Yellow,
  keyD3White,
  keyC3Yellow,
  keyC3White,
  keyG3Yellow,
  keyG3White,
};
/* let click = 0; */
const Piano = () => {
  const [congratulations] = useState(null);

  const getNote = (noteOrEvent) => {
    let note = noteOrEvent;

    if (typeof note !== "string") {
      let { target } = noteOrEvent;

      if (target.nodeName !== "DIV") {
        target = target.parentNode;
      }
      note = target.id;
    }

    return note;
  };

  const playNote = (note) => {
    note = getNote(note);
    notes.push(note);
    pianoPlayNote(note);
    keepTrack(note);
    console.log("Played notes", notes);
  };

  let clickStart = false;

  const notes = [];

  function startTutorial() {
    console.log("start tutorial click = ", clickStart);
    clickStart = true;
    notes.length = 0;
  }
  function stopTutorial() {
    console.log("stop");
    keyC3White();
    keyD3White();
    keyE3White();
    keyG3White();
    notes.length = 0;
    clickStart = false;
  }
  const history = useHistory();
  function handleClick() {
    history.push("./piano2");
  }
  function keepTrack(note) {
    const lastNoteIndex = notes.length - 1;
    const correctNote = melody1notes[lastNoteIndex];

    if (!clickStart) return;

    if (note === correctNote) {
      const lastNote = lastNoteIndex === melody1notes.length - 1;

      if (lastNote) {
        const success =
          alertify.success("YAY!") &&
          setTimeout(function () {
            if (window.confirm("Let's move on to the next one!")) {
              handleClick();
            }
          }, 2000);
        return success && note.length === 0;
      }

      const nextNote = melody1notes[lastNoteIndex + 1];
      keyPress[`key${note}White`]();
      keyPress[`key${nextNote}White`]();
    } else {
      notes.pop();
      const notification = alertify.notify(
        "Aww, shucks. Wrong note. Try again! You are now obligated to hire me.",
        "error",
        5,
        function () {
          console.log("dismissed");
        }
      );
      return notification;
    }
  }

  const keys = [
    { note: "C2", color: "white" },
    { note: "Db2", color: "black" },
    { note: "D2", color: "white" },
    { note: "Eb2", color: "black" },
    { note: "E2", color: "white" },
    { note: "F2", color: "white" },
    { note: "Gb2", color: "black" },
    { note: "G2", color: "white" },
    { note: "Ab2", color: "black" },
    { note: "A2", color: "white" },
    { note: "Bb2", color: "black" },
    { note: "B2", color: "white" },
    { note: "C3", color: "white" },
    { note: "Db3", color: "black" },
    { note: "D3", color: "white" },
    { note: "Eb3", color: "black" },
    { note: "E3", color: "white" },
    { note: "F3", color: "white" },
    { note: "Gb3", color: "black" },
    { note: "G3", color: "white" },
    { note: "Ab3", color: "black" },
    { note: "A3", color: "white" },
    { note: "Bb3", color: "black" },
    { note: "B3", color: "white" },
    { note: "C4", color: "white" },
    { note: "Db4", color: "black" },
    { note: "D4", color: "white" },
    { note: "Eb4", color: "black" },
    { note: "E4", color: "white" },
    { note: "F4", color: "white" },
    { note: "Gb4", color: "black" },
    { note: "G4", color: "white" },
    { note: "Ab4", color: "black" },
    { note: "A4", color: "white" },
    { note: "Bb4", color: "black" },
    { note: "B4", color: "white" },
  ];

  /*   const noteNames = [
    "E3",
    "D3",
    "C3",
    "E2",
    "D2",
    "C2",
    "E4",
    "D4",
    "C4",
    "E5",
    "D5",
    "C5",
  ]; */
  //this will be what is compared against what the user enters
  let melody1notes = ["E3", "D3", "C3"];
  /*   function getRandomSubarray(arr, size) {
    let shuffled = arr.slice(0),
      i = arr.length,
      temp,
      index;
    while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  }
  const fiveRandomMembers = getRandomSubarray(noteNames, 5);
  const melody1notes = fiveRandomMembers; */

  const keyboard = keys.map(({ note, color, className }) => (
    <div
      key={`unique${note}`}
      className={classnames(`${color}-key`, className)}
      onClick={playNote}
      id={note}
    ></div>
  ));

  return (
    <>
      <Navbar />
      <div className="pianoOuterDiv">
        <h2>Easy</h2>
        <button onClick={melody1}>Play Melody</button>
        <div className="pianoPage">{keyboard}</div>
        <button
          id="tutorialBtn"
          disabled={clickStart && "true"}
          onClick={startTutorial}
        >
          Begin Testing Your Memory!
        </button>
        <button id="tutorialBtn" onClick={stopTutorial}>
          Reset
        </button>
        {congratulations}
      </div>
    </>
  );
};

export default Piano;
