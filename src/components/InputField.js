import React, { useState } from "react";

function InputField() {
  const [textValue, setTextValue] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div>
      <div>
        Todo List
      </div>
      <input
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
        type="text"
      />

     { items.length ? <ul>
        {items.map((item, idx) => {
          return <li key={item + idx}>{item}</li>;
        })}
      </ul> : <div>Write something and click the button to add items in a list</div> }

      {items.length >=5 && <div> Having more than 5 items is not advisable for young children </div>}

        {/* true false */}
      {Boolean(items.length) && <div> Conditional </div>}


      <button
        onClick={() => {
          if (textValue) {
            setItems([textValue, ...items]);
          }
          setTextValue("");
        }}
      >
        Add item
      </button>
    </div>
  );
}

export default InputField;
