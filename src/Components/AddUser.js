import React, { useState } from "react";
import Button from "./UI/Button";
import Modal from "./Modal/Modal";
import Card from "./UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMsg, setError] = useState("");

  const addUserHandler = (event) => {
    setUsername(event.target.value);
  };

  const addAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitNewUser = (event) => {
    event.preventDefault();

    const newUser = { username: username, age: age };

    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsEmpty(true);
      setError("Please enter a valid name and age (non-empty values).");
      return;
    }

    if (age.trim() < 1) {
      setIsEmpty(true);
      setError("Please enter a valid age (> 0).");
      return;
    }

    props.onAddNewUser(newUser);

    setUsername("");
    setAge("");
    setIsEmpty(false);
  };

  const closeModalHandler = () => {
    setIsEmpty(false);
  };

  return (
    <Card className={styles.input}>
      {isEmpty && (
        <Modal message={errorMsg} onClick={closeModalHandler}></Modal>
      )}
      <form onSubmit={submitNewUser}>
        <label>Username</label>
        <input value={username} onChange={addUserHandler} />
        <label>Age(Years)</label>
        <input value={age} onChange={addAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
