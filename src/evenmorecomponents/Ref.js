import React, { useRef, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: ${({ bg }) => (bg ? bg : "papayawhip")};
`;

function Ref() {
  let divRef = useRef();
  let buttonRef = useRef();

  return (
    <div ref={divRef}>
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

      <Wrapper>
        <Title> Hello World!</Title>
      </Wrapper>
    </div>
  );
}

export default Ref;
