import React from "react";
import { useState } from "react";

let mapping = {
  mario: "Contents for mario",
  stefan: "Contents for stefan",
  tamara: "Contents for tamara",
};

const tabsArray = ["Mario", "Stefan", "Tamara"];
const tabContentsArray = ["CF Mario", "CF Stefan", "CF Tamara"];

export default function Tab() {
  const [activeTab, setActiveTab] = useState("mario");

  //   let mapping = {
  //     1: <div class="tab-pane">Contents for tab 1</div>,
  //     2: <div class="tab-pane">Contents for tab 2</div>,
  //     3: <div class="tab-pane">Contents for tab 3</div>,
  //   };

  //   function renderCorrespondingTabContent(aT) {
  //     return mapping[aT];
  //   }

  return (
    <div className="tab-component">
      <div id="tabs-items">
        <ul>
          {[
            Object.keys(mapping).map((name) => (
              <li onClick={() => setActiveTab(name.toLocaleLowerCase())}>
                {name}
              </li>
            )),
          ]}
        </ul>
      </div>
      <div id="tabs-content">
        <div className="tab-pane">{mapping[activeTab]}</div>
        {/* {activeTab === "mario" && (
          <div class="tab-pane">Contents for Mario </div>
        )}
        {activeTab === "stefan" && (
          <div class="tab-pane">Contents for Stefan</div>
        )}
        {activeTab === "tamara" && (
          <div class="tab-pane">Contents for Tamara</div>
        )} */}
      </div>

      {/* <div id="tabs-content">{renderCorrespondingTabContent(activeTab)}</div> */}

      {/* <div id="tabs-content">
        <div class={`tab-pane ${activeTab === 1 ? "active" : "hidden"}`}>
          Contents for tab 1
        </div>
        <div class={`tab-pane ${activeTab === 2 ? "active" : "hidden"}`}>
          Contents for tab 1
        </div>
        <div class={`tab-pane ${activeTab === 3 ? "active" : "hidden"}`}>
          Contents for tab 1
        </div>
      </div> */}
    </div>
  );
}
