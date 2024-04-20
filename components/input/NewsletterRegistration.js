import { useState } from "react";
import styles from "./newsletter-registration.module.css";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { useNotification } from "../../context/NotificationContext";

const emailSchema = z
  .string()
  .min(1, { message: "This field has to be filled" })
  .refine((value) => value.trim() !== "" && value.includes("@"), { message: "Invalid email" });

function NewsletterRegistration() {
  const [emailUser, setEmailUser] = useState("");
  const [message, setMessage] = useState("");
  const { showNotification, hideNotification } = useNotification();

  function registrationHandler(event) {
    event.preventDefault();

    try {
      const validEmail = emailSchema.parse(emailUser);
      fetch("/api/registration", {
        method: "POST",
        body: JSON.stringify({
          email: validEmail,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          showNotification({ title: "Success", message: "Successfully register for newsletter...", status: "success" });
          setEmailUser("");
          setMessage("");
        });
    } catch (err) {
      const validationError = fromZodError(err);
      setMessage(validationError.toString());
      showNotification({ title: "Error", message: validationError.toString() || "Something went wrong!", status: "error" });
    }
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input type="text" id="email" name="email" placeholder="Your email" value={emailUser} onChange={(e) => setEmailUser(e.target.value)} />
          <button>Register</button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </section>
  );
}

export default NewsletterRegistration;
