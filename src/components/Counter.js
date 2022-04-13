import React, { useState } from "react";
import PropTypes from "prop-types";

// if(prev !== current){
//     rerender()
// }

// if({} !== {})

function Counter() {
  console.log(PropTypes.string);
  const [counter, setCounter] = useState(0);
  //  let counter = 0
  const [name, setName] = useState("Mario");

  const [user, setUser] = useState({
    name: "Mario",
    age: 26,
    address: "Oktomvriska",
  });

  function increase() {
    console.log(counter);
    setCounter(counter + 1);
    // prefer not to use counter++
    //   setCounter(function (counter) {
    //     return counter + 1;
    //   });
    // counter++;
    // document.body.innerHTML = counter;
  }

  const buttonStyles = {
    margin: 10,
    padding: "8px 10px",
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <div>
      <div>Count: {counter}</div>
      <div>Name: {name}</div>
      <div>Age: {user.age}</div>
      <button onClick={increase} style={buttonStyles}>
        +
      </button>
      <button onClick={() => setName(name.slice(0, -1))} style={buttonStyles}>
        Cut
      </button>
      <button
        onClick={() => setUser({ ...user, age: user.age + 1 })}
        style={buttonStyles}
      >
        Birthday
      </button>
    </div>
  );
}

// let counter = 5;
// function increase() {
//   counter++;
//   document.body.innerHTML = counter;
// }
// button.onclick = increase;

export default Counter;
