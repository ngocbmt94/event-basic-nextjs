import EventItem from "./EventItem";
import styles from "./eventList.module.css";

function EventList({ allEvents }) {
  return (
    <ul className={styles.list}>
      {allEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
