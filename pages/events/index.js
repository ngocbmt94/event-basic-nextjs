import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../server/server";

function EventsPage({ allEvents }) {
  return (
    <>
      <EventSearch />
      <EventList allEvents={allEvents} />
    </>
  );
}

export async function getStaticProps(context) {
  const allEvents = await getAllEvents();
  return {
    props: {
      allEvents,
    },
    revalidate: 60,
  };
}

export default EventsPage;
