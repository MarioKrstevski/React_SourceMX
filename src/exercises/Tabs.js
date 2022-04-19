import React from "react";
import { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("m");

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
          <li onClick={() => setActiveTab("m")}>Mario</li>
          <li onClick={() => setActiveTab("s")}>Stefan</li>
          <li onClick={() => setActiveTab("t")}>Tamara</li>
        </ul>
      </div>
      <div id="tabs-content">
        {activeTab === "m" && <div class="tab-pane">Contents for Mario </div>}
        {activeTab === "s" && <div class="tab-pane">Contents for Stefan</div>}
        {activeTab === "t" && <div class="tab-pane">Contents for Tamara</div>}
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
