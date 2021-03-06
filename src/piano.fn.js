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

/////////////

export function melody2(note) {
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
      keyC3Yellow();
    }, 1000);
    piano.triggerAttack("C3", now + 1);
    setTimeout(function () {
      keyC3White();
    }, 2000);

    setTimeout(function () {
      keyEb3Yellow();
    }, 2000);
    piano.triggerAttack("Eb3", now + 2);
    setTimeout(function () {
      keyEb3White();
    }, 3000);

    setTimeout(function () {
      keyB3Yellow();
    }, 3000);
    piano.triggerAttack("B3", now + 3);
    setTimeout(function () {
      keyB3White();
    }, 4000);

    setTimeout(function () {
      keyDb4Yellow();
    }, 4000);
    piano.triggerAttack("Db4", now + 4);
    setTimeout(function () {
      keyDb4White();
    }, 5000);

    setTimeout(function () {
      keyG2Yellow();
    }, 5000);
    piano.triggerAttack("G2", now + 5);
    setTimeout(function () {
      keyG2White();
    }, 6000);

    setTimeout(function () {
      keyC2Yellow();
    }, 6000);
    piano.triggerAttack("C2", now + 6);
    setTimeout(function () {
      keyC2White();
    }, 7000);

    piano.triggerRelease(["E3", "C3", "Eb3", "B3", "Db4", "G2", "C2"], now + 8);
  });
  console.log(note);
}

///////////

export function melody3(note) {
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
    }, 500);

    setTimeout(function () {
      keyC3Yellow();
    }, 500);
    piano.triggerAttack("C3", now + 0.5);
    setTimeout(function () {
      keyC3White();
    }, 1000);

    setTimeout(function () {
      keyEb3Yellow();
    }, 1000);
    piano.triggerAttack("Eb3", now + 1);
    setTimeout(function () {
      keyEb3White();
    }, 1500);

    setTimeout(function () {
      keyB3Yellow();
    }, 1500);
    piano.triggerAttack("B3", now + 1.5);
    setTimeout(function () {
      keyB3White();
    }, 2000);

    setTimeout(function () {
      keyDb4Yellow();
    }, 2000);
    piano.triggerAttack("Db4", now + 2);
    setTimeout(function () {
      keyDb4White();
    }, 2500);

    setTimeout(function () {
      keyG2Yellow();
    }, 2500);
    piano.triggerAttack("G2", now + 2.5);
    setTimeout(function () {
      keyG2White();
    }, 3000);

    setTimeout(function () {
      keyC2Yellow();
    }, 3000);
    piano.triggerAttack("C2", now + 3);
    setTimeout(function () {
      keyC2White();
    }, 3500);

    setTimeout(function () {
      keyDb4Yellow();
    }, 3500);
    piano.triggerAttack("Db4", now + 3.5);
    setTimeout(function () {
      keyDb4White();
    }, 4000);

    setTimeout(function () {
      keyG2Yellow();
    }, 4000);
    piano.triggerAttack("G2", now + 4);
    setTimeout(function () {
      keyG2White();
    }, 4500);

    setTimeout(function () {
      keyC2Yellow();
    }, 4500);
    piano.triggerAttack("C2", now + 4.5);
    setTimeout(function () {
      keyC2White();
    }, 5000);

    piano.triggerRelease(
      ["E3", "C3", "Eb3", "B3", "Db4", "G2", "C2", "Db4", "G2", "C2"],
      now + 6
    );
  });
  console.log(note);
}

//////////

export function melody4(note) {
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
    keyA3Yellow();
    piano.triggerAttack("A3", now); //use this number to add a sustain option
    setTimeout(function () {
      keyA3White();
    }, 500);

    setTimeout(function () {
      keyDb2Yellow();
    }, 500);
    piano.triggerAttack("Db2", now + 0.5);
    setTimeout(function () {
      keyDb2White();
    }, 1000);

    setTimeout(function () {
      keyF4Yellow();
    }, 1000);
    piano.triggerAttack("F4", now + 1);
    setTimeout(function () {
      keyF4White();
    }, 1500);

    setTimeout(function () {
      keyDb4Yellow();
    }, 1500);
    piano.triggerAttack("Db4", now + 1.5);
    setTimeout(function () {
      keyDb4White();
    }, 2000);

    setTimeout(function () {
      keyG2Yellow();
    }, 2000);
    piano.triggerAttack("G2", now + 2);
    setTimeout(function () {
      keyG2White();
    }, 2500);

    setTimeout(function () {
      keyC2Yellow();
    }, 2500);
    piano.triggerAttack("C2", now + 2.5);
    setTimeout(function () {
      keyC2White();
    }, 3000);

    setTimeout(function () {
      keyE3Yellow();
    }, 3000);
    piano.triggerAttack("E3", now + 3);
    setTimeout(function () {
      keyE3White();
    }, 3500);

    setTimeout(function () {
      keyC3Yellow();
    }, 3500);
    piano.triggerAttack("C3", now + 3.5);
    setTimeout(function () {
      keyC3White();
    }, 4000);

    setTimeout(function () {
      keyB3Yellow();
    }, 4000);
    piano.triggerAttack("B3", now + 4);
    setTimeout(function () {
      keyB3White();
    }, 4500);

    setTimeout(function () {
      keyDb4Yellow();
    }, 4500);
    piano.triggerAttack("Db4", now + 4.5);
    setTimeout(function () {
      keyDb4White();
    }, 5000);

    setTimeout(function () {
      keyG2Yellow();
    }, 5000);
    piano.triggerAttack("G2", now + 5);
    setTimeout(function () {
      keyG2White();
    }, 5500);

    setTimeout(function () {
      keyDb4Yellow();
    }, 5500);
    piano.triggerAttack("Db4", now + 5.5);
    setTimeout(function () {
      keyDb4White();
    }, 6000);

    setTimeout(function () {
      keyAb2Yellow();
    }, 6000);
    piano.triggerAttack("Ab2", now + 6);
    setTimeout(function () {
      keyAb2White();
    }, 6500);

    setTimeout(function () {
      keyC4Yellow();
    }, 6500);
    piano.triggerAttack("C4", now + 6.5);
    setTimeout(function () {
      keyC4White();
    }, 7000);

    piano.triggerRelease(
      [
        "A3",
        "Db2",
        "F4",
        "Db4",
        "G2",
        "C2",
        "E3",
        "C3",
        "B3",
        "Db4",
        "G2",
        "Db4",
        "Ab2",
        "C4",
      ],
      now + 8
    );
  });
  console.log(note);
}

//////////

export function keyC2White() {
  const C2 = document.getElementById("C2");
  C2.style.removeProperty("background");
}
export function keyC2Yellow() {
  const C2 = document.getElementById("C2");
  C2.style.backgroundColor = "yellow";
}
export function keyG2Yellow() {
  const G2 = document.getElementById("G2");
  G2.style.backgroundColor = "yellow";
}
export function keyG2White() {
  const G2 = document.getElementById("G2");
  G2.style.removeProperty("background");
}
export function keyB3Yellow() {
  const B3 = document.getElementById("B3");
  B3.style.backgroundColor = "yellow";
}
export function keyB3White() {
  const B3 = document.getElementById("B3");
  B3.style.removeProperty("background");
}
export function keyC3Yellow() {
  const C3 = document.getElementById("C3");
  C3.style.backgroundColor = "yellow";
}
export function keyC3White() {
  const C3 = document.getElementById("C3");
  C3.style.removeProperty("background");
}
export function keyD3Yellow() {
  const D3 = document.getElementById("D3");
  D3.style.backgroundColor = "yellow";
}
export function keyD3White() {
  const D3 = document.getElementById("D3");
  D3.style.removeProperty("background");
}
export function keyEb3White() {
  const Eb3 = document.getElementById("Eb3");
  Eb3.style.removeProperty("background");
}
export function keyEb3Yellow() {
  const Eb3 = document.getElementById("Eb3");
  Eb3.style.backgroundColor = "yellow";
}
export function keyE3Yellow() {
  const E3 = document.getElementById("E3");
  E3.style.backgroundColor = "yellow";
}
export function keyE3White() {
  const E3 = document.getElementById("E3");
  E3.style.removeProperty("background");
}
export function keyG3Yellow() {
  const G3 = document.getElementById("G3");
  G3.style.backgroundColor = "yellow";
}
export function keyG3White() {
  const G3 = document.getElementById("G3");
  G3.style.removeProperty("background");
}
export function keyDb4Yellow() {
  const Db4 = document.getElementById("Db4");
  Db4.style.backgroundColor = "yellow";
}
export function keyDb4White() {
  const Db4 = document.getElementById("Db4");
  Db4.style.removeProperty("background");
}
export function keyEb4White() {
  const Eb4 = document.getElementById("Eb4");
  Eb4.style.removeProperty("background");
}
export function keyA3Yellow() {
  const A3 = document.getElementById("A3");
  A3.style.backgroundColor = "yellow";
}
export function keyA3White() {
  const A3 = document.getElementById("A3");
  A3.style.removeProperty("background");
}
export function keyDb2Yellow() {
  const Db2 = document.getElementById("Db2");
  Db2.style.backgroundColor = "yellow";
}
export function keyDb2White() {
  const Db2 = document.getElementById("Db2");
  Db2.style.removeProperty("background");
}
export function keyF4Yellow() {
  const F4 = document.getElementById("F4");
  F4.style.backgroundColor = "yellow";
}
export function keyF4White() {
  const F4 = document.getElementById("F4");
  F4.style.removeProperty("background");
}
export function keyAb2Yellow() {
  const Ab2 = document.getElementById("Ab2");
  Ab2.style.backgroundColor = "yellow";
}
export function keyAb2White() {
  const Ab2 = document.getElementById("Ab2");
  Ab2.style.removeProperty("background");
}
export function keyC4Yellow() {
  const C4 = document.getElementById("C4");
  C4.style.backgroundColor = "yellow";
}
export function keyC4White() {
  const C4 = document.getElementById("C4");
  C4.style.removeProperty("background");
}
