import { useState } from "react";

export function useToggle(initialState = false) {
  const [isOn, setIsOn] = useState(initialState);

  function toggle() {
    setIsOn(!isOn);
  }

  return {
    isOn,
    toggle,
  };
}
