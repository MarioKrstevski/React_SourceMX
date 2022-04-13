import React, { useRef, useState } from "react";

function Ref() {
  let divRef = useRef();
  let buttonRef = useRef();

  return (
    <div>
      ref={divRef}
      <button
        ref={buttonRef}
        onClick={() => {
          console.log(divRef);
          console.log(buttonRef);
          buttonRef.current.style.color = "red";
        }}
      >
        click
      </button>
    </div>
  );
}

export default Ref;
