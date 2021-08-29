import React from "react";

export default function Instructions() {
  return (
    <div className="instructions">
      <h2 id="instructionsTitle">Instructions</h2>
      <div className="instructionText">
        <p id="goal">
          <span>Goal: </span>The goal is to get playback, from memory, the
          melody that is played. The melodies will become increasingly more
          difficult to remember as they will include more notes and will be
          played at faster tempos.
        </p>
        <p id="howToPlay">
          <span>How to Play: </span>To first hear (and see) the melody you'll
          need to try and remember, press "Play Melody." You can play it as many
          times as you wish. (Then the melody will play!) Do your best to
          remember the melody and when you're ready, press "Begin Testing Your
          Memory!"
          <br />
          <br />
          From there, begin to play <i>(by clicking)</i> the melody on the
          piano. You will be alerted if you play a wrong note.
          <br />
          <br />
          <i>
            **The game is tracking each note you click, so if you want to "wipe
            the slate clean" and start over, you can click "Reset" and then
            click "Begin Testing Your Memory" again to resume playing.
          </i>
          <br />
          <br />
          Once you play the melody correctly, good job: try a more difficult
          melody!
          <br />
          <br />
          <i>
            **Rhythm does not matter. If a melody has rhythm(s) when you listen
            to it, you do not need to replicate that rhythm to get the correct
            answer. You only need to playback the correct notes in correct
            order.
          </i>
          When you're finished entering the melody, just click "Reset"
          <br />
          <br />
          <i>
            **Rhythm does not matter. If a melody has rhythm(s) in it when you
            listen to it, you do not need to replicate that rhythm to get the
            correct answer. You only need to playback the correct notes in
            correct order.
          </i>
          <br />
          <br />
          <i>
            ***At the moment, this game is best visualized with a minimum window
            width of 900px.
          </i>
        </p>
      </div>
    </div>
  );
}
