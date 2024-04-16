import styles from "./logistics-item.module.css";

function LogisticsItem({ children, icon }) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
