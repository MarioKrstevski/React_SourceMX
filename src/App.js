import React from "react";
import MultipleNumbers from "./components/MultipleNumbers";
import ArrayNumbers from "./components/ArrayNumbers";
import ArrayNames from "./components/ArrayNames";
import ArrayObjects from "./components/ArrayObjects";
import Counter from "./components/Counter";
import "./App.css";
import ArraysWithKeys from "./components/ArraysWithKeys";
import Incrementor from "./components/Incrementor";
import ImePrezime from "./components/ImePrezime";
import InputField from "./components/InputField";
import ConditionalRendering from "./morecomponents/ConditionalRendering";
import Tweet from "./morecomponents/Tweet";
import Switch from "./morecomponents/Switch";
import LoadingData from "./morecomponents/LoadingData";
import ParentChild from "./evenmorecomponents/ParentChild";

// React.createElement() === JSX
// Rules:
// must return only one element
// must use className prop for adding class
// attributes in html, here are props
// props on a component can be used inside the component as function arguments
// Every component has only one argument, props which is an object
// Inside props we can find every properties that we passed as key value pairs
// if we are using arrays we must have a key prop

function App() {
  return (
    <div className="App-header">
      {/* <MultipleNumbers />
      <ArrayNumbers />
      <ArrayNames />
      <ArrayObjects /> */}
      {/* <ArraysWithKeys /> */}
      {/* <Counter />
      <Counter />
      <Counter /> */}
      {/* <Incrementor startingFrom={20} />
      <Incrementor startingFrom={-55} /> */}
      {/* <ImePrezime name={"Mario"} surname={'Krstevski'} age={26}/> */}
      {/* <InputField /> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <Tweet /> */}
      {/* <Switch></Switch> */}

      <ParentChild />

      {/* <LoadingData></LoadingData> */}
    </div>
  );
}

export default App;
