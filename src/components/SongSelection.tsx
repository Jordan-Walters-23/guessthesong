import React from "react";

function SongSelection() {
  return (
    <>
      <h1>Have a guess</h1>
      <label>
        <input type="radio" name="myRadio" value="Song1" /> Song 1
      </label>
      <label>
        <input
          type="radio"
          name="myRadio"
          value="Song2"
          defaultChecked={true}
        />{" "}
        Song 2
      </label>
      <label>
        <input type="radio" name="myRadio" value="Song3" /> Song 3
      </label>
      <label>
        <input type="radio" name="myRadio" value="Song4" /> Song 4
      </label>
      <label>
        <input type="radio" name="myRadio" value="Song5" /> Song 5
      </label>
    </>
  );
}

export default SongSelection;
