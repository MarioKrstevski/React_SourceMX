import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

function Context() {
  let theme = useContext(ThemeContext);

  // use context

  return <div>Context {theme} </div>;
}

export default Context;
