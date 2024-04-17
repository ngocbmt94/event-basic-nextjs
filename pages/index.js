import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../server/server";

function HomePage({ allEventsFeatured }) {
  return (
    <div>
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
