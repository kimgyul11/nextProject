import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import LoginForm from "../LoginForm";

const Modal = ({ onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};
export default Modal;
