import React from "react";
import { useState } from "react";

function Tab(props) {
  //   let startingFrom =
  //     props.startingTab > tabsArray.length ? tabsArray.length : props.startingTab;
  const [activeTab, setActiveTab] = useState(props.startingTab);

  return (
    <div className="tab-component">
      <h1>{props.greeting}</h1>
      <div id="tabs-items">
        <ul>
          {props.tabsArray.map((name, index) => (
            <li onClick={() => setActiveTab(index + 1)}>{name}</li>
          ))}
        </ul>
      </div>
      <div id="tabs-content">
        <div className="tab-pane">{props.tabContentsArray[activeTab - 1]}</div>
      </div>
    </div>
  );
}

Tab.defaultProps = {
  greeting: "Hello World",
};

export default Tab;
