import * as Tone from "tone";

export function playNote(note) {
  const piano = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  Tone.loaded().then(() => {
    piano.triggerAttackRelease(`${note}`, 4); //use this number to add a sustain option
  });
  console.log(note);
}
export function melody1() {
  const piano = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  const now = Tone.now();
  Tone.loaded().then(() => {
    keyE3Yellow();
    piano.triggerAttack("E3", now); //use this number to add a sustain option
    setTimeout(function () {
      keyE3White();
    }, 1000);

    setTimeout(function () {
      keyD3Yellow();
    }, 1000);
    piano.triggerAttack("D3", now + 1);
    setTimeout(function () {
      keyD3White();
    }, 2000);

    setTimeout(function () {
      keyC3Yellow();
    }, 2000);
    piano.triggerAttack("C3", now + 2);
    setTimeout(function () {
      keyC3White();
    }, 3000);

    piano.triggerRelease(["E3", "D3", "C3"], now + 4);
  });
  //console.log(note);
}
export function keyE3Yellow() {
  const E3 = document.getElementById("E3");
  E3.style.backgroundColor = "yellow";
}
export function keyE3White() {
  const E3 = document.getElementById("E3");
  E3.style.removeProperty("background");
}
export function keyD3Yellow() {
  const D3 = document.getElementById("D3");
  D3.style.backgroundColor = "yellow";
}
export function keyD3White() {
  const D3 = document.getElementById("D3");
  D3.style.removeProperty("background");
}
export function keyC3Yellow() {
  const C3 = document.getElementById("C3");
  C3.style.backgroundColor = "yellow";
}
export function keyC3White() {
  const C3 = document.getElementById("C3");
  C3.style.removeProperty("background");
}
export function keyG3Yellow() {
  const G3 = document.getElementById("G3");
  G3.style.backgroundColor = "yellow";
}
export function keyG3White() {
  const G3 = document.getElementById("G3");
  G3.style.removeProperty("background");
}
