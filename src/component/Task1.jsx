import React, { useEffect, useState } from "react";
import axios from "axios";
const Task1 = () => {
  const [users, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const callApi = () => {
    axios.get(url).then((resp) => {
      setUsers(resp.data);
      console.log(resp.data);
    });
  };
  useEffect(() => {
    callApi();
  }, []);

  const PersonRow = (props) => {
    const {user,onRemove}=props
    return (
      <tr>
       <td>{user.userId}</td>
       <td>{user.id}</td>
       <td>{user.title}</td>
       <td onClick={onRemove} className="actions">
        ❌
      </td>
      </tr>
    );
  };

  const onRemove=(index)=> {
    users.splice(index, 1);
    setUsers([...users]);
  }

  return (
    <>
  
      <h1>100 POSTS</h1>
      <table cellSpacing="10px " cellPadding="10px" border="2px">
        <thead>
          <tr>
            <th>USER ID</th>
            <th> ID</th>
            <th>TITLE</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <PersonRow key={index}
            onRemove={() => onRemove(index)}
           user={user} />
          ))}
        </tbody>
      </table>
      </>
  );
};
export default Task1;
