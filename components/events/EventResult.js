import Button from "../ui/Button";
import styles from "./eventResult.module.css";

function ResultsTitle({ date }) {
  return (
    <section className={styles.title}>
      <h1>Events in {date}</h1>
      <Button href="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
