import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../server/server";
import Head from "next/head";

function EventsPage({ allEvents }) {
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="A lot of great events allow you to envolve..." />
      </Head>
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
