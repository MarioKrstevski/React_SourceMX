import React, { useState } from "react";
import style from "./Tweet.module.css";

function Tweet() {
  console.log(style);

  const [tweetText, setTweetText] = useState("");

  function handleChange(e) {
    setTweetText(e.target.value);
  }

  function clickHandler() {
    console.log(tweetText);
  }

  let shouldBeDisabled = tweetText.length <= 0 || tweetText.length >= 151;

  return (
    <div className={style.tweet} style={{ color: "white" }}>
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
