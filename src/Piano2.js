import React, { useState } from "react";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import classnames from "classnames";

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
  const keyCodeNumbers = {
    90: "C2",
    88: "D2",
    68: "Eb2",
    67: "E2",
    86: "F2",
    71: "Gb2",
    66: "G2",
    72: "Ab2",
    78: "A2",
    74: "Bb2",
    77: "B2",
    81: "C3",
    50: "Db3",
    87: "D3",
    51: "Eb3",
    69: "E3",
    82: "F3",
    53: "Gb3",
    84: "G3",
    54: "Ab3",
    89: "A3",
    55: "Bb3",
    85: "B3",
    73: "C4",
    57: "Db4",
    79: "D4",
    48: "Eb4",
    80: "E4",
    219: "F4",
    187: "Gb4",
    221: "G4",
    8: "Ab4",
    220: "A4",
  };
  window.addEventListener("keydown", key);
  function key(event) {
    const note = keyCodeNumbers[event.keyCode];
    if (note) {
      playNote(note);
    }
  }
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
    keyC3White();
    keyD3White();
    keyE3White();
    keyG3White();
    notes.length = 0;
    clickStart = false;
  }

  function keepTrack(note) {
    const lastNoteIndex = notes.length - 1;
    const correctNote = melody2notes[lastNoteIndex];

    if (!clickStart) return;

    if (note === correctNote) {
      const lastNote = lastNoteIndex === melody2notes.length - 1;

      if (lastNote) {
        const success = alertify.success("YAY!");
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
  let melody2notes = ["E3", "D3", "C3", "Eb3", "B3", "Db4", "G2", "C2"];

  const keys = [
    { note: "C2", label: "Z", color: "white" },
    { note: "Db2", label: "S", color: "black" },
    { note: "D2", label: "X", color: "white" },
    { note: "Eb2", label: "D", color: "black" },
    { note: "E2", label: "C", color: "white" },
    { note: "F2", label: "V", color: "white" },
    { note: "Gb2", label: "G", color: "black" },
    { note: "G2", label: "B", color: "white" },
    { note: "Ab2", label: "H", color: "black" },
    { note: "A2", label: "N", color: "white" },
    { note: "Bb2", label: "J", color: "black" },
    { note: "B2", label: "M", color: "white" },
    { note: "C3", label: "Q", color: "white" },
    { note: "Db3", label: "2", color: "black" },
    { note: "D3", label: "W", color: "white" },
    { note: "Eb3", label: "3", color: "black" },
    { note: "E3", label: "E", color: "white" },
    { note: "F3", label: "R", color: "white" },
    { note: "Gb3", label: "5", color: "black" },
    { note: "G3", label: "T", color: "white" },
    { note: "Ab3", label: "6", color: "black" },
    { note: "A3", label: "Y", color: "white" },
    { note: "Bb3", label: "7", color: "black" },
    { note: "B3", label: "U", color: "white" },
    { note: "C4", label: "I", color: "white" },
    { note: "Db4", label: "9", color: "black" },
    { note: "D4", label: "O", color: "white" },
    { note: "Eb4", label: "0", color: "black" },
    { note: "E4", label: "P", color: "white" },
    { note: "F4", label: "[", color: "white" },
    { note: "Gb4", label: "=", color: "black" },
    { note: "G4", label: "]", color: "white" },
    { note: "Ab4", label: "bk", color: "black" },
    { note: "A4", label: "/", color: "white" },
    { note: "Bb4", label: "", color: "black" },
    { note: "B4", label: "", color: "white" },
  ];

  const keyboard2 = keys.map(({ note, label, color, className }) => (
    <div
      key={`unique${note}`}
      className={classnames(`${color}-key`, className)}
      onClick={playNote}
      id={note}
    ></div>
  ));

  return (
    <div className="pianoOuterDiv">
      <button onClick={melody2}>melody 2</button>
      <div className="pianoPage">{keyboard2}</div>
      <button
        id="tutorialBtn"
        disabled={clickStart && "true"}
        onClick={startTutorial}
      >
        Begin Testing Your Memory!
      </button>
      <button id="tutorialBtn" onClick={stopTutorial}>
        End Testing Memory & Just Jam!
      </button>
      {congratulations}
    </div>
  );
};

export default Piano;
