import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={createUser}>
        <div className={styles.formRow}>
          <label>First Name: </label>
          <input
            className={styles.formInput}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <label>Last Name: </label>
          <input
            className={styles.formInput}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <label>Email Address: </label>
          <input
            className={styles.formInput}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <label>Password: </label>
          <input
            className={styles.formInput}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <label>Confirm Password: </label>
          <input
            className={styles.formInput}
            type="text"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      <div className={styles.usersInfo}>
        <div className={styles.userInfoRow}>
          <span className={styles.userInfoLabel}>First Name:</span>
          <span>{firstName}</span>
        </div>
        <div className={styles.userInfoRow}>
          <span className={styles.userInfoLabel}>Last Name:</span>
          <span>{lastName}</span>
        </div>
        <div className={styles.userInfoRow}>
          <span className={styles.userInfoLabel}>Email: </span>
          <span>{email}</span>
        </div>
        <div className={styles.userInfoRow}>
          <span className={styles.userInfoLabel}>Password:</span>
          <span>{password}</span>
        </div>
        <div className={styles.userInfoRow}>
          <span className={styles.userInfoLabel}>Confirm Password:</span>
          <span>{confirmPassword}</span>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
