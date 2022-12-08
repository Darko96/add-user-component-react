import React, { useState } from "react";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMsg, setError] = useState();

  const addUserHandler = (event) => {
    setUsername(event.target.value);
  };

  const addAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitNewUser = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid number",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddNewUser(username, age);

    setUsername("");
    setAge("");
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {errorMsg && <Modal error={errorMsg} onClick={closeModalHandler}></Modal>}
      <Card className={styles.input}>
        <form onSubmit={submitNewUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={addUserHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" value={age} onChange={addAgeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
