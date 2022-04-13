import React, { useState } from "react";

function Tweet() {
  const [tweetText, setTweetText] = useState("");

  function handleChange(e) {
    setTweetText(e.target.value);
  }

  function clickHandler() {
    console.log(tweetText);
  }

  let shouldBeDisabled = tweetText.length <= 0 || tweetText.length >= 151;

  return (
    <div>
      Tweet
      <br />
      <input type="text" value={tweetText} onChange={handleChange} />
      <button disabled={shouldBeDisabled} onClick={clickHandler}>
        Tweet
      </button>
    </div>
  );
}

export default Tweet;
