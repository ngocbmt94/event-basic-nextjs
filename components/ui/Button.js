import Link from "next/link";
import styles from "./button.module.css";

function Button({ children, href, onClick }) {
  if (href)
    return (
      <Link href={href} className={styles.btn}>
        {children}
      </Link>
    );

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
