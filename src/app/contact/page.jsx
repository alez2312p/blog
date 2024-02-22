"use client";

import { useState } from "react";
import styles from "./contactPage.module.css";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const hundlerSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    console.log(fullName, email, message);
    setError("");
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        email,
        message,
      }),
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <form onSubmit={hundlerSubmit} className={styles.content}>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.inputContainer}>
          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            id="fullName"
            className={styles.input}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email</label>
          <input
            type="text"
            id="email"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Message</label>
          <textarea
            type="text"
            id="message"
            className={styles.textArea}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className={styles.send} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
