import React from "react";
import Number from "./Number";

function ArrayNumbers() {
  let numbers = [1, 2, 3, 4, 5];

  let countersArray = numbers.map((num, idx) => (
    <Number key={num} number={num} />
    //imagine it as: Counter({key: num, number:num})
  ));

  return <React.Fragment>{countersArray}</React.Fragment>;
//   return <>{countersArray}</>;

  return (
    <div>
      {numbers.map((num, idx) => (
        <Number key={num} number={num} />
        //imagine it as: Counter({key: num, number:num})
      ))}
    </div>
  );
}

export default ArrayNumbers;
