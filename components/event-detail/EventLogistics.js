import styles from "./event-logistics.module.css";
import { HiCalendarDays, HiMapPin } from "react-icons/hi2";
import LogisticsItem from "./LogisticsItem";
import { formatDate } from "../../help/help";

function EventLogistics({ date, address, image, imageAlt }) {
  const covertDate = formatDate(date);
  const addressText = address?.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={<HiCalendarDays />}>
          <time>{covertDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<HiMapPin />}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
