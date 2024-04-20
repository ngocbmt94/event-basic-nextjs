import { useEffect, useState } from "react";

import CommentList from "./CommentList";
import NewComment from "./NewComment";
import styles from "./comments.module.css";

function Comments({ eventId }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => setComments(data.comments));
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? "Hide" : "Show"} Comments</button>
      {showComments && <NewComment eventId={eventId} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
