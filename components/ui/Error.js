import styles from "./error.module.css";
import Button from "./Button";
function Error({ children }) {
  return (
    <div className={styles.error}>
      <h2>{children}</h2>
      <Button href="/">Back</Button>
    </div>
  );
}

export default Error;
