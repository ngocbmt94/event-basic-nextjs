import { useEffect, useState } from "react";
import styles from "./comment-list.module.css";

function CommentList({ comments }) {
  return (
    <ul className={styles.comments}>
      {comments.map((c) => (
        <li>
          <p>{c.comment}</p>
          <div>
            By <address>{c.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
