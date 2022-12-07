import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import AddUserList from "./Components/AddUserList";
import Card from "./Components/UI/Card";

const App = () => {
  const [users, setUsers] = useState([
    { id: "1", username: "Darko", age: "23" },
  ]);

  const AddNewUser = (enteredUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        id: Math.random().toString(),
        username: enteredUser.username,
        age: enteredUser.age,
      });
      return updatedUsers;
    });
  };

  return (
    <div>
      <AddUser onAddNewUser={AddNewUser} />
      <AddUserList users={users} />
    </div>
  );
};

export default App;
