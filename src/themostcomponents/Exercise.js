// User (props) - User component that has some JSX for a user (dumb component)

import { useState } from "react";
import { useEffect } from "react";

// <div>
//     user.name
//     user.location
// </div>

// FetchUser() - gets info from api and sends it to User as props (smart component)

function Comp() {
  const [name, setName] = useState("Mario");
  console.log("hi");

  useEffect(function () {
  //   fetch
  }, []);

  // reactjs.org



  return <div onClick={fetch}>hi</div>;
}
