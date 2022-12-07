import React, { useState } from "react";
import styles from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}>
        <Card>
          <header className={styles.header}>
            <h2>Invalid input</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onClick}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
