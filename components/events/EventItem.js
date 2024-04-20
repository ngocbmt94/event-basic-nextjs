import styles from "./eventItem.module.css";
import Button from "../ui/Button";
import { HiArrowLeftEndOnRectangle, HiCalendarDays, HiMapPin } from "react-icons/hi2";
import { formatDate } from "../../help/help";
import Image from "next/image";

function EventItem({ event }) {
  const { id, title, description, location, date, image } = event;
  const covertDate = formatDate(date);

  return (
    <li className={styles.item}>
      <Image src={`/${image}`} alt={`img-${id}`} width={220} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <HiCalendarDays />
            <time>{covertDate}</time>
          </div>
          <div className={styles.location}>
            <HiMapPin />
            <address>{location}</address>
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
