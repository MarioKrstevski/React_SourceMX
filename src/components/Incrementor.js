import React, { useState } from "react";

function Incrementor(props) {
  const [state, setState] = useState(props.startingFrom);

  function incByOne() {
    setState(state + 1);
  }

  function incByTwo() {
    setState(state + 2);
  }

  function incByThree() {
    setState(state + 3);
  }

  return (
    <div> 
      <div> Brojka: {state} </div>
      <button onClick={incByOne}>+ 1</button>
      <button onClick={incByTwo}>+ 2</button>
      <button onClick={incByThree}>+ 3</button>
    </div>
  );
}

export default Incrementor;
