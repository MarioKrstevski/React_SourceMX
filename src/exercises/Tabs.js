import React from "react";
import { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1);

 

  return (
    <div className="tab-component">
      <div id="tabs-items">
        <ul>
          <li onClick={() => setActiveTab(1)}>Tab 1</li>
          <li onClick={() => setActiveTab(2)}>Tab 2</li>
          <li onClick={() => setActiveTab(3)}>Tab 3</li>
        </ul>
      </div>
      <div id="tabs-content">
        {activeTab === 1 && <div class="tab-pane">Contents for tab 1</div>}
        {activeTab === 2 && <div class="tab-pane">Contents for tab 2</div>}
        {activeTab === 3 && <div class="tab-pane">Contents for tab 3</div>}
      </div>

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
