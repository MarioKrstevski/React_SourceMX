import React, { useEffect, useState } from "react";
import axios from "axios";

const usersAPI = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
    baseURL: usersAPI,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

function Axios() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    instance.get('/users').then((json) => {
      console.log(json);
      setUsers(json.data);
    });
    //fetch
  }, []);

  return (
    <div>
      <div>axios</div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Axios;
