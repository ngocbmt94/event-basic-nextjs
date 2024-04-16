import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import Error from "../../components/ui/Error";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;

  const event = getEventById(eventId);
  if (!event) return <Error>Could be fetching data about event with #{eventId}</Error>;

  const { description, title, date, location, image } = event;
  return (
    <>
      <p>event detail page #{eventId}</p>
      <EventSummary title={title} />
      <EventLogistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
