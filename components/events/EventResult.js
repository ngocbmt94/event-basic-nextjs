import Button from "../ui/Button";
import styles from "./eventResult.module.css";

function ResultsTitle({ date }) {
  const formatDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={styles.title}>
      <h1>Events in {formatDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
