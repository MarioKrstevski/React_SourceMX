import React, { useState } from "react";

function ConditionalRendering() {
  let isLoggedIn = true;
  let age = 19;
  let gender = "female";
  let user = {
      location: "Macedonia"
  }

  let fontColorCSS = {
    color: gender === "male" ? "blue" : "pink",
  };

  let AllowedView = ({ language: lang }) => (
    <div style={fontColorCSS}>
      {lang === "it" ? "Mostra il sito web" : "Show website"}
      <input type="text" />
      <button>Send</button>
    </div>
  );

  let forbiddenView = <div>Block screen</div>;

  if (!isLoggedIn) {
    return <div>Log in</div>;
  }

  if (age > 17) {
    return <AllowedView language={user.location === "italy" ? "it" : "en"} />;
  }

  return forbiddenView;
}

export default ConditionalRendering;
