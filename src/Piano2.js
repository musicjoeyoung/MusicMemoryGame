import React, { useState } from "react";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import classnames from "classnames";
import Navbar from "./Navbar";
import { useHistory } from "react-router";
import { melody2 } from "./piano.fn";
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
  keyC2White,
  keyC2Yellow,
  keyG2Yellow,
  keyG2White,
  keyDb4White,
  keyEb3Yellow,
  keyEb4White,
  keyEb3White,
  keyB3Yellow,
  keyB3White,
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
  keyC2White,
  keyC2Yellow,
  keyG2Yellow,
  keyG2White,
  keyDb4White,
  keyEb3Yellow,
  keyEb4White,
  keyEb3White,
  keyB3Yellow,
  keyB3White,
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
    //keyE3Yellow();
    notes.length = 0;
  }
  function stopTutorial() {
    console.log("stop");
    notes.length = 0;
    clickStart = false;
  }
  const history = useHistory();
  function handleClick() {
    history.push("./piano3");
  }
  function keepTrack(note) {
    const lastNoteIndex = notes.length - 1;
    const correctNote = melody2notes[lastNoteIndex];

    if (!clickStart) return;

    if (note === correctNote) {
      const lastNote = lastNoteIndex === melody2notes.length - 1;

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

      const nextNote = melody2notes[lastNoteIndex + 1];
      keyPress[`key${note}White`]();
      keyPress[`key${nextNote}White`]();
    } else {
      notes.pop();
      const notification = alertify.notify(
        "Oops! Try again. (Also, hire me!)",
        "error",
        5,
        function () {
          console.log("dismissed");
        }
      );
      return notification;
    }
  }

  //this will be what is compared against what the user enters
  let melody2notes = ["E3", "C3", "Eb3", "B3", "Db4", "G2", "C2"];

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

  const keyboard2 = keys.map(({ note, color, className }) => (
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
        <h2>Advanced</h2>
        <button onClick={melody2}>Play Melody</button>
        <div className="pianoPage">{keyboard2}</div>
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
