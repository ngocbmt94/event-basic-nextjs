import styles from "./eventItem.module.css";
import Button from "../ui/Button";
import { HiArrowLeftEndOnRectangle, HiCalendarDays, HiMapPin } from "react-icons/hi2";
import { formatDate } from "../../help/help";

function EventItem({ event }) {
  const { id, title, description, location, date, image } = event;
  const covertDate = formatDate(date);

  const covertLocation = location.replace(",", "\n");
  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={`img-${id}`} className={styles.img} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <HiCalendarDays />
            <time>{covertDate}</time>
          </div>
          <div className={styles.location}>
            <HiMapPin />
            <address>{covertLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button href={`/events/${id}`}>
            <HiArrowLeftEndOnRectangle />
            <span>Explore Event detail</span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
