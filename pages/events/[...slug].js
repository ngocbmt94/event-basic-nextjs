import { useRouter } from "next/router";
import useSWR from "swr";
import { formatData, URL_DUMMY } from "../../server/server";
import { formatDate } from "../../help/help";
import Error from "../../components/ui/Error";
import EventList from "../../components/events/EventList";
import EventResult from "../../components/events/EventResult";
import { useEffect, useState } from "react";
import Head from "next/head";

// client side-rendering
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function EventsFillter() {
  const [loadEvents, setLoadEvents] = useState([]);
  const router = useRouter();
  const filter = router.query.slug;

  const { data, error } = useSWR(URL_DUMMY, fetcher);

  useEffect(() => {
    if (!data) return;
    const covertData = formatData(data);
    setLoadEvents(covertData);
  }, [data]);

  const pageHead = (
    <Head>
      <title>Filter events</title>
      <meta name="description" content="all events filter" />
    </Head>
  );

  if (!data)
    return (
      <>
        {pageHead}
        <h3 className="center">Loading....</h3>
      </>
    );
  if (filter?.length > 2 || !filter)
    return (
      <>
        {pageHead}
        <Error>Could not be found any events with filter</Error>
      </>
    );

  const year = Number(filter[0]);
  const month = Number(filter[1]);

  if (isNaN(year) || isNaN(month) || month > 12 || month < 1 || error)
    return (
      <>
        {pageHead}
        <Error>Invalid filter. Please check it again!!</Error>
      </>
    );

  const allEventsFilter = loadEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  const covertDate = new Date(year, month - 1);
  const date = formatDate(covertDate);

  if (allEventsFilter.length === 0)
    return (
      <>
        {pageHead}
        <Error>{`Could not be found event on ${date}`}</Error>
      </>
    );

  return (
    <>
      <Head>
        <title>Filter events</title>
        <meta name="description" content={`all events filter on ${date}`} />
      </Head>
      <EventResult date={date} />
      <EventList allEvents={allEventsFilter} />
    </>
  );
}

export default EventsFillter;
