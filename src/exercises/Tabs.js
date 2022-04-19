import React from "react";
import { useState } from "react";

export default function Tab(props) {
  //   let startingFrom =
  //     props.startingTab > tabsArray.length ? tabsArray.length : props.startingTab;
  const [activeTab, setActiveTab] = useState(props.startingTab);

  return (
    <div className="tab-component">
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
