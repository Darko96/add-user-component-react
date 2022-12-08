import React from "react";
import styles from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClick}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.error.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.error.message}</p>
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
