import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import AddUserList from "./Components/Users/AddUserList";
// import Card from "./Components/UI/Card";

const App = () => {
  const [users, setUsers] = useState([]);

  const AddNewUser = (userN, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { id: Math.random().toString(), username: userN, age: age },
      ];
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
