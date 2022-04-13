import React from "react";

function ArrayNames() {
  let names = ["Kiril", "Igor", "Ivona", "Stefan"];

  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default ArrayNames;
