import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
  };

  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for submitting your form";
    } else {
      return "Welcome, Please fill out the Form";
    }
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length === 0) {
      setFirstNameError("");
    } else if (e.target.value.length < 2) {
      setFirstNameError("First name must be at least 2 characters.");
    } else {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length === 0) {
      setLastNameError("");
    } else if (e.target.value.length < 2) {
      setLastNameError("Last name must be at least 2 characters.");
    } else {
      setLastNameError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length === 0) {
      setEmailError("");
    } else if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters.");
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length === 0) {
      setPasswordError("");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords must match!");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={createUser}>
        <h3>{formMessage()}</h3>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label className={styles.formFieldLabel}>First Name: </label>
            <input
              className={styles.formInput}
              type="text"
              onChange={handleFirstName}
            />
          </div>
          {firstNameError ? (
            <p className={styles.errorMessage}>{firstNameError}</p>
          ) : (
            ""
          )}
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label className={styles.formFieldLabel}>Last Name: </label>
            <input
              className={styles.formInput}
              type="text"
              onChange={handleLastName}
            />
          </div>
          {lastNameError ? (
            <p className={styles.errorMessage}>{lastNameError}</p>
          ) : (
            ""
          )}
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label className={styles.formFieldLabel}>Email: </label>
            <input
              className={styles.formInput}
              type="email"
              onChange={handleEmail}
            />
          </div>
          {emailError ? (
            <p className={styles.errorMessage}>{emailError}</p>
          ) : (
            ""
          )}
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label className={styles.formFieldLabel}>Password: </label>
            <input
              className={styles.formInput}
              type="password"
              onChange={handlePassword}
            />
          </div>
          {passwordError ? (
            <p className={styles.errorMessage}>{passwordError}</p>
          ) : (
            ""
          )}
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label className={styles.formFieldLabel}>Confirm Password: </label>
            <input
              className={styles.formInput}
              type="password"
              onChange={handleConfirmPassword}
            />
          </div>
          {confirmPasswordError ? (
            <p className={styles.errorMessage}>{confirmPasswordError}</p>
          ) : (
            ""
          )}
        </div>

        <button className={styles.submitBtn}>Submit</button>
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
