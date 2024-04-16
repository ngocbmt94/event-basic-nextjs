import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const allEvents = getFeaturedEvents();
  return (
    <div>
      HomePage
      <EventList allEvents={allEvents} />
    </div>
  );
}

export default HomePage;
