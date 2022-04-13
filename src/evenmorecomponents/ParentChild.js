import React, { useState } from "react";

// smart, class, state

// dumb, functional, stateless

function GrandChild(props) {
  const { name, surname } = props.user;
  return (
    <div style={{ border: "1px solid yellow" }}>
      <h2>This the grandchild</h2>
      <div>Name : {name}</div>
      <div>Surname : {surname}</div>
      <button onClick={props.updateSurname}>I am using updateSurname</button>
      <button
        onClick={() => {
          props.setUser(function (user) {
            return { ...user, name: "Dostoevski" };
          });

          //   OVIE DVE SE ISTI
          //   props.setUser(function () {
          //     return { ...user, name: "Dostoevski" };
          //   });

          //   props.setUser({ ...user, name: "Dostoevski" });
        }}
      >
        I am using setUser
      </button>
    </div>
  );
}
let styles = { border: "1px solid red" };

function Child(props) {
  return (
    <div style={styles}>
      <h1>This is the child</h1>
      <GrandChild
        setUser={props.setUser}
        updateSurname={props.updateSurname}
        user={props.user}
      />
    </div>
  );
}

function Parent() {
  const [user, setUser] = useState({ name: "John", surname: "Doe" });

  function updateSurname() {
    let newState = { ...user, surname: "ASDFGHHGHJKL" };
    setUser(newState);
  }

  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <Child setUser={setUser} updateSurname={updateSurname} user={user} />
    </div>
  );
}

export default Parent;
