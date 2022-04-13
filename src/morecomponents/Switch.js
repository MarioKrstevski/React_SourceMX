import React, { useState } from "react";

function Switch() {
  const [isOn, setIsOn] = useState(false);

  function clickHandler() {
    setIsOn(!isOn);
  }

  let onImg =
    "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/lightbulb_on.png";
  let offImg = "https://freesvg.org/img/afaulconbridge-Lightbulb-OnOff-2.png";

  return (
    <div>
      Switch
      <br />
      
      {isOn ? (
        <img width={140} height={140} src={onImg} alt="Drug Text" />
      ) : (
        <img width={200} height={200} src={offImg} alt="Light Bulb" />
      )}

      <img
        width={200}
        height={200}
        src={isOn ? onImg : offImg}
        alt="Light Bulb"
      />
      <button onClick={clickHandler}>Toggle {isOn ? "OFF" : "ON"}</button>
    </div>
  );
}

export default Switch;
