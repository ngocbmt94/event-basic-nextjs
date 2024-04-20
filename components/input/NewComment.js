import { useRef, useState } from "react";
import styles from "./new-comment.module.css";
import { z } from "zod";
import { useNotification } from "../../context/NotificationContext";

const schemaComments = z.object({
  email: z.string().refine((value) => value.trim() !== "" && value.includes("@"), {
    message: "Please input correct email",
  }),
  name: z.string().refine((value) => value.trim() !== "", { message: "Input of title can not empty!" }),
  comment: z.string().refine((value) => value.trim() !== "", { message: "Input of name can not empty!" }),
});

function NewComment({ eventId }) {
  const [errors, setErrors] = useState({});
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();
  const { showNotification, hideNotification } = useNotification();

  function sendCommentHandler(event) {
    event.preventDefault();

    const validatedFields = schemaComments.safeParse({
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
      comment: commentInputRef.current.value,
    });
    if (!validatedFields.success) {
      const error = validatedFields.error.flatten().fieldErrors;

      const errorObj = {};

      for (const key in error) {
        errorObj[key] = error[key][0];
      }

      setErrors(errorObj);
      showNotification({ title: "Error", message: "Something went wrong!", status: "error" });
    } else {
      fetch(`/api/comments/${eventId}`, {
        method: "POST",
        body: JSON.stringify(validatedFields.data),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          showNotification({ title: "Success", message: "Successfully your comment...", status: "success" });
          setErrors({});
        });
    }
  }

  return (
    <form className={styles.form} onSubmit={sendCommentHandler}>
      <div className={styles.row}>
        <div className={styles.control}>
          <label htmlFor="email">Your email</label>
          <input type="text" id="email" name="email" ref={emailInputRef} />
          {errors?.email && <p className={styles.err}>{errors?.email}</p>}
        </div>
        <div className={styles.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {errors?.name && <p className={styles.err}>{errors?.name}</p>}
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" name="comment" rows="5" ref={commentInputRef}></textarea>
        {errors?.comment && <p className={styles.err}>{errors?.comment}</p>}
      </div>
      <button>Submit</button>
    </form>
  );
}

export default NewComment;
