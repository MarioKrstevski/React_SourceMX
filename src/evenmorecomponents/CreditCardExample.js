import React, { useEffect, useRef, useState } from "react";
export default function CC() {
  const [cc, setCC] = useState("");
  const [cvc, setCVC] = useState("");

  let cvcRef = useRef();
  let btnRef = useRef();

  function handleChange(e) {
    setCC(e.target.value);
  }
  function handleCVCChange(e) {
    setCVC(e.target.value);
  }

  //cc logic
  useEffect(
    function () {
      if (cc.length === 16) {
        cvcRef.current.focus();
      }
    },
    [cc]
  );

  // cvc logic
  useEffect(
    function () {
      if (cvc.length === 3) {
        btnRef.current.focus();
        btnRef.current.click();
      }
    },
    [cvc]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="CreditCard number"
        value={cc}
        onChange={handleChange}
      />

      <input
        ref={cvcRef}
        type="text"
        placeholder="CVC number"
        value={cvc}
        onChange={handleCVCChange}
      />

      <button
        ref={btnRef}
        onClick={() => {
          console.log("is sent");
        }}
      >
        SEND
      </button>
    </div>
  );
}
