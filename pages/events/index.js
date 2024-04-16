import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <>
      <EventSearch />
      <EventList allEvents={allEvents} />
    </>
  );
}

export default EventsPage;
