import React from "react";

export default function Instructions() {
  return (
    <div className="instructions">
      <h2 id="instructionsTitle">Instructions</h2>
      <div className="instructionText">
        <p>
          <span>Goal: </span>The goal is to get playback, from memory, the
          melody that is played. The melodies will become increasingly more
          difficult to remember as they will include more notes and will be
          played at faster tempos.
        </p>
        <p>
          <span>How to Play: </span>Press "play" to hear (and see) a melody. You
          can play it as many times as you wish. Do your best to remember the
          melody and when you're ready, press "Begin Testing Your Memory!"
          <br />
          From there, begin to play (by <i>clicking</i>) the melody on the
          piano. You be alerted if you play a wrong note. Once you play the
          melody correctly, good job: try a more difficult melody!
        </p>
        <br />
        When you're finished entering the melody, just click "End Testing
        Memory"
        <p>
          **Rhythm does not matter. If a melody has rhythm(s) in it when you
          listen to it, you do not need to replicate that rhythm to get the
          correct answer. You only need to playback the correct notes in correct
          order.
        </p>
      </div>
    </div>
  );
}
