import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import Error from "../../components/ui/Error";
import EventList from "../../components/events/EventList";
import EventResult from "../../components/events/EventResult";

function EventsFillter() {
  const router = useRouter();
  const filter = router.query.slug;

  if (filter?.length > 2 || !filter) return <Error>Could not be found any events with filter</Error>;
  const year = Number(filter[0]);
  const month = Number(filter[1]);

  if (isNaN(year) || isNaN(month) || month > 12 || month < 1) return <Error>Invalid filter. Please check it again!!</Error>;

  const allEventsFilter = getFilteredEvents({ year, month });

  if (!allEventsFilter || allEventsFilter.length === 0) return <Error>No events found for the choosen filter</Error>;
  const covertDate = new Date(year, month - 1);
  return (
    <>
      <EventResult date={covertDate} />
      <EventList allEvents={allEventsFilter} />
    </>
  );
}

export default EventsFillter;
