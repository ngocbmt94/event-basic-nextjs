import Head from "next/head";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../server/server";

function HomePage({ allEventsFeatured }) {
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="A lot of great events allow you to envolve..." />
      </Head>
      <EventList allEvents={allEventsFeatured} />
    </div>
  );
}

export async function getStaticProps(context) {
  const eventsFeatured = await getFeaturedEvents();

  return {
    props: {
      allEventsFeatured: eventsFeatured,
    },
    revalidate: 100,
  };
}

export default HomePage;
